const express = require('express')
const router = express.Router()
const api = require('../controllers/tvController')

router.post('/', api.insertTv)
router.get('/', api.getAll)

module.exports = router
