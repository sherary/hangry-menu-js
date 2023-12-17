const { Carts, sequelize } = require('../../databases/mysql/models/index');

const Carts = class {
    createNewCart = async (req, res, next) => {
        try {
            const t = sequelize.transaction();
            const newCart = await Carts.create(req.body, {
                transaction: t
            });

            console.log(newCart);
        } catch (err) {
            console.log(err)
        }
    }

    checkCartAvailability = async (req, res, next) => {
        try {
            
        } catch (err) {
            
        }
    }

    getAllCarts = async (req, res, next) => {
        try {
            
        } catch (err) {
            
        }
    }

    getOneCartByID = async (req, res, next) => {
        try {
            
        } catch (err) {
            
        }
    }

    updateCartByID = async (req, res, next) => {
        try {
            
        } catch (err) {
            
        }
    }

    deleteCartByID = async (req, res, next) => {
        try {
            
        } catch (err) {
            
        }
    }
}

module.exports = new Carts;