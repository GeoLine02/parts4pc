import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/lib/sequelize";

// Type definitions for TS
interface ProductAttributes {
  id: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
  productCondition: "new" | "used";
  productCategory: string;
  productOwnerId: number;
}

type UserCreationAttributes = Optional<ProductAttributes, "id">;

export class Products
  extends Model<ProductAttributes, UserCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public productName!: string;
  public productDescription!: string;
  public productPrice!: number;
  public productQuantity!: number;
  public productCondition!: "new" | "used";
  public productCategory!: string;
  public productOwnerId!: number;
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
    productCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productOwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "Products",
    modelName: "Products",
  }
);

export default Products;
