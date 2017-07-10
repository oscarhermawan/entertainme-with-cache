const mongoose = require('mongoose')
const Schema = mongoose.Schema

var movieSchema = new Schema({
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
  }
})

var Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
