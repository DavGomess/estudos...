const { query } = require('../database')

class Customer {
    constructor(customerRow) {
        this.id = customerRow.id
        this.nome = customerRow.nome
        this.email = customerRow.email
        this.createdAt = new Date(customerRow.created_at)
        this.updatedAt = new Date(customerRow.updated_at)
    }

    
    static async findAll() {
        const result = await query(`SELECT * FROM customers;`)
        return result.rows.map((row) => new Customer(row))
    }

    static async findById(id) {
    const result = await query(`SELECT * FROM customers WHERE id = $1;`, [id])
    if (!result.rows[0]) return null
    return new Customer(result.rows[0])
    }
    
    static async create({ nome, email }) {
        const customerExists = await query(`SELECT * FROM customers WHERE email = $1;`, [email])
        if (customerExists.rows[0]) throw new Error("Email already in use!")

        const result = await query(
            `INSERT INTO customers (nome, email) VALUES ($1, $2) RETURNING *`,
            [nome, email]
        )
        return new Customer(result.rows[0]) 
    }

    static async update(id, attributes) {
        const { rows } = await query(`SELECT * FROM customers WHERE id = $1`, [id])
        if (!rows[0]) return null
    
        const customer = new Customer(rows[0])

        Object.assign(customer, attributes)
        customer.updatedAt = new Date()
        await query(
            `UPDATE customers SET
                nome = $1,
                email = $2,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $3;`,

            [
                customer.nome,
                customer.email,
                customer.id
            ]
        )

        return customer
    }

    static async delete(id) {
        const result = await query(`DELETE FROM customers WHERE id = $1 RETURNING *;`, [id])
        if(!result.rows[0]) return null
        return new Customer(result.rows[0])
    }
}

module.exports = Customer