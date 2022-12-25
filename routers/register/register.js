const router = require("express").Router();
const { register_controller } = require("../../controllers/register");
router.post("/", register_controller);

module.exports = router;
