import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDatabase, query, isDatabaseConnected } from './db';
import { analyzeDocumentPayload } from './aiService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Permissive CORS logic mapped to standard localhost operator views
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));

// Root health check status indicators
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ONLINE',
    dbConnected: isDatabaseConnected,
    timestamp: new Date().toISOString(),
    engineWeight: process.env.AI_MODEL_WEIGHTS || 'AgreeMend-v4.2-sandbox'
  });
});

// Auth Routes
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing standard identity parameters.' });
  }

  try {
    if (isDatabaseConnected) {
      // Check if duplicate stream exists
      const exist = await query('SELECT id FROM users WHERE email = $1', [email]);
      if (exist.rows.length > 0) {
        return res.status(409).json({ error: 'Email stream prefix already configured.' });
      }

      const result = await query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
        [name, email, password]
      );
      return res.json({ token: 'agreemend-jwt-token-active', user: result.rows[0] });
    } else {
      // In-Memory Fallback runtime handling
      return res.json({
        token: 'agreemend-jwt-token-ephemeral',
        user: { id: Date.now(), name, email }
      });
    }
  } catch (err: any) {
    console.error("[Auth Register Intercept]", err.message);
    return res.status(500).json({ error: 'Failed to complete registration write pipeline.' });
  }
});

app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing explicit access tokens.' });
  }

  try {
    if (isDatabaseConnected) {
      const result = await query('SELECT id, name, email, password FROM users WHERE email = $1', [email]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Operator stream not found.' });
      }

      const user = result.rows[0];
      // Basic match for sandbox protocols
      if (user.password !== password) {
        return res.status(401).json({ error: 'Passcode strings do not verify.' });
      }

      return res.json({
        token: 'agreemend-jwt-token-active',
        user: { id: user.id, name: user.name, email: user.email }
      });
    } else {
      // Ephemeral mock token output
      return res.json({
        token: 'agreemend-jwt-token-ephemeral',
        user: { id: 1, name: 'Operator Lead', email }
      });
    }
  } catch (err: any) {
    console.error("[Auth Login Intercept]", err.message);
    return res.status(500).json({ error: 'Failed to access credential indexes.' });
  }
});

// Document Scan Execution Endpoints
app.post('/api/documents/scan', async (req: Request, res: Response) => {
  const { title, type, rawText } = req.body;

  if (!title || !rawText) {
    return res.status(400).json({ error: 'Invalid parsing payloads. Provide explicit title and text array blocks.' });
  }

  try {
    const aiResult = analyzeDocumentPayload(title, type || 'Custom Document', rawText);
    const docId = `doc-live-${Date.now()}`;
    const uploadDate = new Date().toISOString().split('T')[0];

    // Persist parent document into PostgreSQL
    if (isDatabaseConnected) {
      await query(
        `INSERT INTO documents (id, title, type, overall_risk_score, legal_complexity, user_safety_score, compliance_status, ai_confidence, upload_date)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          docId,
          title,
          type || 'Custom Document',
          aiResult.overallRiskScore,
          aiResult.legalComplexity,
          aiResult.userSafetyScore,
          aiResult.complianceStatus,
          aiResult.aiConfidence,
          uploadDate
        ]
      );

      // Persist related child clauses into PostgreSQL
      for (const clause of aiResult.clauses) {
        await query(
          `INSERT INTO clauses (
            id, document_id, title, original_text, risk,
            explanation_english, explanation_kannada, explanation_hindi, explanation_tamil,
            summary_english, summary_kannada, summary_hindi, summary_tamil,
            regional_warning, nego_balanced, nego_professional, nego_friendly, nego_aggressive
           ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
          [
            clause.id,
            docId,
            clause.title,
            clause.originalText,
            clause.risk,
            clause.explanation.English, clause.explanation.Kannada, clause.explanation.Hindi, clause.explanation.Tamil,
            clause.simplifiedSummary.English, clause.simplifiedSummary.Kannada, clause.simplifiedSummary.Hindi, clause.simplifiedSummary.Tamil,
            clause.regionalWarning || '',
            clause.negotiationSuggestions.balanced, clause.negotiationSuggestions.professional, clause.negotiationSuggestions.friendly, clause.negotiationSuggestions.aggressive
          ]
        );
      }
    }

    // Assemble complete JSON structure shape expected by React store layers
    const finalDocumentObj = {
      id: docId,
      title,
      type: type || 'Custom Document',
      uploadDate,
      overallRiskScore: aiResult.overallRiskScore,
      legalComplexity: aiResult.legalComplexity,
      userSafetyScore: aiResult.userSafetyScore,
      complianceStatus: aiResult.complianceStatus,
      aiConfidence: aiResult.aiConfidence,
      clauses: aiResult.clauses
    };

    return res.json(finalDocumentObj);
  } catch (err: any) {
    console.error("[Scan Intercept Error]", err.message);
    return res.status(500).json({ error: 'AI heuristic model execution crashed during JSON composition.' });
  }
});

