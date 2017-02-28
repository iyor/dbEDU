import config from 'config'
import express from 'express'
import db from 'services/db'
import {documents} from 'services/dbServices'

var router = express.Router();

router.get('/', (req, res, next) => {
  var entries = documents();
  res.json({
    message: 'Backend up and running!!',
    version: '0.0.1',
	docs: entries
  })
})

router.get('/test',  (req, res, next) => {
  console.log("TRYING TO REACH DB")
})

function callback() {
	console.log("IN THE CALLBACK")
}

export default router
