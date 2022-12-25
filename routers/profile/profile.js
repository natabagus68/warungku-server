const router = require("express").Router();
const {
  profile_controller,
  generate_profile_controller,
} = require("../../controllers/profile");

router.get("/:UserId", profile_controller);
router.post("/:UserId", generate_profile_controller);
module.exports = router;
