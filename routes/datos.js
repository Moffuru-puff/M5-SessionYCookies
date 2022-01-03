const express = require('express');
const router = express.Router();
const { datos } = require('../controller/datosController');



router.get('/data', datos)

module.exports = router;