const { User } = require("../../models");
const { comparePassword } = require("../../helpers/bcrypt");
const { generateToken } = require("../../helpers/jsonwebtoken");
exports.login_controller = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // search email in table users
    const users = await User.findOne({
      where: {
        email,
      },
    });

    // if email exists
    if (users) {
      // compare password
      const compare = comparePassword(password, users.password);
      // if compare true
      if (compare) {
        // generate token
        const payload = {
          id: users.id,
          email,
        };

        const access_token = generateToken(payload);

        // rest api
        res.status(200).json({ access_token, message: "login success" });
      }
      //   if compare false
      else {
        throw { status: 401, message: "invalid password" };
      }
    }
    // if email not exists
    else {
      throw { status: 401, message: "email invalid" };
    }
  } catch (error) {
    console.log(error);
  }
};
