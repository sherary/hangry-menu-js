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
                model: 'Transactions',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        menu_item_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Menus',
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

        item_discount_ticket_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Configurations',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
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