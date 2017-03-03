import config from 'config'
import express from 'express'
import db from 'services/db'
import dbServices from 'services/dbServices'
import {documents, test} from 'services/dbServices'

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
  dbServices.test();
})

function callback() {
	console.log("IN THE CALLBACK")
}

export default router
