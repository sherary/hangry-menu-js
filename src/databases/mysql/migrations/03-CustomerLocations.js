'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('customer_locations', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },

            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            tag: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: "Home Address"
            },

            street_address: {
                type: Sequelize.STRING(100),
                allowNull: false,
                defaultValue: "",
            },

            additional_info: {
                type: Sequelize.STRING(100),
                allowNull: true,
                defaultValue: ""
            },

            postal_code: {
                type: Sequelize.STRING(6),
                allowNull: true,
                defaultValue: 0
            },
    
            city: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: "JAKARTA RAYA"
            },
    
            province: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: "DKI JAKARTA",
            },
    
            country: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: "INDONESIA",
            },
    
            lat: {
                type: Sequelize.DECIMAL(10, 8),
                allowNull: false,
                defaultValue: 0.0
            },
    
            long: {
                type: Sequelize.DECIMAL(10, 8),
                allowNull: false,
                defaultValue: 0.0
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
        await queryInterface.dropTable('customer_locations');
    }
};