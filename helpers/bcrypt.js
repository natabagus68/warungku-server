const bcrypt = require("bcryptjs");

exports.hasPasword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 8);
};

exports.comparePassword = (plainPassword, encrypt) => {
  return bcrypt.compareSync(plainPassword, encrypt);
};
