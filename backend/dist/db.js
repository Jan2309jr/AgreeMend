"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = exports.query = exports.isDatabaseConnected = exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/agreemend';
exports.pool = new pg_1.Pool({
    connectionString,
    connectionTimeoutMillis: 5000, // Do not hang forever if PostgreSQL is offline
});
// Helper variable tracking active connection state
exports.isDatabaseConnected = false;
// Safe wrapper for query execution that catches DB downtime gracefully
const query = async (text, params) => {
    if (!exports.isDatabaseConnected) {
        console.warn("[DB Intercept] PostgreSQL connection offline. Operating on ephemeral runtime variables.");
        return { rows: [], rowCount: 0 };
    }
    return exports.pool.query(text, params);
};
exports.query = query;
const initializeDatabase = async () => {
    try {
        const client = await exports.pool.connect();
        exports.isDatabaseConnected = true;
        console.log("[DB Adapter] Successfully connected to PostgreSQL server.");
        // Enforce Table Schemas
        await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
        await client.query(`
      CREATE TABLE IF NOT EXISTS documents (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        type VARCHAR(100) NOT NULL,
        overall_risk_score INT DEFAULT 0,
        legal_complexity INT DEFAULT 0,
        user_safety_score INT DEFAULT 0,
        compliance_status VARCHAR(100) DEFAULT 'Needs Review',
        ai_confidence INT DEFAULT 95,
        upload_date VARCHAR(50)
      );
    `);
        await client.query(`
      CREATE TABLE IF NOT EXISTS clauses (
        id VARCHAR(100) PRIMARY KEY,
        document_id VARCHAR(100) REFERENCES documents(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        original_text TEXT NOT NULL,
        risk VARCHAR(50) DEFAULT 'Safe',
        explanation_english TEXT,
        explanation_kannada TEXT,
        explanation_hindi TEXT,
        explanation_tamil TEXT,
        summary_english TEXT,
        summary_kannada TEXT,
        summary_hindi TEXT,
        summary_tamil TEXT,
        regional_warning TEXT,
        nego_balanced TEXT,
        nego_professional TEXT,
        nego_friendly TEXT,
        nego_aggressive TEXT
      );
    `);
        console.log("[DB Adapter] Verified relational tables: users, documents, clauses.");
        client.release();
    }
    catch (err) {
        exports.isDatabaseConnected = false;
        console.error(`[DB Adapter Warning] Failed to reach PostgreSQL instance at ${connectionString}.`);
        console.error("[DB Adapter Warning] Details:", err.message);
        console.error("[DB Adapter Warning] Ensure PostgreSQL daemon is running and database 'agreemend' exists.");
        console.error("[DB Adapter Warning] Express Server will continue in in-memory Mock Sandbox Mode cleanly.");
    }
};
exports.initializeDatabase = initializeDatabase;
