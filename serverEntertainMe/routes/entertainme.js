const express = require('express')
const router = express.Router()
const api = require('../controllers/entertainmeController')

router.get('/', api.getEntertainme)

module.exports = router
