const { sequelize } = require("../databases/mysql/models")

const createNewRow = async (model, data, options) => {
    let result = {};
    const t = await sequelize.transaction();

    try {
        const newRow = await model.create({
            ...data,
            added_at: new Date(),
            updated_at: new Date(),
        }, {
            ...options,
            transaction: t
        });
        
        if (newRow) {
            await t.commit();
            result[err] = null;
            result[data] = newRow;
        }
    } catch (err) {
        await t.rollback();

        result[err] = err.message;
    }

    return result;
}

module.exports = {
    createNewRow,
}