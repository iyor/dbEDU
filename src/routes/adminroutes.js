import config from 'config'
import { dbClient } from 'services/db'

export function removeOne (courseName) {
  let courses = dbClient.collection(config.DB_COLL)
  return courses.findOneAndDelete(
  {
    Course_Name : courseName
  }).then(function(retList) {
    return retList
  }).catch((error) => {
    return 'This action is not allowed'
  })
}

export function testFind () {
  let test = dbClient.collection(config.DB_COLL)
  return test.find({a:1}).toArray().then(function(returnObj) {
    return returnObj
  })
}

export function dropAll() {
  let remCol = dbClient.collection(config.DB_COLL)
  return remCol.drop().catch((error) => {
    return 'This action is not allowed'
  })
}

export function listCollections() {
  let allCols = dbClient.listCollections()
  return allCols.toArray()
}

export function addCourse(courseName, courseDesc, courseMaterial) {
  let courseList = dbClient.collection(config.DB_COLL)
    return courseList.insert({
      Course_Name : courseName,
      Course_Descr : courseDesc,
      Course_Material : courseMaterial
    }).catch((error) => {
      return 'This action is not allowed'
    })
}

    
