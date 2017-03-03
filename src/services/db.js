import mongodb from 'mongodb'

export var dbClient;

export default class db {
  constructor(url) {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(url, function(err, db) {
      dbClient = db;
    });
  }
}
