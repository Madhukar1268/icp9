var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://madhukar1268:reddy1268@ds033125.mlab.com:33125/icp9';

/*
MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("aseproject");
  dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/
/*
MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("aseproject");
  dbo.collection("users").find({phoneno:8164057802}).toArray(function(err, result) {
    if (err) throw err;
    console.log("First Name:" +result.fname);
    console.log("Last Name:" +result.lname);
    console.log("city:" +result.city);
    db.close();
  });
});
*/
MongoClient.connect(url, function(err, db) {
    var dbo = db.db("icp9");
    var cursor = dbo.collection('demoase').find({"ph.no": "8166662266"});
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log("First Name:" + doc.fname);
        }
    });

});