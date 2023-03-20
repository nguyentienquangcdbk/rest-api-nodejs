const express = require('express');
const router = express.Router();
const {OrderController} = require('../controller/index')
const handle = require('../handle/tokenHandle');
router.get('/',handle.verifyAdminToken,OrderController.getAll);
router.get("/:id",handle.verifyToken,OrderController.getId);
router.post('/',handle.verifyToken,OrderController.add);
// router.put('/:id',handle.verifyToken,OrderController.Update);
router.delete('/:id',handle.verifyAdminToken,OrderController.delete);

module.exports = router;