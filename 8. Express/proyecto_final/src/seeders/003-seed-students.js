'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Obtener el ID del profesor John Doe
    const teachers = await queryInterface.sequelize.query(
      `SELECT id FROM "Teachers" WHERE dni = '12345678A';`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (teachers.length === 0) {
      throw new Error('No se encontró el profesor necesario para insertar estudiantes.');
    }

    const teacherId = teachers[0].id;

    // Insertar el estudiante con el ID del profesor obtenido
    await queryInterface.bulkInsert('Students', [
      {
        dni: '87654321B',
        name: 'Jane',
        last_name: 'Smith',
        date_of_birth: '2010-06-15',
        teacher_id: teacherId, // Relación dinámica con el profesor
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
