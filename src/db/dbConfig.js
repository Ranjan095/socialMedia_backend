import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
})

// Test connection
export const connectPostgres = async () => {
  try {
    await pool.connect()
    console.log('✅ Connected to the database')
  } catch (error) {
    console.error('❌ Error connecting to the database:', error)
  }
}

export default pool
