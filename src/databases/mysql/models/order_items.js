module.exports = (sequelize, DataTypes) => {
    const OrderItems = sequelize.define('order_items', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        order_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Orders',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        menu_item_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'menu_items',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        qty: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
            defaultValue: 1, 
        },

        applied_item_discount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 0.00,
        },

        subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 10000.00,
        },

        availability: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },

        added_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'OrderItems',
        tableName: 'order_items',
        freezeTableName: true,
        timestamps: false,
    });

    return OrderItems;
}