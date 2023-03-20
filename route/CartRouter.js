const express = require('express')
const {ItemController} = require('../controller/index')
const hand = require('../handle/tokenHandle')
const router = express.Router();

// router.get('/',ItemController.getAll);
// router.get('/:id',ItemController.getId);
router.post('/',hand.verifyToken,ItemController.add);
router.post('/increment/:id',hand.verifyToken,ItemController.increment);
router.post('/decrement/:id',hand.verifyToken,ItemController.decrement);
router.delete('/:id',hand.verifyToken,ItemController.delete)
module.exports = router
