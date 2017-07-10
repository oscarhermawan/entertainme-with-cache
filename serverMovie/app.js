const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const responseTime = require('response-time')

mongoose.connect('mongodb://localhost/leraning-cache', (err)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Connection Success');
  }
})


const movies = require('./routes/movie')
app.use(responseTime())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/movies', movies )

app.listen(3001)
module.exports = app
