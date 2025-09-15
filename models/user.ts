import { DataTypes, DATE, Model, Optional } from "sequelize";
import sequelize from "@/lib/sequelize";

// Type definitions for TS
interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public phone!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "User",
  }
);

export default User;
