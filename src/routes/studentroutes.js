import { dbClient } from 'services/db'

export function getCourses() {
  let findDocs = dbClient.collection('documents');
  return findDocs.find({}).toArray();
}

export function getCourseNames() {
  let findDocs = dbClient.collection('documents');
  return findDocs.find({}).toArray().then(function(courseList) {
      console.log(courseList)
      let cleaned = []
      console.log("Printed after clean")
      for (var courses of courseList) {
        cleaned.push({Coursename:courses.a});
      }
      console.log(cleaned)
      return cleaned
  })
}

export function getCourseDescription() {
  let findDocs = dbClient.collection('documents');
  return findDocs.find({}).toArray().then(function(courseList) {
    let cleaned = []
    for (var courses of courseList) {
      cleaned.push({CourseDescr:courses.a});
    }
    console.log(cleaned)
    return cleaned
  })
} 
