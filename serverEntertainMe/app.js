const express = require('express');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/entertainme', entertainme )

app.listen(3000)
module.exports = app
