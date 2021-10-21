const express = require("express")
const touController = require('../controllers/turista')
const router = express.Router()

router.post('/agregarCiudad',touController.postAgregarCiudad)
router.post('/agregarInteres',touController.postAgregarInteres)

module.exports = router