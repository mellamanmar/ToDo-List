const express = require('express')
const controllerResponsable = require('../controllers/responsable')
const router = express.Router()

router.post ('/create', controllerResponsable.create)
router.get ('/', controllerResponsable.get)
router.get ('/:id', controllerResponsable.getById)
router.patch ('/update/:id', controllerResponsable.update)
router.delete ('/delete/:id', controllerResponsable.delete)

module.exports = router
