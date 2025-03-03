'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const teachers = await queryInterface.sequelize.query(
      `SELECT id, dni FROM "Teachers";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const teacherJohn = teachers.find(t => t.dni === '12345678A');
    const teacherAlice = teachers.find(t => t.dni === '87654321B');
    const teacherRobert = teachers.find(t => t.dni === '45678901C');

    if (!teacherJohn || !teacherAlice || !teacherRobert) {
      throw new Error('No se encontraron los profesores necesarios para insertar estudiantes.');
    }

    await queryInterface.bulkInsert('Students', [
      {
        dni: '23456789D',
        name: 'Jane',
        last_name: 'Smith',
        date_of_birth: '2010-06-15',
        teacher_id: teacherJohn.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '34567890E',
        name: 'Michael',
        last_name: 'Johnson',
        date_of_birth: '2012-08-10',
        teacher_id: teacherAlice.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '45678901F',
        name: 'Emily',
        last_name: 'Davis',
        date_of_birth: '2014-03-25',
        teacher_id: teacherRobert.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: '56789012G',
        name: 'Daniel',
        last_name: 'Martinez',
        date_of_birth: '2009-12-01',
        teacher_id: teacherJohn.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
