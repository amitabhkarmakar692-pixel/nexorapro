const { Client } = require('pg');
const connectionString = 'postgresql://postgres:60660nexorabro%40@db.hbnlxzcmbkinzkitrlps.supabase.co:5432/postgres';
const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
});
client.connect()
  .then(() => {
    console.log('Connected!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection error:', err);
    process.exit(1);
  });
