'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('deliveries', {
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
                    model: 'Orders',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            driver_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Drivers',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            status: {
                type: Sequelize.ENUM("pending", "confirmed", "rejected", "canceled", "on_delivery", "delivered"),
                allowNull: true,
                defaultValue: "pending", 
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
        await queryInterface.dropTable('deliveries');
    }
};