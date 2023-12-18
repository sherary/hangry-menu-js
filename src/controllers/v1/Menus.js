const { Menus, sequelize } = require('../../databases/mysql/models/index');
const { createNewRow, fetchAllData, fetchDataByID, editRowByRowID, deleteRowByRowID } = require('../../services/sequelize');

const MenuItems = class {
    createNewMenu = async (req, res, next) => {
        try {
            const newMenu = await createNewRow(Menus, {
                ...req.body
            })
            
            if (newMenu['err'] == null) {
                return res.status(201).json({
                    success: true,
                    message: "Success creating new menu",
                    data: newMenu['data'],
                })
            };
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to create new menu",
                data: err.message,
            })
        }
    }

    getAllMenuItemsByOutletID = async (req, res, next) => {
        try {
            const options = {
                where: {
                    outlet_id: +req.query.outlet_id
                }
            }
            const data = await fetchAllData(Menus, options);

            if (data['err'] == null) {
                return res.status(200).json({
                    success: true,
                    message: "Success get all menu items",
                    data: data['data'],
                })
            }
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to create new menu",
                data: err.message,
            })
        }
    }

    getOneMenuItemByID = async (req, res, next) => {
        try {
            const options = {
                where: {
                    id: +req.query.menu_item_id,
                    outlet_id: +req.params.outlet_id,
                }
            }
            
            const data = await fetchAllData(Menus, options);

            if (data['err'] == null) {
                return res.status(200).json({
                    success: true,
                    message: "Success get menu item",
                    data: data['data'],
                })
            }
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to get menu item",
                data: err.message,
            })
        }
    }


    editMenuItemByID = async (req, res, next) => {
        try {
            const { menu_item_id } = req.params;
            const data = await fetchDataByID(Menus, +menu_item_id);
            
            if (data['data'].length == 0) {
                return res.status(404).json({
                    success: false,
                    message: "Menu item not found"
                })
            }
            
            const editedRow = await editRowByRowID(Menus, +menu_item_id, ...req.body);
            if (editedRow['err'] == null) {
                return res.status(200).json({
                    success: true,
                    message: "Success get menu item",
                    data: editedRow['data'],
                })
            }
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to update menu item",
                data: err.message,
            })
        }
    }

    deleteMenuItemByID = async (req, res, next) => {
        try {
            const data = await deleteRowByRowID(Menus, +req.params.menu_item_id);

            if (data['data'] == 0) {
                return res.status(data['code']).json({
                    success: true,
                    message: "Item already deleted",
                    data: data['data'],
                })
            }

            if (data['err'] == null && data['data'] == 1) {
                return res.status(data['code']).json({
                    success: true,
                    message: "Success deleting menu item",
                    data: data['data'],
                })
            }
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to delete menu item",
                data: err['message'],
            })
        }
    }
};

module.exports = new MenuItems;