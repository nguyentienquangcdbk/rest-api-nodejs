const express = require('express')
const {CategoryController} = require('../controller/index')
const hand = require('../handle/tokenHandle')
const router = express.Router();

router.get('/',CategoryController.getAll);
router.get('/:id',CategoryController.getId);
router.post('/',hand.verifyAdminToken,CategoryController.add);
router.put('/:id',hand.verifyAdminToken,CategoryController.Update);
router.delete('/:id',hand.verifyAdminToken,CategoryController.delete)
module.exports = router
