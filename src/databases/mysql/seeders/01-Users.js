'use strict';
const { generateUsers } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateUsers(1000);
      
      return queryInterface.bulkInsert('users', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users', null, {});
  }
};
