/**
 * Created by Rohith Kumar
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://madhukar1268:reddy1268@ds033125.mlab.com:33125/icp9';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

/*
url :   mongodb://root:secure@ds161483.mlab.com:61483/asefall17
 */