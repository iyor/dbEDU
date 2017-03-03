import mongodb from 'mongodb'
//import {documents} from './dbServices'

export var dbClient;

export default class db {
  constructor(url) {
    dbClient = mongodb.MongoClient;
    dbClient.connect(url, function(err, db) {
      console.log("The database is now online");
    });
}
}
