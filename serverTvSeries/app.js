const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect('mongodb://localhost/leraning-cache', (err)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Connection Success');
  }
})

const tv = require('./routes/tv')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/tv', tv )

app.listen(3002)
module.exports = app
