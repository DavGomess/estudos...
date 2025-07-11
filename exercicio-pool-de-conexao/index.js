const pg = require("pg");

const db = new pg.Client({
    connectionString: "postgres://postgres:admin@localhost:5432/exercicio_pool",
})

async function createTable() {
    await db.connect();

    const query = `CREATE TABLE IF NOT EXISTS "public"."eventos" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        data_evento DATE,
        ingresso_total INT,
        ingresso_vendidos INT,
        situacao VARCHAR(255)
    );
    `;

    const result = await db.query(query);
    console.log(result);

    await db.end();
}

async function insertContent() {
    await db.connect();

    const evento = { name: "lolapalloza", data_evento: "2025-12-20", ingresso_total: 1000, ingresso_vendidos: 10, situacao: "cancelado" };
    const result = await db.query(
        `INSERT INTO "eventos" (name, data_evento, ingresso_total, ingresso_vendidos, situacao) VALUES ($1, $2, $3, $4, $5);`,
        [evento.name, evento.data_evento, evento.ingresso_total, evento.ingresso_vendidos, evento.situacao]
    );
    console.log(result);

    await db.end();
}

async function showEvents() {
    await db.connect();

    const query = `
         SELECT * FROM eventos;
    `;
    const result = await db.query(query)
    console.log(result.rows);

    await db.end();
}

async function showEventsByName() {
    await db.connect();

    const query = `
         SELECT * FROM eventos WHERE name = 'lolapalloza'
    `;
    const result = await db.query(query)
    console.log(result)

    await db.end();
}

async function showEventsByDate() {
    await db.connect();

    const query = `
         SELECT * FROM eventos WHERE data_evento = '2027-10-01'
    `;
    const result = await db.query(query)
    console.log(result)

    await db.end();
}

async function ticketSale() {
    await db.connect();

    const result = await db.query(
        `UPDATE eventos 
        SET ingresso_vendidos = ingresso_vendidos + 1 
        WHERE ingresso_vendidos < ingresso_total 
        AND situacao = 'pendente';`,
    );

    console.log(result);

    await db.end();
}






createTable();
insertContent();
showEvents();
showEventsByName();
showEventsByDate();
ticketSale();