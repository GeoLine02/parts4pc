import sequelize from "@/lib/sequelize";
import User from "./user";

const db = {
  sequelize,
  User,
};

export default db;
