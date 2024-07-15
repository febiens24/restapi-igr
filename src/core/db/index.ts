// const Pool = require('pg').Pool

// export const salesPool = Pool({
//   user: process.env.DB_USER_SALES,
//   host: process.env.DB_HOST_SALES,
//   database: process.env.DB_NAME_SALES,
//   password: process.env.DB_PASSWORD_SALES,
//   port: process.env.DB_PORT_SALES
// })
import { Pool } from 'pg'

// Konfigurasi koneksi database
const pool = new Pool({
  user: process.env.DB_USER_SALES,
  host: process.env.DB_HOST_SALES,
  database: process.env.DB_NAME_SALES,
  password: process.env.DB_PASSWORD_SALES,
  port:
    process.env.DB_PORT_SALES != null
      ? parseInt(process.env.DB_PORT_SALES)
      : 5433
})

// Fungsi untuk menjalankan query
export const query = async (text: string, params?: any[]) => {
  return await pool.query(text, params)
}
