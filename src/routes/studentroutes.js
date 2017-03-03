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
      for (var names of courseList) {
        cleaned.push({Coursename:names.a});
      }
      console.log(cleaned)
      return cleaned
  })

}
