import config from 'config'
import express from 'express'
import db from 'services/db'


var router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'Backend up and running!!',
    version: '0.0.1'
  })
})

router.get('/test',  (req, res, next) => {
  console.log("TRYING TO REACH DB")
})


export default router
