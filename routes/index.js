const express = require('express');
const router = express.Router();
const { index, form } = require('../controller/indexController');
const formValidator = require('../validations/formValidator');

router.get('/', index);
router.post('/',/*  formValidator, */ form);


module.exports = router;