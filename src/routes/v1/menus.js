const express = require('express');
const router = express.Router();
const MenuController = require('../../controllers/v1/Menus');

router.post('/new', MenuController.createNewMenu);

module.exports = router;
