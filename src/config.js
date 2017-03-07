import {} from 'dotenv/config'

const PORT = process.env.PORT || '3000'
const DB_URL = process.env.DB_URL
const DB_COLL = 'Courses'
export default  {
  DB_URL,
  PORT,
  DB_COLL
}
