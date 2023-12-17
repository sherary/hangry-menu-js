'use strict';
const { generateConfigurations } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateConfigurations(1000);
      
      return queryInterface.bulkInsert('configurations', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('configurations', null, {});
  }
};
