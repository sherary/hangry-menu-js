'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('order_items', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },

            order_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Transactions',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            menu_item_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Menus',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            qty: {
                type: Sequelize.INTEGER(4),
                allowNull: false,
                defaultValue: 1, 
            },

            item_discount_ticket_id: {
                type: Sequelize.BIGINT,
                allowNull: true,
                references: {
                    model: 'Configurations',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            applied_item_discount: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: true,
                defaultValue: 0.00,
            },

            subtotal: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 10000.00,
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
        await queryInterface.dropTable('order_items');
    }
};