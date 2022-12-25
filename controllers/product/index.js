const { Product } = require("../../models");

exports.generate_product_controller = async (req, res, next) => {
  try {
    const { UserId } = req.params;
    const { name, description, price, stock, imageURL } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      imageURL,
      UserId,
    });
    res.status(201).json({ message: "create product success", data: product });
  } catch (error) {
    console.log(error);
  }
};

exports.get_product_specify_controller = async (req, res, next) => {
  try {
    const { UserId } = req.params;
    const data = await Product.findAll({ where: { UserId } });
    if (data) {
      res.status(200).json({ message: "product", data });
    } else {
      throw { status: 400, message: "product not found" };
    }
  } catch (error) {
    console.log(error);
  }
};
