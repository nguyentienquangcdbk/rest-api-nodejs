const express = require('express');
const router = express.Router();
const {userController} = require('../controller/index')
const hand = require('../handle/tokenHandle');
router.get('/',userController.getAll);
router.get('/me',hand.verifyToken,userController.getId);
router.post('/signUp',userController.add);
router.post('/login',userController.login);

module.exports = router;