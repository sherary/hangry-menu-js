'use strict';
const { generateTransactions } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateTransactions(1000);
      
      return queryInterface.bulkInsert('transactions', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('transactions', null, {});
  }
};
