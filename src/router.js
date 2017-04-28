import config from 'config'
import express from 'express'
import * as student from 'models/studentroutes'
import * as admin from 'models/adminroutes'
import course_router from 'routes/courseRoutes'
import db_router from 'routes/dbRoutes'

var router = express.Router()

router.use('/course/', course_router)
router.use('/db/', db_router)

//What is being display on the frontpage of the backend.
//Handy to keep track of the different operations while developing.
router.get('/', (req, res, next) => {
  student.getCourses().then(function(course) {
    res.json({
      API_methods: '/course/names, /course/desc/*id*, /course/material*id*, /db/collections, /db/addCourse(course, desc, material), /db/removeCourse(course), /db/removeDB'
    })
  })
})

export default router
