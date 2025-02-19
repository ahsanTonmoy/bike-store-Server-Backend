import dotenv from 'dotenv'
import path from 'node:path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.port,
  database_Url: process.env.database_url,
}
