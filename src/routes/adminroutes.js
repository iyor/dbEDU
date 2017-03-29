import config from 'config'
import { dbClient, obj_id } from 'services/db'

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

//export function removeOne (id) {
//  let courses = dbClient.collection(config.DB_COLL)
//  return courses.findOneAndDelete(
//  {
//    _id : id
//  }).then(function(retList) {
//    return retList
//  }).catch((error) => {
//    return 'This action is not allowed'
//  })
//}
export function removeOne (id) {
  let courses = dbClient.collection(config.DB_COLL)
  let db_id = new obj_id(id)
  return courses.remove({_id : db_id}).then(function(removed_status) {
    return removed_status
  })
}
export function addCourse(courseName, courseDesc, courseMaterial) {
  let courseList = dbClient.collection(config.DB_COLL)
  return courseList.insert({
    name : courseName,
    description: courseDesc,
    material : courseMaterial
  }).catch((error) => {
    return 'This action is not allowed'
  })
}
