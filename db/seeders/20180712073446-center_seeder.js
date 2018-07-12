'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('centers', [
        {
          name: 'Tektite Tower',
          lat: 14.582988,
          long: 121.061744,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Union Bank Plaza',
          lat: 14.587312,
          long: 121.063531,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tektite Tower',
          lat: 14.584997,
          long: 121.057386,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('centers', null, {});
  }
};
