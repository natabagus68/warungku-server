const router = require("express").Router();
const loginRouter = require("./login/login");
const registerRouter = require("./register/register");
router.use("/login", loginRouter);
router.use("/register", registerRouter);
module.exports = router;
