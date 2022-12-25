const { compare } = require("bcryptjs");
const { verifyToken } = require("../helpers/jsonwebtoken");
const { User } = require("../models");
exports.authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (access_token) {
      const payload = verifyToken(access_token);
      const data = await User.findByPk(payload.id);
      if (data) next();
      else throw { status: 401, message: "invalid access token" };
    } else {
      throw { status: 401, message: "please login first" };
    }
  } catch (error) {
    console.log(error);
  }
};
