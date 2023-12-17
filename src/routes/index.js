const express = require('express'); 
const router = express.Router();
const userRouter = require('./v1/users');
const menuRouter = require('./v1/menus');

router.use('/users', userRouter);
router.use('/menus', menuRouter);

module.exports = router;
