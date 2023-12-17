'use strict';
const { generateCarts } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateCarts(1000);
      
      return queryInterface.bulkInsert('carts', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('carts', null, {});
  }
};
