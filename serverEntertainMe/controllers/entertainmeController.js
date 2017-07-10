const axios = require('axios');
const redis = require('redis');
const client = redis.createClient()
const methods = {}

client.on("error", function(err){
  console.log("Error" + err);
})

const movie = () => axios.get('http://localhost:3001/movies')
const tv = () => axios.get('http://localhost:3002/tv')

methods.getEntertainme = function(req,res){

}
