const { User, Product, Order } = require("../../models");

exports.get_order_data_controller = async (req, res, next) => {
  try {
    const { UserId } = req.params;
    const data = await Order.findAll({ where: { UserId } });
    if (data) {
      res.status(200).json({ mesage: "Order data", data });
    } else {
      throw { status: 400, message: "invalid order data" };
    }
  } catch (error) {
    console.log(error);
  }
};
