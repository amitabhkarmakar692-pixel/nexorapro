const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgresql://postgres:60660nexorabro%40@db.hbnlxzcmbkinzkitrlps.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false }
});
client.connect()
  .then(() => client.query('SELECT count(*) FROM information_schema.tables WHERE table_schema = \'public\';'))
  .then(res => {
    console.log('Tables count:', res.rows[0].count);
    return client.query("SELECT * FROM pg_stat_activity WHERE state = 'active'");
  })
  .then(res => {
    console.log(res.rows.map(r => r.query));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
