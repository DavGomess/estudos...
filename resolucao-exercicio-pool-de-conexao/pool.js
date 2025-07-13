const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://postgres:admin@localhost:5432/exercicio_pool",
});

async function query(queryString, params, callback) {
    return pool.query(queryString, params, callback);
}

module.exports = { query };

