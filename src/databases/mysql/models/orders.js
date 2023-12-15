module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('orders', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
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

        restaurant_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'Restaurants',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        driver_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
              model: 'Drivers',
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
        modelName: 'Orders',
        tableName: 'orders',
        freezeTableName: true,
        timestamps: false,
    });

    return Orders;
}