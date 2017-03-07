import config from 'config'
import express from 'express'
import * as student from 'routes/studentroutes'
import * as admin from 'routes/adminroutes'
import { dbClient } from 'services/db'

var router = express.Router()

router.get('/', (req, res, next) => {
  student.getCourses().then(function(docs) {
    res.json({
      Collections: docs
    })
  })
})

router.get('/courseNames', (req, res, next) => {
  student.getCourseNames().then(function(docs) {
    res.json({
      Course_Name : docs
    })
  })
})


router.get('/courseDesc', (req, res, next) => {
  student.getCourseDescription().then(function(docs) {
    res.json({
      Course_Description : docs
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

router.get('/findCollections', (req, res, next) => {
    admin.listCollections().then(function(collections){
    res.json({
      Collections: collections
    })
  })
})

router.delete('/removeDB', (req, res) => {
  admin.dropAll().then(function(result){
    res.json({
      Deleted: result
    })
  })
})

//router.post('/createCol' (req, res) => {
//  admin.newCollection().then(function(result) {
//    res.json({
//      Created: result
//    })
//  })
//})
//

export default router
