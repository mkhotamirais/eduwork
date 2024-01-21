import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Products = db.define(
  "Products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    image: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default Products;

(async () => {
  await db.sync();
})();
