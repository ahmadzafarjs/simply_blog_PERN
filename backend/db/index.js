import pkg from "pg";
const { Pool } = pkg

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'simply_blog',
    password: 'postgres',
    port: 5432,
})

async function connectDB() {
    try {
        await pool.connect()
        console.log('Connected to database')
    } catch (error) {
        console.log('Error connecting to database', error)
    }
}

export default connectDB
