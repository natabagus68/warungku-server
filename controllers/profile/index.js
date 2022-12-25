const { User, Profile } = require("../../models");

exports.profile_controller = async (req, res, next) => {
  try {
    const { UserId } = req.params;
    const data = await Profile.findOne({
      where: { UserId },
      include: User,
    });
    if (data) {
      res.status(200).json({ message: "valid profile", data });
    } else {
      throw { status: 400, message: "invalid params" };
    }
  } catch (error) {
    console.log(error);
  }
};

exports.generate_profile_controller = async (req, res, next) => {
  try {
    const { first_name, last_name, age, phone_number, address } = req.body;
    const { UserId } = req.params;
    const data = await Profile.findOne({ where: { UserId } });
    if (data) {
      throw { status: 400, message: "profile has exists" };
    } else {
      const profile = await Profile.create({
        first_name,
        last_name,
        age,
        phone_number,
        address,
        UserId,
      });

      res
        .status(201)
        .json({ message: "create profile success", data: profile });
    }
  } catch (error) {
    console.log(error);
  }
};
