const express = require('express');
const router = express.Router();
const MenuController = require('../../controllers/v1/Menus');

router.post('/new', MenuController.createNewMenu);
router.get('/', MenuController.getAllMenuItemsByOutletID);
router.get('/:outlet_id', MenuController.getOneMenuItemByID);
router.put('/edit/:menu_item_id', MenuController.editMenuItemByID);
router.delete('/delete/:menu_item_id', MenuController.deleteMenuItemByID);

module.exports = router;
