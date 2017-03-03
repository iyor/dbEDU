import config from 'config'
import express from 'express'
import db from 'services/db'
import { dbClient } from 'services/db'

var router = express.Router();

router.get('/', (req, res, next) => {
  var findDocs = dbClient.collection('documents');
  findDocs.find({}).toArray().then(function(docs) {
    res.json({
      docs: docs
    });
  });
})

router.get('/courseNames', (req, res, next) => {
  var findDocs = dbClient.collection('documents');
  findDocs.find({}).toArray().then(function(docs) {
    const cleaned = [];
    for (var names of docs) {
      cleaned.push({Coursename:names.a});
    }
    res.send(cleaned);
  })
});

export default router
