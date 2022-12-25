"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User);
      Product.hasMany(models.Order);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      imageURL: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
