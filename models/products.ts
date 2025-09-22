import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/lib/sequelize";
import { ProductCategories } from "./productcategories";

interface ProductAttributes {
  id: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
  productCondition: "new" | "used";
  productOwnerId: number;
  productCategoryId: number;
}

type ProductCreationAttributes = Optional<ProductAttributes, "id">;

export class Products
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public productName!: string;
  public productDescription!: string;
  public productPrice!: number;
  public productQuantity!: number;
  public productCondition!: "new" | "used";
  public productOwnerId!: number;
  public productCategoryId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productCondition: {
      type: DataTypes.ENUM("new", "used"),
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productOwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "ProductCategories",
        key: "id",
      },
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "Products",
    modelName: "Products",
  }
);

// ✅ Association
ProductCategories.hasMany(Products, {
  foreignKey: "productCategoryId",
  as: "products",
});

Products.belongsTo(ProductCategories, {
  foreignKey: "productCategoryId",
  as: "category",
});

export default Products;
