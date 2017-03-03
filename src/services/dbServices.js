import config from 'config'
import mongodb from 'mongodb'
import db from './db'
import {dbClient} from './db'

export function documents() {
console.log("Getting documents");
console.log(dbClient);
    var db = dbClient;
    console.log("after connect");
    console.log(db);
    const findDocs = db.collection('documents');
  	findDocs.find({}).toArray().then(function(docs){
  	  console.log("Found the following documents");
  	  console.log(docs);
  	  db.close();
  	})
  return "AN ENTRY";
}

export function test() {
  console.log("In Test");

}
