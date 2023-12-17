'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('outlet_locations', {
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

            tag: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: "Outlet Address"
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
                type: Sequelize.DOUBLE,
                allowNull: false,
                defaultValue: 0.0
            },

            long: {
                type: Sequelize.DOUBLE,
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
        
        // await queryInterface.addIndex('outlet_locations', ['street_address']);
        // await queryInterface.sequelize.query('CREATE SPATIAL INDEX lat_long_spatial_index ON outlet_locations (lat, long)');
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('outlet_locations');
    }
};