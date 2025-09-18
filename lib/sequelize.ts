/* eslint-disable @typescript-eslint/no-require-imports */
import "server-only";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port: Number(process.env.DB_PORT) || 5432,
    logging: true,
    dialectModule: require("pg"),
  }
);

export default sequelize;
