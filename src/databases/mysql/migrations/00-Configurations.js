'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('configurations', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },

            key: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },

            value: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },

            description: {
                type: Sequelize.TEXT,
                allowNull: true,
                defaultValue: ""
            },

            total: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0.00,
            },

            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            end_date: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('configurations');
    }
};