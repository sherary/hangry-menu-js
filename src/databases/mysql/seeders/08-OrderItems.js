'use strict';
const { generateOrderItems } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateOrderItems(1000);
      
      return queryInterface.bulkInsert('order_items', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('order_items', null, {});
  }
};
