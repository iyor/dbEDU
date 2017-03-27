import config from 'config'
import express from 'express'
import * as student from 'routes/studentroutes'
import * as admin from 'routes/adminroutes'

var router = express.Router()

router.get('/', (req, res, next) => {
  student.getCourses().then(function(course) {
    res.json({
      API_methods: '/courseNames, /courseDesc/*id*, /courseMaterial*id*, /findCollection(), /addCourse(course, desc, meterial), /removeCourse(course), /removeDB '
    })
  })
})

router.get('/courseNames', (req, res, next) => {
  student.getCourseNames().then(function(docs) {
    res.json(docs)
  })
})


router.get('/courseDesc/:courseId', (req, res, next) => {
  let courseId = req.params.courseId
  student.getCourseDescription(courseId).then(function(docs) {
    res.json(docs)
  })
})

router.get('/courseMaterial/:courseId', (req, res, next) => {
  let courseId = req.params.courseId
  student.getCourseMaterial(courseId).then(function(docs) {
    res.json(docs)
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
