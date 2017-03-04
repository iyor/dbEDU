import config from 'config'
import express from 'express'
import * as student from 'routes/studentroutes'
import * as admin from 'routes/adminroutes'
import { dbClient } from 'services/db'

var router = express.Router()

router.get('/', (req, res, next) => {
  student.getCourses().then(function(docs) {
    res.json({
      docs: docs
    })
  })
})

router.get('/courseNames', (req, res, next) => {
  student.getCourseNames().then(function(docs) {
    res.json({
      courseName : docs
    })
  })
})


router.get('/courseDesc', (req, res, next) => {
  student.getCourseDescription().then(function(docs) {
    res.json({
      courseDesc : docs
    })
  })
})

router.get('/removeCourse', (req, res, next) => {
    admin.removeOne().then(function(courses){
    res.json({
        Course: courses
    })
  })
})

router.get('/test', (req, res, next) => {
    admin.testFind().then(function(courses){
    res.json({
        Course: courses
    })
  })
})

export default router