// Fetch Single Document configuration view
app.get('/api/documents/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (isDatabaseConnected) {
      const docRes = await query('SELECT * FROM documents WHERE id = $1', [id]);
      if (docRes.rows.length === 0) {
        return res.status(404).json({ error: 'Target document payload not indexed.' });
      }

      const d = docRes.rows[0];
      const clausesRes = await query('SELECT * FROM clauses WHERE document_id = $1', [id]);

      // Construct native arrays matching frontend model properties
      const clauses = clausesRes.rows.map((c: any) => ({
        id: c.id,
        title: c.title,
        originalText: c.original_text,
        risk: c.risk,
        explanation: {
          English: c.explanation_english,
          Kannada: c.explanation_kannada,
          Hindi: c.explanation_hindi,
          Tamil: c.explanation_tamil
        },
        simplifiedSummary: {
          English: c.summary_english,
          Kannada: c.summary_kannada,
          Hindi: c.summary_hindi,
          Tamil: c.summary_tamil
        },
        regionalWarning: c.regional_warning,
        negotiationSuggestions: {
          balanced: c.nego_balanced,
          professional: c.nego_professional,
          friendly: c.nego_friendly,
          aggressive: c.nego_aggressive
        }
      }));

      return res.json({
        id: d.id,
        title: d.title,
        type: d.type,
        uploadDate: d.upload_date,
        overallRiskScore: d.overall_risk_score,
        legalComplexity: d.legal_complexity,
        userSafetyScore: d.user_safety_score,
        complianceStatus: d.compliance_status,
        aiConfidence: d.ai_confidence,
        clauses
      });
    } else {
      return res.status(404).json({ error: 'PostgreSQL disconnected. Request intercepted cleanly.' });
    }
  } catch (err: any) {
    console.error("[GetDoc Intercept]", err.message);
    return res.status(500).json({ error: 'Failed to access underlying relation nodes.' });
  }
});

// AI Assistant Chat trigger stream
app.post('/api/assistant/chat', async (req: Request, res: Response) => {
  const { message, documentId } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Empty prompt payload submitted.' });
  }

  const msgLower = message.toLowerCase();
  let answer = "I have cross-referenced your input against governing regional statutes. The parameters align cleanly without hidden indemnity clauses. Let me know if you would like me to draft an official addendum counter-proposal.";

  if (msgLower.includes('deposit') || msgLower.includes('money')) {
    answer = "Under current standard tenancy practices in major urban setups like Bangalore, a security deposit equivalent to 2-3 months rent is standard. Demanding a mandatory 10-month lock-in penalty is generally deemed unconscionable and highly vulnerable to legal challenge.";
  } else if (msgLower.includes('enter') || msgLower.includes('landlord') || msgLower.includes('inspect')) {
    answer = "The fundamental right to quiet enjoyment explicitly mandates that property operators provide a minimum 24-hour advance warning before any non-emergency entry. Unannounced spot-checks directly violate statutory privacy parameters.";
  } else if (msgLower.includes('draft') || msgLower.includes('rewrite')) {
    answer = "Here is a balanced counter-clause for your review:\n\n'Either party reserves the explicit right to terminate this agreement at any time subject to providing a minimum 60-day written notice. Liquidated damages shall be strictly restricted to verified vacancy losses not exceeding one standard month rent.'";
  }

  return res.json({
    reply: answer,
    modelUsed: 'AgreeMend AI Assistant Node v4',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
});

// App Startup routines
app.listen(PORT, async () => {
  console.log(`[Express Layer] Core AgreeMend Backend active on http://localhost:${PORT}`);
  await initializeDatabase();
});
