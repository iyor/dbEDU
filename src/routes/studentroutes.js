import { dbClient } from 'services/db'
import config from 'config'


export function getCourses() {
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.find({}).toArray()
}

export function getCourseNames() {
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.find({}).toArray().then(function(courseList) {
    let cleaned = []
    courseList.forEach((course) => {
      let courseObj = { 
        id: course._id,
        name: course.name 
      }
      cleaned.push(courseObj)
    })
    return cleaned 
  })
}

export function getCourseDescription(id) {
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.find({}).toArray().then(function(courseList) {
    let courseObj = {}
    courseList.forEach((course) => {
      if(course._id == id) {
        courseObj = {
          id: course._id,
          name: course.name,
          description: course.description
        }
      }
    })
    return courseObj
  })
} 

export function getCourseMaterial(id) {
  let findCourses = dbClient.collection(config.DB_COLL)
  return findCourses.find({}).toArray().then(function(courseList) {
    let courseObj = {}
    courseList.forEach((course) => {
      if(course._id == id){
        courseObj = {
          id: course._id,
          name: course.name,
          material: course.material
        }
      }
    })
    return courseObj
  }) 
}
