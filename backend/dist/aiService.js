"use strict";
// Sample AI Verification Sandbox logic
// Parses plain text contracts into structured arrays matching AgreeMend client state shapes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeDocumentPayload = void 0;
const analyzeDocumentPayload = (title, type, rawText) => {
    const lowerText = rawText.toLowerCase();
    const clauses = [];
    // Simulate ML modeling weights based on heuristic presence
    let riskScore = 20;
    let complexity = 45;
    let safety = 80;
    // Check 1: Security Deposit & Lock-in conditions
    if (lowerText.includes('deposit') || lowerText.includes('lock-in') || lowerText.includes('forfeit') || type.toLowerCase().includes('rental')) {
        riskScore += 35;
        complexity += 15;
        safety -= 20;
        clauses.push({
            id: `c-gen-${Date.now()}-1`,
            title: "Security Deposit & Termination Cap",
            originalText: rawText.length > 150 ? rawText.substring(0, 240) + "..." : "Mandatory lock-in conditions enforce immediate security deposit forfeiture upon early exit routes.",
            risk: "Red Flag",
            explanation: {
                English: "The identified text sequence applies highly rigid exit constraints without balanced reciprocal protection for operator capital.",
                Kannada: "ಈ ಪಠ್ಯವು ಆಪರೇಟರ್ ಬಂಡವಾಳಕ್ಕೆ ಸಮತೋಲಿತ ಪರಸ್ಪರ ರಕ್ಷಣೆಯಿಲ್ಲದೆ ಹೆಚ್ಚು ಕಠಿಣವಾದ ನಿರ್ಗಮನ ನಿರ್ಬಂಧಗಳನ್ನು ಅನ್ವಯಿಸುತ್ತದೆ.",
                Hindi: "पहचानी गई पाठ अनुक्रम ऑपरेटर पूंजी के लिए संतुलित पारस्परिक सुरक्षा के बिना अत्यधिक कठोर निकास प्रतिबंध लागू करती है।",
                Tamil: "அடையாளம் காணப்பட்ட உரைத் தொடர், ஆபரேட்டர் மூலதனத்திற்கான சீரான பரஸ்பர பாதுகாப்பு இல்லாமல் மிகவும் கடுமையான வெளியேற்றக் கட்டுப்பாடுகளைப் பயன்படுத்துகிறது."
            },
            simplifiedSummary: {
                English: "Leaving early triggers immediate capital loss.",
                Kannada: "ಬೇಗನೆ ತೊರೆದರೆ ತಕ್ಷಣದ ಬಂಡವಾಳ ನಷ್ಟವಾಗುತ್ತದೆ.",
                Hindi: "समय से पहले छोड़ने पर तत्काल पूंजी का नुकसान होता है।",
                Tamil: "முன்கூட்டியே வெளியேறுவது உடனடி மூலதன இழப்பைத் தூண்டுகிறது."
            },
            regionalWarning: "Karnataka State Rent Protocol guidelines cap residential exit forfeitures closely around active monthly notice averages.",
            negotiationSuggestions: {
                balanced: "Either party reserves mutual exit termination rights given 60 days structured advance notice.",
                professional: "In the event of early termination, liquidated damages shall be mutually verified against actual documented physical vacancy periods.",
                friendly: "Let us maintain predictable exits by capping sudden financial liability to exactly one standard month rent.",
                aggressive: "Blanket deposit capture logic denied. Forfeiture variables stricken entirely from operative clauses."
            }
        });
    }
    // Check 2: Unilateral Access or Audit rights
    if (lowerText.includes('inspect') || lowerText.includes('enter') || lowerText.includes('access') || lowerText.includes('without notice')) {
        riskScore += 25;
        safety -= 15;
        clauses.push({
            id: `c-gen-${Date.now()}-2`,
            title: "Unilateral Entry & Inspection Access",
            originalText: "Authorized primary agents reserve unconditional physical entry parameters at any active operational time segment.",
            risk: "Red Flag",
            explanation: {
                English: "Permits unannounced operational surveillance, directly bypassing standard statutory requirements for mutual quiet enjoyment.",
                Kannada: "ಪರಸ್ಪರ ಶಾಂತಿಯುತ ಅನುಭೋಗಕ್ಕಾಗಿ ಪ್ರಮಾಣಿತ ಶಾಸನಬದ್ಧ ಅವಶ್ಯಕತೆಗಳನ್ನು ನೇರವಾಗಿ ಬೈಪಾಸ್ ಮಾಡುವ ಮೂಲಕ ಅಘೋಷಿತ ಕಾರ್ಯಾಚರಣೆಯ ಕಣ್ಗಾವಲಿಗೆ ಅನುಮತಿಸುತ್ತದೆ.",
                Hindi: "परस्पर शांतिपूर्ण उपभोग के लिए मानक वैधानिक आवश्यकताओं को सीधे दरकिनार करते हुए अघोषित परिचालन निगरानी की अनुमति देता है।",
                Tamil: "பரஸ்பர அமைதியான இன்பத்திற்கான நிலையான சட்டப்பூர்வ தேவைகளை நேரடியாகத் தவிர்த்து, அறிவிக்கப்படாத செயல்பாட்டு கண்காணிப்பை அனுமதிக்கிறது."
            },
            simplifiedSummary: {
                English: "Unannounced physical checks without mandatory warning.",
                Kannada: "ಕಡ್ಡಾಯ ಮುನ್ಸೂಚನೆಯಿಲ್ಲದೆ ಅಘೋಷಿತ ಭೌತಿಕ ತಪಾಸಣೆ.",
                Hindi: "अनिवार्य चेतावनी के बिना अघोषित भौतिक जांच।",
                Tamil: "கட்டாய எச்சரிக்கை இல்லாமல் அறிவிக்கப்படாத உடல் பரிசோதனைகள்."
            },
            regionalWarning: "Statutory frameworks enforce guaranteed advance notifications prior to routine domestic or non-emergency utility checkups.",
            negotiationSuggestions: {
                balanced: "Access shall be coordinated at least 24 hours in advance during mutually convenient business hours.",
                professional: "Routine maintenance inspections shall require prior electronic notice and confirmation from the active holding tenant.",
                friendly: "A simple SMS text verification prior to any utility walkthrough keeps scheduling perfectly streamlined.",
                aggressive: "Unannounced entry protocol stricken. Access strictly bound to confirmed explicit advance written clearance."
            }
        });
    }
    // Check 3: Generic fallthrough clause if document is extremely short or blank
    if (clauses.length === 0) {
        clauses.push({
            id: `c-gen-${Date.now()}-safe`,
            title: "Standard Execution Clause",
            originalText: rawText || "Standard operational agreement parameters executed mutually.",
            risk: "Safe",
            explanation: {
                English: "Conforms closely to predictive baseline string matrices. No active red flags detected.",
                Kannada: "ಮುನ್ಸೂಚಕ ಬೇಸ್‌ಲೈನ್ ಸ್ಟ್ರಿಂಗ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್‌ಗಳಿಗೆ ಹತ್ತಿರದಲ್ಲಿದೆ. ಯಾವುದೇ ಸಕ್ರಿಯ ಕೆಂಪು ಧ್ವಜಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
                Hindi: "भविष्य कहनेवाला बेसलाइन स्ट्रिंग मैट्रिसेस के करीब है। कोई सक्रिय लाल झंडा नहीं मिला।",
                Tamil: "முன்கணிப்பு அடிப்படை சரம் மெட்ரிக்குகளுக்கு நெருக்கமாக இணங்குகிறது. செயலில் உள்ள சிவப்பு கொடிகள் எதுவும் கண்டறியப்படவில்லை."
            },
            simplifiedSummary: {
                English: "Standard verifiable agreement terms.",
                Kannada: "ಪ್ರಮಾಣಿತ ಪರಿಶೀಲಿಸಬಹುದಾದ ಒಪ್ಪಂದದ ನಿಯಮಗಳು.",
                Hindi: "मानक सत्यापन योग्य समझौते की शर्तें।",
                Tamil: "நிலையான சரிபார்க்கக்கூடிய ஒப்பந்த விதிமுறைகள்."
            },
            negotiationSuggestions: {
                balanced: "Terms executed as documented.",
                professional: "Standard corporate execution verified.",
                friendly: "Looks clean and professional.",
                aggressive: "Adopted verbatim."
            }
        });
    }
    // Final numeric safeguards capping percentages nicely
    const clampedRisk = Math.min(100, Math.max(10, riskScore));
    const clampedComplexity = Math.min(98, Math.max(25, complexity));
    const clampedSafety = Math.min(95, Math.max(20, safety));
    return {
        overallRiskScore: clampedRisk,
        legalComplexity: clampedComplexity,
        userSafetyScore: clampedSafety,
        complianceStatus: clampedRisk > 50 ? "Needs Review" : "Verified Protocol",
        aiConfidence: 96,
        clauses
    };
};
exports.analyzeDocumentPayload = analyzeDocumentPayload;
