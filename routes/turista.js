const express = require("express")
const touController = require('../controllers/turista')
const router = express.Router()

router.post('/agregarCiudad',touController.postAgregarCiudad)
router.post('/agregarInteres',touController.postAgregarInteres)
router.post('/buscarCiudadesPais',touController.postBuscarCiudadPorPais)
router.post('/buscarInteresesCiudad',touController.postBuscarInteresPorCiudad)
router.post('/actualizarContadorCiudad',touController.postActualizarContadorCiudad)

module.exports = router