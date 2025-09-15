import sequelize from "./sequelize";
import "@/models/User";

export const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
    await sequelize.sync({ alter: true }); // sync models
    console.log("All models synced!");
  } catch (err) {
    console.error("Database error:", err);
  }
};
