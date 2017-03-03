import config from 'config'
import express from 'express'
import { getCourses , getCourseNames } from 'routes/studentroutes'
import { dbClient } from 'services/db'

var router = express.Router();

router.get('/', (req, res, next) => {
  getCourses().then(function(docs) {
    res.json({
      docs: docs
    });
  });
})

router.get('/courseNames', (req, res, next) => {
   getCourseNames().then(function(docs) {
    res.json({
      courseName : docs
    });
  });
});


export default router
