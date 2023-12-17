module.exports = (sequelize, DataTypes) => {
    const Menus = sequelize.define('menus', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT
        },

        outlet_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'outlets',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: ""
        },

        description: {
            type: DataTypes.STRING(100),
            allowNull: true,
            defaultValue: "", 
        },

        price: {
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
        modelName: 'Menus',
        tableName: 'menus',
        freezeTableName: true,
        timestamps: false,
    });

    // try many to many
    Menus.associate = (models) => {
        Menus.belongsToMany(models.Carts, {
            through: 'CartMenu',
            foreignKey: 'menu_id',
            otherKey: 'cart_id',
        });
    };

    return Menus;
}