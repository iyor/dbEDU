import express from 'express'
import * as student from 'models/studentroutes'

var course_router = express.Router()

//Returns all the course id's and names. The id's is the key used
// 21 //to further access content of a course.
course_router.get('/names', (req, res, next) => {
  student.getCourseNames().then(function(courses) {
    res.json(courses)
  })
})

//Returns the description, name and id of a course given the
//unique id. The id will probably not need to be included in
//this return-statement, but is included for simplicity.
course_router.get('/desc/:courseId', (req, res, next) => {
  let courseId = req.params.courseId
  student.getCourseDescription(courseId).then(function(description) {
    res.json(description)
  })
})

//Returns the material/content, name and id of a course given the
//unique id. The id will probably not need to be included in
//this return-statement, but is included for simlicity.
course_router.get('/material/:courseId', (req, res, next) => {
  let courseId = req.params.courseId
  student.getCourseMaterial(courseId).then(function(material) {
    res.json(description)
  })
})

// Retrieves evaluator id with the specified id
course_router.get('/getEvaluator/:evalId', (req, res, next) => {
  let evalId = req.params.evalId
  student.getEvaluator(evalId).then(function(docs) {
    res.json(docs)
  })
})

export default course_router
