module.exports = (sequelize, DataTypes) => {
  const Carts = sequelize.define('carts', {
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

        dish_id: {
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
            type: DataTypes.INTEGER(2),
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
        modelName: 'Carts',
        tableName: 'carts',
        freezeTableName: true,
        timestamp: false,
    });

    // try many to many
    Carts.associate = (models) => {
        Carts.belongsToMany(models.Menus, {
            through: 'CartMenu',
            foreignKey: 'cart_id',
            otherKey: 'menu_id',
        });
    };

    return Carts;
}