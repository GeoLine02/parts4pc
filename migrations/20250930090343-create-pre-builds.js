"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PreBuilds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      // Product
      product_name: {
        type: Sequelize.STRING,
        allowNull: false, // every prebuild should have a name
      },
      price: {
        type: Sequelize.INTEGER, // or Sequelize.DECIMAL(10, 2) if you want decimals
        allowNull: false,
      },

      // Owner
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // must match the table name of your Users migration
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      // CPU
      cpu: { type: Sequelize.STRING },
      cpu_socket: { type: Sequelize.STRING },
      cpu_cores: { type: Sequelize.INTEGER },
      cpu_threads: { type: Sequelize.INTEGER },

      // Motherboard
      motherboard_model: { type: Sequelize.STRING },
      motherboard_socket: { type: Sequelize.STRING },
      motherboard_dimmslot_count: { type: Sequelize.INTEGER },
      max_ram_frequency: { type: Sequelize.INTEGER },

      // Storage
      ssd_model: { type: Sequelize.STRING },
      ssd_capacity_gb: { type: Sequelize.INTEGER },
      ssd_type: { type: Sequelize.STRING },
      hdd_model: { type: Sequelize.STRING },
      hdd_capacity_gb: { type: Sequelize.INTEGER },

      // GPU
      gpu_name: { type: Sequelize.STRING },
      gpu_vram_gb: { type: Sequelize.INTEGER },

      // RAM
      ram_model: { type: Sequelize.STRING },
      ram_capacity_gb: { type: Sequelize.INTEGER },
      ram_frequency_mhz: { type: Sequelize.INTEGER },
      ram_type: { type: Sequelize.STRING },

      // Case
      case_model: { type: Sequelize.STRING },
      case_fans_count: { type: Sequelize.INTEGER },

      // Cooling
      cpu_cooler_model: { type: Sequelize.STRING },
      cpu_cooler_type: { type: Sequelize.STRING },

      // PSU
      psu_model: { type: Sequelize.STRING },
      psu_wattage: { type: Sequelize.INTEGER },
      psu_modularity: { type: Sequelize.STRING },

      // Meta
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PreBuilds");
  },
};
