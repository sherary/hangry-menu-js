'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },

            type: {
                type: Sequelize.ENUM("pickup", "delivery"),
                allowNull: false,
                defaultValue: "delivery", 
                comment: "pickup = 3rd party drivers, delivery = internal drivers",
            },

            customer_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
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

            discount_applied: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0.00,
            },

            total_amount: {
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
        await queryInterface.dropTable('Orders');
    }
};