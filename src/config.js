import {} from 'dotenv/config'

const PORT = process.env.PORT || '3000'
//const DB_URL = process.env.DB_URL  // temporarily disabled to check reader only
const DB_URL = process.env.DB_URL_TEST //temporarily added to check reader only user
const DB_COURSES = 'Courses'
const DB_EVALS = 'Evaluators'

export default  {
  DB_URL,
  PORT,
  DB_COURSES,
  DB_EVALS
}
