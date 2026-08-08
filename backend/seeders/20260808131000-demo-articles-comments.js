'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert('Articles', [
      {
        title: 'First article',
        content: 'Text of the first article',
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Second article',
        content: 'Text of the second article',
        createdAt: now,
        updatedAt: now,
      },
    ]);

    const [articles] = await queryInterface.sequelize.query(
      'SELECT id FROM "Articles" ORDER BY id ASC'
    );

    await queryInterface.bulkInsert('Comments', [
      {
        text: 'Comment for the first article',
        articleId: articles[0].id,
        createdAt: now,
        updatedAt: now,
      },
      {
        text: 'Another comment for the first article',
        articleId: articles[0].id,
        createdAt: now,
        updatedAt: now,
      },
      {
        text: 'Comment for the second article',
        articleId: articles[1].id,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
