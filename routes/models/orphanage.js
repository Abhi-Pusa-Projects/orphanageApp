var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Orphanage = new Schema({
  username:String,
  password:String,
  email:String,
  phone:String,
  address:String
});

var Orphanage_model = mongoose.model("orphanage", Orphanage);

module.exports = Orphanage_model;
