/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://madhukar1268:reddy1268@ds033125.mlab.com:33125/icp9';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(db, callback) {
    var dbo = db.db("icp9");
    dbo.collection('demoase').insertOne( {
        "User_id" :"16262843",
        "fname" : "Madhukar",
        "lname" : "Reddy",
        "ph.no" : "8166662266",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "mail":"sjhv6@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});