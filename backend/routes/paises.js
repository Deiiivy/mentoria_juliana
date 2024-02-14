const express = require('express')
const router = express.Router()
const { obtenerPaises, crearPais } = require('../controllers/countries')


router.get('/obtenerpaises', obtenerPaises)
router.post('/crearPais', crearPais)

module.exports = router