module.exports = (sequelize, DataTypes) => {
  const Deliveries = sequelize.define('deliveries', {
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
      modelName: 'Deliveries',
      tableName: 'deliveries',
      freezeTableName: true,
      timestamps: false,
  });

  return Deliveries;
}