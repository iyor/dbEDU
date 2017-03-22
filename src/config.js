import {} from 'dotenv/config'

const PORT = process.env.PORT || '3000'
//const DB_URL = process.env.DB_URL  // temporarily disabled to check reader only
const DB_URL = process.env.DB_URL_TEST || DB_URL//temporarily added to check reader only user
const DB_COLL = 'Courses'
export default  {
  DB_URL,
  PORT,
  DB_COLL
}
