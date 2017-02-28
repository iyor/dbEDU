import mongodb from 'mongodb'

export default class db {
  constructor(url) {
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(url, function(err, db) {
      console.log("The database is now online");
    });
  }
}

