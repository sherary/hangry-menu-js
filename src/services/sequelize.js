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
            result['err'] = null;
            result['data'] = newRow.toJSON();
        }
    } catch (err) {
        await t.rollback();

        result['err'] = err.message;
    }

    return result;
}

const fetchAllData = async (model, options) => {
    let result = {};

    try {
        const data = await model.findAll({ ...options });
        
        if (data) {
            result['err'] = null;
            result['data'] = data.map(items => items.toJSON());
        }
    } catch (err) {
        result['err'] = err.message;
    }

    return result;
}

const fetchDataByID = async (model, id, options) => {
    let result = {};

    try {
        const data = await model.findAll({
            where: {
                id: id,
            }
        }, { ...options });
        
        if (data) {
            result['err'] = null;
            result['data'] = data.map(items => items.toJSON());
        }
    } catch (err) {
        result['err'] = err.message;
    }

    return result;
}

const editRowByRowID = async (model, ids, data, options) => {
    let result = {};
    const t = await sequelize.transaction();
    console.log("ID", ...ids)
    // try {
    //     const updatedRow = await model.update(...data, ...ids, {
    //         ...options,
    //         transaction: t
    //     });
        
    //     if (updatedRow) {
    //         await t.commit();
    //         result['err'] = null;
    //         result['data'] = updatedRow.toJSON();
    //     }
    // } catch (err) {
    //     await t.rollback();

    //     result['err'] = err.message;
    // }

    // return result;
}

const deleteRowByRowID = async (model, ids, options) => {
    let result = {};
    const t = await sequelize.transaction();

    try {
        const data = await model.destroy({
            where: {
                id: ids,
            }
        }, { 
            ...options,
            transaction: t
        });
        
        if (data == 1) {
            await t.commit();

            result['err'] = null;
            result['code'] = 201;
            result['data'] = data;
        }

        if (data == 0) {
            result['err'] = true;
            result['code'] = 404;
            result['data'] = data;
        }
    } catch (err) {
        await t.rollback();
        result['err'] = err.message;
        result['code'] = 500;
    }

    return result;
}

module.exports = {
    createNewRow, fetchAllData, fetchDataByID, editRowByRowID, deleteRowByRowID
}