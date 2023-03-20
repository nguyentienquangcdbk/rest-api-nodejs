const router = require('express').Router();

router.use('/user', require('./UserRouter'));
router.use('/product', require('./ProductRouter'));
router.use('/slider', require('./SliderRouter'));
router.use('/order',require('./OrderRouter'));
router.use('/category',require('./Cateogory'));
router.use('/cart',require('./CartRouter'))
module.exports = router;
