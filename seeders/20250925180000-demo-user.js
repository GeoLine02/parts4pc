"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "ProductCategories",
      [
        {
          firstName: "nika",
          lastName: "wuladze",
          email: "nikaWuladze@gmail.com",
          status: "vip",
          phone: "123123123",
          password:
            "$2b$10$4Y7lBQqnbWMUmqpPcE4lheGap9KqzoYy882d95qhkAHZO0ttaEhCe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("ProductCategories", null, {});
  },
};
