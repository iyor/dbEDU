import config from 'config'
import express from 'express'
import * as student from 'routes/studentroutes'
import * as admin from 'routes/adminroutes'

var router = express.Router()

router.get('/', (req, res, next) => {
  student.getCourses().then(function(course) {
    res.json({
      API_methods: '/courseNames, /courseDesc(id), /courseMaterial(id), /findCollection(), /addCourse(course, desc, meterial), /removeCourse(course), /removeDB '
    })
  })
})

router.get('/courseNames', (req, res, next) => {
  student.getCourseNames().then(function(docs) {
    res.json(docs)
  })
})


router.post('/courseDesc', (req, res, next) => {
  student.getCourseDescription(req.body.id).then(function(docs) {
    res.json({
      Course_Description : docs
    })
  })
})

router.post('/courseMaterial', (req, res, next) => {
  student.getCourseMaterial(req.body.id).then(function(course) {
    res.json({course})
  })
})

router.get('/findCollections', (req, res, next) => {
  admin.listCollections().then(function(collections){
    res.json({
      Collections: collections
    })
  })
})

router.post('/addCourse', (req, res, next) => {
  admin.addCourse(req.body.course, req.body.desc, req.body.material).then(function(addedCourse) {
    res.json({
      Course: addedCourse
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
//avoid unauthorized removal of the entire course DB.
router.delete('/removeDB', (req, res) => {
  admin.dropAll().then(function(result){
    res.json({
      Deleted: result
    })
  })
})
export default router
