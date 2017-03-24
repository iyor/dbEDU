import config from 'config'
import { dbClient } from 'services/db'

export function listCollections() {
  let allCols = dbClient.listCollections()
  return allCols.toArray()
}


export function dropAll() {
  let remCol = dbClient.collection(config.DB_COLL)
  return remCol.drop().catch((error) => {
    return 'This action is not allowed'
  })
}

export function removeOne (id) {
  let courses = dbClient.collection(config.DB_COLL)
  return courses.findOneAndDelete(
  {
    _id : id
  }).then(function(retList) {
    return retList
  }).catch((error) => {
    return 'This action is not allowed'
  })
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
