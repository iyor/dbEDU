import mongodb from 'mongodb'
import OjbectID from 'mongodb'

export var dbClient
export var obj_id

export default class db {
  constructor(url) {
    var MongoClient = mongodb.MongoClient
    MongoClient.connect(url, function(err, db) {
      dbClient = db
      obj_id = mongodb.ObjectId
    })
  }
}
