'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash('admin123', 10);
    const hashedPassword2 = await bcrypt.hash('user123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        email: 'admin@example.com',
        password: hashedPassword1,
        type: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user1@example.com',
        password: hashedPassword2,
        type: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user2@example.com',
        password: hashedPassword2,
        type: 'user',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'admin2@example.com',
        password: hashedPassword1,
        type: 'admin',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
