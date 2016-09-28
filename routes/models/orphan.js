var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Orphan = new Schema({
  orphanName:String,
  orphanDesc:String,
  orphanAge:Number,
  orphanHeight:Number,
  orphanWeight:Number,
  orphanSchool:String,
  orphanRank:Number,
  orphanLocation:String
});

var Orphan_model = mongoose.model("orphans",Orphan);

module.exports = Orphan_model;
