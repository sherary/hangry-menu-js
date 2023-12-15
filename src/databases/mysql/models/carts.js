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
              model: 'menu_items',
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

  return Carts;
}