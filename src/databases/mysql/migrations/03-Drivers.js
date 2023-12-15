'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('drivers', {
      id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT
      },

      driver_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
              model: 'Users',
              key: 'id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
      },

      vehicle_type: {
          type: Sequelize.STRING(20),
          allowNull: true,
          defaultValue: ""
      },

      vehicle_plate_number: {
          type: Sequelize.STRING(10),
          allowNull: false,
      },

      added_at: {
          type: Sequelize.DATE,
          allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  
  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('drivers');
  }
};
