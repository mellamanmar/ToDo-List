const express = require('express')
const controllerToDO = require('../controllers/to_do')
const router = express.Router()

router.post ('/create', controllerToDO.create)

module.exports = router
