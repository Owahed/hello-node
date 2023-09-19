const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "A test showed have name"],
  },
  price:{
    type:Number,
    required:true
  },
  rating:{
    type:Number,
    default:3.5
  }
});

const Test=mongoose.model('Test',TestSchema)
module.exports=Test
