'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert('Articles', [
      {
        id: 1,
        title: 'First article',
        content: 'Text of the first article',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        title: 'Second article',
        content: 'Text of the second article',
        createdAt: now,
        updatedAt: now,
      },
    ]);

    await queryInterface.bulkInsert('Comments', [
      {
        text: 'Comment for the first article',
        articleId: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        text: 'Another comment for the first article',
        articleId: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        text: 'Comment for the second article',
        articleId: 2,
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
