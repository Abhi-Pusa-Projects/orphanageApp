var express = require('express');
var router = express.Router();
var User = require('./models/orphanage');

router.post('/',function(req,res,next){
  console.log("req.body",req.body);
  User.find({username:req.body.username},function(err,data){
    if(err){
      console.log("some error happened",err);
      res.send("some error happened");
    }
    else
    {
      if(data.length == 0)
      {
        console.log("no user found");
        res.send("no user found");
      }
      else
      {
        if(data[0].password == req.body.password)
        {
              console.log("user is authenticated");
              res.send("user is authenticated");
        }
        else
        {
          console.log("wrong password");
          res.send("wrong password");
        }
      }
    }
  })
});


module.exports = router;
