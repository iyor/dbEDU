import { dbClient } from 'services/db'
import config from 'config'


export function getCourses() {
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.find({}).toArray()
}

export function getCourseNames() {
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.find({}).toArray().then(function(courseList) {
    console.log(courseList)
    let cleaned = []
    console.log("Printed after clean")
    for (var courses of courseList) {
      cleaned.push({Course_name:courses.Course_Name})
    }
    console.log(cleaned)
    return cleaned
  })
}

export function getCourseDescription() {
  let findDocs = dbClient.collection(config.DB_COLL)
  return findDocs.find({}).toArray().then(function(courseList) {
    let cleaned = []
    for (var courses of courseList) {
      cleaned.push({CourseDescr:courses.Course_Descr})
    }
    console.log(cleaned)
    return cleaned
  })
} 
