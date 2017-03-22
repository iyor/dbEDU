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
    for (var course of courseList) {
      cleaned.push(course.Course_Name + ' : ' + course.Course_Descr)
    }
    console.log(cleaned)
    return cleaned
  })
} 
