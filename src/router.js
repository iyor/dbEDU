import config from 'config'
import express from 'express'
import * as student from 'routes/studentroutes'
import * as admin from 'routes/adminroutes'

var router = express.Router()

//What is being display on the frontpage of the backend.
//Handy to keep track of the different operations while developing.
router.get('/', (req, res, next) => {
  student.getCourses().then(function(course) {
    res.json({
      API_methods: '/courseNames, /courseDesc/*id*, /courseMaterial*id*, /findCollection(), /addCourse(course, desc, material), /removeCourse(course), /removeDB '
    })
  })
})

//Returns all the course id's and names. The id's is the key used
//to further access content of a course.
router.get('/courseNames', (req, res, next) => {
  student.getCourseNames().then(function(docs) {
    res.json(docs)
  })
})

//Returns the description, name and id of a course given the
//unique id. The id will probably not need to be included in
//this return-statement, but is included for simplicity.
router.get('/courseDesc/:courseId', (req, res, next) => {
  let courseId = req.params.courseId
  student.getCourseDescription(courseId).then(function(docs) {
    res.json(docs)
  })
})

//Rerturns the material/content, name and id of a course given the
//unique id. The id will probably not need to be included in
//this return-statement, but is included for simlicity.
router.get('/courseMaterial/:courseId', (req, res, next) => {
  let courseId = req.params.courseId
  student.getCourseMaterial(courseId).then(function(docs) {
    res.json(docs)
  })
})

// Merely added for testing purposes - will eventually be removed.
router.get('/findCollections', (req, res, next) => {
  admin.listCollections().then(function(collections){
    res.json({
      Collections: collections
    })
  })
})

// Retrieves evaluator id with the specified id
router.get('/getEvaluator/:evalId', (req, res, next) => {
  let evalId = req.params.evalId
  student.getEvaluator(evalId).then(function(docs) {
    res.json(docs) 
  })
})

//The methods below will all alter the database, and must be used with
//caution.
//Adds a new course with a speicifc name, description and material/content. A unique id is given to it when uploaded to the database.
router.post('/addCourse', (req, res, next) => {
  admin.addCourse(req.body.course, req.body.description, req.body.material).then(function(added_course) {
    res.json({
      Course: added_course
    })
  })
})

//Removes a course with the specific id that is given.
router.delete('/removeCourse', (req, res) => {
  admin.removeOne(req.body.id).then(function(removed_course){
    res.json({
        Course: removed_course
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
