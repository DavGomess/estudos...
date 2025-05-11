import pg from 'pg';

const pool = new pg.Pool({
  connectionString: 'postgres://postgres:admin@localhost:5432/postgres'
});

export { pool }
