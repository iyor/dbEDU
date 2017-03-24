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
      let obj = { 
        id: course._id,
        name: course.name 
      }
      cleaned.push(obj)
    })
    return cleaned
  })
}

export function getCourseDescription() {
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.find({}).toArray().then(function(courseList) {
    let cleaned = []
    courseList.forEach((course) => {
      let obj = {
        id: course._id,
        name: course.name,
        description: course.description
      }
      cleaned.push(obj)
    })
    return cleaned
  })
} 
