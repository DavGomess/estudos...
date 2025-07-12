const pg = require("pg");

const connectionString = "postgres://postgres:admin@localhost:5432/node_postgres";

const db = new pg.Client({ connectionString });

async function insertPokemon() {
    await db.connect();

    // forma basica
    const query = `INSERT INTO "public"."Pokemon" (name, type) VALUES ('Sprigatito', 'Grama');`;
    const result1 = await db.query(query)
    console.log(result1)

    // //  dados dinamicos de forma ERRADA
    const name = "Fuecoco";
    const type = "Fogo";
    const result2 = await db.query(
        `INSERT INTO "Pokemon" (name, type) VALUES ('${name}', '${type}');`
    );
    console.log(result2);

    // dados dinamicos de forma CORRETA
    const pokemon = { name: "Quaxly", type: "Água" };
    const result3 = await db.query(
        `INSERT INTO "Pokemon" (name, type) VALUES ($1, $2);`,
        [pokemon.name, pokemon.type]
    );

    console.log(result3);

    await db.end();
}

insertPokemon();