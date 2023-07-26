const mongoose = require('mongoose')
// define Schema
const Schema = mongoose.Schema
//Task Schema
const taskSchema = new Schema({
  // createdBy:{ type:String, required:true},
  // createdByName:{type:String, required:true},
  details:{type:String, required:true},
  status:{
    type:String,
    enum:['created','inProgress','completed'],
    default:'created',
    required:true
  },
  // completedByName:{type:String, required:false},
  // completedById:{type:String, required:false},
  subTasks:[{type:String, required:false}],
  // archive:{type:Boolean, default:false, required:false},
  mainTaskId:{type:String, required:false},
  isMainTaskOrSubTask: {
    type: String,
    enum: ['mainTask','subTask', 'Both'],
    required:true
  },
  // institutionId:{type:String, required:true}
  },{timestamps:true});

  // compile schema to model
  module.exports = mongoose.model('Task', taskSchema);

