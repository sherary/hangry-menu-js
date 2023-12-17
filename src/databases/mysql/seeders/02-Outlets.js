'use strict';
const { generateOutlets } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateOutlets(1000);
      
      return queryInterface.bulkInsert('outlets', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('outlets', null, {});
  }
};
