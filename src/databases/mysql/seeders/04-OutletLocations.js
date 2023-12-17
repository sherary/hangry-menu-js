'use strict';
const { generateOutletLocations } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateOutletLocations(1000);
      
      return queryInterface.bulkInsert('outlet_locations', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('outlet_locations', null, {});
  }
};
