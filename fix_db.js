const { Client } = require('pg');

async function main() {
  const connectionString = 'postgresql://postgres:60660nexorabro%40@db.hbnlxzcmbkinzkitrlps.supabase.co:5432/postgres';
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();
  
  await client.query(`
    ALTER TABLE pending_confirmations 
      ADD COLUMN IF NOT EXISTS status VARCHAR(255) DEFAULT 'pending',
      ADD COLUMN IF NOT EXISTS note TEXT,
      ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMP,
      ADD COLUMN IF NOT EXISTS rejected_reason TEXT,
      ADD COLUMN IF NOT EXISTS submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
  `);
  
  console.log('Fixed pending_confirmations table schema.');
  
  await client.end();
}

main();
