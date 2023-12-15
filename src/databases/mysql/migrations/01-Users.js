'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },
  
            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
      
            email: {
                type: Sequelize.STRING(50),
                allowNull: true,
                defaultValue: ""
            },
      
            phone: {
                type: Sequelize.STRING(14),
                allowNull: true,
                defaultValue: "", 
            },
      
            password: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
      
            role: {
                type: Sequelize.ENUM("customer", "restaurant", "driver"),
                allowNull: false,
                defaultValue: "customer",
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

    async down(queryInterface, sequelize) {
        await queryInterface.dropTable('users');
    }
};