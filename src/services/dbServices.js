import config from 'config'
import mongodb from 'mongodb'

export function documents() {
console.log("Getting documents");
  var MongoClient = mongodb.MongoClient;
  MongoClient.connect(config.DB_URL, (err, db) => {
    const findDocs = db.collection('documents');
	findDocs.find({}).toArray().then(function(docs){
	  console.log("Found the following documents");
	  console.log(docs);
	  db.close();
	})
  })
  return "AN ENTRY";
}
