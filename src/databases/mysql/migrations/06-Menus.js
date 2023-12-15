'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('menus', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },

            outlet_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Outlets',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: ""
            },

            description: {
                type: Sequelize.STRING(14),
                allowNull: true,
                defaultValue: "", 
            },

            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 10000.00,
            },

            availability: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
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
        await queryInterface.dropTable('menus');
    }
};