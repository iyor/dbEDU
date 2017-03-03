import mongodb from 'mongodb'
//import {documents} from './dbServices'

export var dbClient;

export default class db {
  constructor(url) {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(url, function(err, db) {
      dbClient = db;
      console.log("The database is now online");
      console.log(dbClient);
    });
}
}
