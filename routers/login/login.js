const router = require("express").Router();
const { login_controller } = require("../../controllers/login");
router.post("/", login_controller);

module.exports = router;
