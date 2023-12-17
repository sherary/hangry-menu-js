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
                type: Sequelize.ENUM("customer", "outlet"),
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

        // await queryInterface.addIndex('users', {
        //     name: 'IDX_USER',
        //     type: 'BTREE',
        //     fields: ['email', 'phone'],
        // });

        // await queryInterface.addIndex('users', {
        //     name: 'IDX_UNIQUE',
        //     unique: true,
        //     fields: ['email', 'phone'],
        // });
    },

    async down(queryInterface, sequelize) {
        await queryInterface.dropTable('users');
    }
};