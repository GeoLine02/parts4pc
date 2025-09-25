import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/lib/sequelize";
import Products from "./products";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  status: "member" | "vip" | "premium";
  email: string;
  phone: string;
  password: string;
}

type UserCreationAttributes = Optional<UserAttributes, "id">;

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone!: string;
  public password!: string;
  public status!: "member" | "vip" | "premium";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    status: {
      type: DataTypes.ENUM("member", "vip", "premium"),
      defaultValue: "member",
    },
    phone: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: "Users",
    modelName: "User",
  }
);

// Association
User.hasMany(Products, { foreignKey: "productOwnerId", as: "products" });
Products.belongsTo(User, { foreignKey: "productOwnerId", as: "owner" });

export default User;
