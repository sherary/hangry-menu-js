'use strict';
const { generateCustomerLocations } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateCustomerLocations(1000);
      
      return queryInterface.bulkInsert('customer_locations', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('customer_locations', null, {});
  }
};
