const { User } = require("../../models");

exports.register_controller = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // check exists or not
    const data = await User.findOne({ where: { email } });
    // if email exists
    if (data) {
      throw { status: 400, message: "email has been exists" };
    }
    // if email does not exists
    else {
      const generateNewUser = await User.create({ email, password });
      res
        .status(201)
        .json({ message: "register success", data: generateNewUser });
    }
  } catch (error) {
    console.log(error);
  }
};
