'use strict';
const { generateMenus } = require('../../../services/chance');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = generateMenus(1000);
      
      return queryInterface.bulkInsert('menus', data);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('menus', null, {});
  }
};
