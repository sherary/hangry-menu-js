const { Menus, sequelize } = require('../../databases/mysql/models/index');
const { createNewRow } = require('../../services/sequelize');

const MenuItems = class {
    createNewMenu = async (req, res, next) => {
        try {
            const newMenu = await createNewRow(Menus, {
                ...req.body
            })
            console.log(newMenu);
        } catch (err) {
            console.log(err)
        }
    }

    getAllMenuItemsByOutletID = async (req, res, next) => {
        try {
            
        } catch (err) {
            
        }
    }

    getOneMenuItemByID = async (req, res, next) => {
        try {
            
        } catch (err) {
            
        }
    }


    editMenuItemByID = async (req, res, next) => {
        try {

        } catch (err) {

        }
    }

    deleteMenuItemByID = async (req, res, next) => {
        try {

        } catch (err) {

        }
    }
};

module.exports = new MenuItems;