const router = require("express").Router();
const {
  profile_controller,
  generate_profile_controller,
} = require("../../controllers/profile");
const { authentication } = require("../../middlewares/authentication");

router.get("/:UserId", profile_controller);
router.post("/:UserId", authentication, generate_profile_controller);
module.exports = router;
