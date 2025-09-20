"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "ProductCategories",
      [
        {
          categoryName: "Mouse",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Keyboard",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "CPU",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Motherboard",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Graphics Card",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Memory",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Power Supply",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Mouse Pad",
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Monitor",
          categoryId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Speakers",
          categoryId: 10,
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
