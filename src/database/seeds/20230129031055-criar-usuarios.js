const bcryptjs = require('bcryptjs');

/**
 * Usamos seeds para criar valores iniciais no banco de dados, fora os valores que serão criados pelos usuários.
*/

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Ana Sara',
        email: 'anasara@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Marcos Cossa',
        email: 'mcossa@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Milton Chissano',
        email: 'milton@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Teresa Dias',
        email: 'dias@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Victor Fernando',
        email: 'vfernando@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
