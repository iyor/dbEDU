import config from 'config'
import express from 'express'
import * as student from 'routes/studentroutes'
import { dbClient } from 'services/db'

var router = express.Router();

router.get('/', (req, res, next) => {
  student.getCourses().then(function(docs) {
    res.json({
      docs: docs
    });
  });
})

router.get('/courseNames', (req, res, next) => {
  student.getCourseNames().then(function(docs) {
    res.json({
      courseName : docs
    });
  });
});


router.get('/courseDesc', (req, res, next) => {
  student.getCourseDescription().then(function(docs) {
    res.json({
      courseDesc : docs
    });
  });
});

export default router
