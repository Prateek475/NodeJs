const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let db;

const mongo_url = "mongodb+srv://prateekdixit252006_db_user:7217797616prateek@prateek0004.qyapyi9.mongodb.net/?appName=prateek0004";

const mongoConnect = (callback) => {
    MongoClient.connect(mongo_url).then(client => {
    db = client.db('airbnb');
    callback();
  }).catch(err => {
    console.log("Error occurred while connecting to Mongo: ",err);
  });
}

const getDb = () => {
  if(!db) {
    throw new Error("Mongo not connected...");
  }
  return db;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;