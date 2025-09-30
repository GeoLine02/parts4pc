"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "ProductCategories",
      [
        {
          categoryName: "Mouse",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Keyboard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "CPU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Motherboard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Graphics Card",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Memory",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Power Supply",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Mouse Pad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Monitor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Speakers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "PC Parts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Prebuilds",
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
