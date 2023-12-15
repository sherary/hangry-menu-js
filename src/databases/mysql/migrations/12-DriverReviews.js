'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('driver_reviews', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
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
      
            rating: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
      
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
                defaultValue: ""
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
      await queryInterface.dropTable('driver_reviews');
    }
};