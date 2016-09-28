var express = require('express');
var router = express.Router();
var Orphanage = require('./models/orphanage');
var Orphan = require('./models/orphan');
var Promise = require('promise');

router.post('/',function(req,res,next){
    //res.send("we are getting the data from search api");
    var obj = {"req":req,"res":res};
    var findorphanage = fnfindorphanage(obj);
    findorphanage.then(callorphanfind.bind(obj)).catch(errback.bind(obj));
});


//function that is called rejection happened in the find function
function errback(err){
  console.log("some error happned",err);
  this.res.send("some error happened");
}

//function returing the promises for searching of orpahanages
function fnfindorphanage(){
  var findorphanage = new Promise(function(resolve,reject){
    Orphanage.find({},function(err,data){
      if(err){
        console.log("some error happned");
        reject(0);
      }else{
          console.log("no data found");
          resolve(data)
        }
    });
  });

  return findorphanage;
}

//function will call orphan find promise
function callorphanfind(data){
  console.log("this funciton will call the promise of orphan find");
  this.orphanage = data;
  var findOrphan = fnfindorphan(this);
  findOrphan.then(alldata.bind(this)).catch(errback.bind(this));
}

function fnfindorphan(){
  var findorphan = new Promise(function(resolve,reject){
    Orphan.find({},function(err,data){
      if(err){
        console.log("Error in get Orphan",err);
        reject(0);
      }else{
        console.log("data found");
        resolve(data);
      }
    })
  });
  return findorphan;
}

function alldata(data){
  this.orphans = data;
  console.log("all orphanage and orphan data received",this.orphanage,this.orphans);
  var obj = {"orphanage":this.orphanage,"orphans":this.orphans};
  this.res.send(obj);
}

module.exports = router;
