module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define('transactions', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        type: {
            type: DataTypes.ENUM("takeway", "delivery"),
            allowNull: false,
            defaultValue: "delivery", 
        },

        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        outlet_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Outlets',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        status: {
            type: DataTypes.ENUM("pending", "confirmed", "rejected", "canceled", "on_delivery", "delivered"),
            allowNull: true,
            defaultValue: "pending", 
        },

        discount_ticket_id: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'Configurations',
                key: 'id',
            },
            onDelete: 'cascade'
        },

        discount_applied: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.00,
        },

        total_amount: {
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
        modelName: 'Transactions',
        tableName: 'transactions',
        freezeTableName: true,
        timestamps: false,
    });

    return Transactions;
}