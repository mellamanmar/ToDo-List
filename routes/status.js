const express = require('express')
const controllerStatus = require('../controllers/status')
const router = express.Router()

// router.post ('/create', controllerStatus.create)
router.get ('/', controllerStatus.get)
router.get ('/:id', controllerStatus.getById)
router.patch ('/update/:id', controllerStatus.update)
// router.delete ('/delete/:id', controllerStatus.delete)

module.exports = router
