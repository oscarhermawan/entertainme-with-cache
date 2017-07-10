const express = require('express')
const router = express.Router()
const api = require('../controllers/movieController')

router.post('/', api.insertMovie)
router.get('/', api.getAll)

module.exports = router
