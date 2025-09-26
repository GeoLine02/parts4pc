/* eslint-disable @typescript-eslint/no-require-imports */
// import "server-only";
// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   process.env.DB_NAME || "",
//   process.env.DB_USER || "",
//   process.env.DB_PASSWORD || "",
//   {
//     host: process.env.DB_HOST || "localhost",
//     dialect: "postgres",
//     port: Number(process.env.DB_PORT) || 5432,
//     logging: true,
//     dialectModule: require("pg"),
//   }
// );

// export default sequelize;

import "server-only";
import { Sequelize } from "sequelize";

const isProduction = process.env.NODE_ENV === "production";

const sequelize = isProduction
  ? new Sequelize(process.env.EXTERNAL_DATABASE_URL!, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: false,
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 30000,
      },
    })
  : new Sequelize(
      process.env.DB_NAME || "",
      process.env.DB_USER || "",
      process.env.DB_PASSWORD || "",
      {
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 5432,
        dialect: "postgres",
        logging: console.log,
        dialectModule: require("pg"),
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
          acquire: 30000,
        },
      }
    );

export default sequelize;
