"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productDescription: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      productCondition: {
        type: Sequelize.ENUM("new", "used"),
        allowNull: false,
      },
      productPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ProductCategories",
          key: "categoryId",
        },
        onUpdate: "CASCADE",
      },
      productOwnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // refers to table name
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // if a user is deleted, delete their products
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
