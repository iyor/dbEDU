import express from 'express'
import * as admin from 'models/adminroutes'

var db_router = express.Router()

// Merely added for testing purposes - will eventually be removed.
db_router.get('/collections', (req, res, next) => {
  admin.listCollections().then(function(collections){
    res.json({
      Collections: collections
    })
  })
})

//The methods below will all alter the database, and must be used with
//caution.
//Adds a new course with a speicifc name, description and material/content.
// A unique id is given to it when uploaded to the database.
db_router.post('/addCourse', (req, res, next) => {
  admin.addCourse(req.body.course, req.body.description, req.body.material)
.then(function(added_course) {
    res.json({
      Course: added_course
    })
  })
})

//Removes a course with the specific id that is given.
db_router.delete('/removeCourse', (req, res) => {
  admin.removeOne(req.body.id).then(function(removed_course){
    res.json({
      Course: removed_course
    })
  })
})

//Temporary method - needs to be removed or hidden to
//avoid unauthorized removal of the entire course DB.
db_router.delete('/removeDB', (req, res) => {
  admin.dropAll().then(function(result){
    res.json({
      Deleted: result
   })
  })
})

export default db_router
