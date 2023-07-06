const express = require('express')
const controllerResponsable = require('../controllers/responsable')
const router = express.Router()

router.post ('/create', controllerResponsable.create)

module.exports = router
