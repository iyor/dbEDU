export default class db {
  constructor(url) {
    var MongoClient = require('mongodb').MongoClient;
      //, assert = require('assert');
      MongoClient.connect(url, function(err, db) {
    //  assert.equal(null, err);
      console.log("The database is now online");
        findDocuments(db, function() {
      });
    });
  }
}

  var findDocuments = function (db, callback) {
    // Get the documents collection
    const findDocs = db.collection('documents');
    // Find some documents
    findDocs.find({}).toArray(function(err, docs) {
    //  assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
      //db.close();
    });
  }

  var postDocuments =  function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
    //  assert.equal(err, null);
    //  assert.equal(3, result.result.n);
    //  assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }
