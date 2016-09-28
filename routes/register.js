var express = require('express');
var router = express.Router();
var User = require('./models/orphanage');

router.post('/',function(req,res,next){
  //res.send("we have reached till router");
  var userobj = req.body;

  User.find({$or : [{"username":userobj.username},{"email":userobj.email}]},function(err,data){
    if(err){
      console.log("some error happened",err);
      res.send("some error happned");
    }
    else{
      if(data.length != 0){
        console.log("user is already registered");
        res.send("user is already registred");
      }else{
        console.log("user is not registered");
        var newUser = new User(userobj);
        newUser.save(function(err){
          if(err){
            console.log("data not saved");
            res.send("data is saved");
          }
          else{
            console.log("new user created");
            res.send("new user created");
          }
        })
      }
    }
  });
});

module.exports = router;
