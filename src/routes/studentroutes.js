import { dbClient, obj_id } from 'services/db'
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
  let db_id = new obj_id(id) 
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.findOne({_id: db_id}).then(function(course) {
    let courseObj = {
      id: course._id,
      name: course.name,
      description: course.description
    }
    return courseObj
  })
}

export function getCourseMaterial(id) {
  let db_id = new obj_id(id) 
  let findCourses = dbClient.collection(config.DB_COLL)
  return findCourses.findOne({_id : db_id}).then(function(course) {
    let courseObj = { 
      id: course._id,
      name: course.name,
      material: course.material
    }
  return courseObj
  })
}
