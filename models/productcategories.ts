import { Model, DataTypes } from "sequelize";
import sequelize from "@/lib/sequelize";

export interface ProductCategoriesAttributes {
  id: number;
  categoryName: string;
}

export class ProductCategories
  extends Model<ProductCategoriesAttributes>
  implements ProductCategoriesAttributes
{
  public id!: number;
  public categoryName!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
  },
  {
    sequelize,
    tableName: "ProductCategories",
    modelName: "ProductCategories",
  }
);

export default ProductCategories;
