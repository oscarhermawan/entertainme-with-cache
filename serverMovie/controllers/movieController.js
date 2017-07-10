var db = require('../models/movie')
const methods = {}

//INSERT QUESTIONS
methods.insertMovie = function(req, res){
  var movieInput = new db({
    poster_path:req.body.path,
    overview:req.body.overview,
    title:req.body.title,
    popularity:req.body.popularity,
    tag:req.body.tag,

  })
  movieInput.save(function(err,records){
    if(err){
      res.send(err)
    } else {
      res.send(records)
    }
  })
}//INSERT QUESTIONS


//GET ALL
methods.getAll =function(req,res){
  db.find({})
  .exec((error, records)=>{
    if(error){
      res.send(error)
    } else {
      res.send(records)
    }
  })
}//GET ALL

module.exports = methods
