const express = require('express');
const router = express.Router();
const {sliderController} = require('../controller/index')

router.get('/',sliderController.getAll);

module.exports = router;