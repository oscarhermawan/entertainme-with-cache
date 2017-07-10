const mongoose = require('mongoose')
const Schema = mongoose.Schema

var tvSchema = new Schema({
  poster_path:{
    type:String
  },
  overview:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  popularity:{
    type:Number
  },
  tag:{
    type:[String]
  },
  status:{
    type:String
  }
})

var Tv = mongoose.model('Tv', tvSchema)

module.exports = Tv
