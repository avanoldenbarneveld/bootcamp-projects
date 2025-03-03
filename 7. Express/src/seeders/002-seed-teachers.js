'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM "Users";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('Teachers', [
      {
        dni: '12345678A',
        name: 'John',
        last_name: 'Doe',
        date_of_birth: '1980-01-01',
        user_id: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '87654321B',
        name: 'Alice',
        last_name: 'Smith',
        date_of_birth: '1985-05-15',
        user_id: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '45678901C',
        name: 'Robert',
        last_name: 'Brown',
        date_of_birth: '1978-09-20',
        user_id: users[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teachers', null, {});
  },
};