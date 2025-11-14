'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      email: 'Joh@gmail.com',
      password: '123456',
      username: 'John Doe',

    },
    {
      email: 'Selena@gmail.com',
      password: '123456',
      username: 'Selena Gomez',
    },
    {
      email: 'Cheif@gmail.com',
      password: '123456',
      username: 'Cheif Kief',
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
