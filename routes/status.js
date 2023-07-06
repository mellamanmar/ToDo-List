const express = require('express')
const controllerStatus = require('../controllers/status')
const router = express.Router()

router.post ('/create', controllerStatus.create)

module.exports = router
