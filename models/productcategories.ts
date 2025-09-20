import { DataTypes, Model } from "sequelize";
import sequelize from "@/lib/sequelize";

interface ProductCategoriesAttributes {
  id: number;
  categoryName: string;
  categoryId: number;
}

export class ProductCategories
  extends Model<ProductCategoriesAttributes>
  implements ProductCategoriesAttributes
{
  public id!: number;
  public categoryName!: string;
  public categoryId!: number;
  public readonly createdAt!: Date;
  public readonly upadtedAt!: Date;
}

ProductCategories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "ProductCategories",
    modelName: "ProductCategories",
  }
);

export default ProductCategories;
