import sequelize from "@/lib/sequelize";
import User from "./user";
import ProductCategories from "./productcategories";
import Products from "./products";

const db = {
  sequelize,
  User,
  ProductCategories,
  Products,
};

export default db;
