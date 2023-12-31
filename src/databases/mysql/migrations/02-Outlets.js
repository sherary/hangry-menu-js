'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('outlets', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },
    
            owner_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },

            name: {
                type: Sequelize.STRING(50),
                allowNull: true,
                defaultValue: ""
            },

            type: {
                type: Sequelize.ENUM("chinese", "western", "local", "indian"),
                allowNull: false,
                defaultValue: "local",
            },

            phone: {
                type: Sequelize.STRING(14),
                allowNull: true,
                defaultValue: "", 
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
        await queryInterface.dropTable('outlets');
    }
};