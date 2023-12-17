const { Users, sequelize } = require('../../databases/mysql/models');

const Users = class {
    register = async (req, res, next) => {
        const t = sequelize.transaction();

        try {
            const newUser = await Users.create({
                ...req.body,
                added_at: new Date(),
                updated_at: new Date(),
            }, { transaction: t });

            console.log(newUser);
        } catch (err) {
            console.log(err)
        }
    };

    login = async (req, res, next) => {

    };

    logout = async (req, res, next) => {

    };

    updateUser = async (req, res, next) => {

    };

    deleteUser = async (req, res, next) => {

    };
}

module.exports = new Users