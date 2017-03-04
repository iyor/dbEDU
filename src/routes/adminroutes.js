import config from 'config'
import { dbClient } from 'services/db'

export function removeOne () {
    let courses = dbClient.collection(config.DB_COLL)
    return courses.findOneAndDelete(
        {
        a: 1
        }
    ).then(function(retList) {
        return retList
    })
}

export function testFind () {
    let test = dbClient.collection(config.DB_COLL)
    return test.find({a:1}).toArray().then(function(returnObj) {
        console.log(returnObj)
        return returnObj
    })
    }
