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
      },

      dish_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      qty: {
          type: DataTypes.INTEGER(2),
          allowNull: false,
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