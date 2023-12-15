module.exports = (sequelize, DataTypes) => {
  const MenuItems = sequelize.define('menu_items', {
      id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.BIGINT
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

      name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          defaultValue: ""
      },

      description: {
          type: DataTypes.STRING(14),
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
      modelName: 'MenuItems',
      tableName: 'menu_items',
      freezeTableName: true,
      timestamps: false,
  });

  return MenuItems;
}