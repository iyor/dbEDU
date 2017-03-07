import config from 'config'
import express from 'express'
import * as student from 'routes/studentroutes'
import * as admin from 'routes/adminroutes'

var router = express.Router()

router.get('/', (req, res, next) => {
  student.getCourses().then(function(course) {
    res.json({
      Course: course 
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

router.get('/findCollections', (req, res, next) => {
  admin.listCollections().then(function(collections){
    res.json({
      Collections: collections
    })
  })
})

//Temporary method - needs to be removed or hidden to
//avoid unauthorized removal of courses.
router.delete('/removeCourse', (req, res) => {
  admin.removeOne(req.body.course).then(function(courses){
    res.json({
        Course: courses
    })
  })
})

//Temporary method - needs to be removed or hidden to
//avoid unauthorized removal of the entire course collection.
router.delete('/removeDB', (req, res) => {
  admin.dropAll().then(function(result){
    res.json({
      Deleted: result
    })
  })
})
export default router
