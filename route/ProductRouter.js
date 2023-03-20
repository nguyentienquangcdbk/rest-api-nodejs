const express = require('express');
const router = express.Router();
const {productController} = require('../controller/index')
const handle = require('../handle/tokenHandle');
router.get('/',productController.getAll);
router.get("/:id",productController.getId);
router.post('/',handle.verifyAdminToken,productController.add);
router.put('/:id',handle.verifyAdminToken,productController.Update);
router.delete('/:id',handle.verifyAdminToken,productController.delete);

module.exports = router;