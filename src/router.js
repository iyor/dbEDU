import config from 'config'
import express from 'express'
import db from 'services/db'
import { dbClient } from 'services/db'

var router = express.Router();

router.get('/', (req, res, next) => {
  var findDocs = dbClient.collection('documents');
  var entries;
  findDocs.find({}).toArray().then(function(docs) {
    res.json({
      message: 'Backend up and running!!',
      version: '0.0.1',
      docs: docs
    });
  });
})

export default router
