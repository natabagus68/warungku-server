const router = require("express").Router();
const loginRouter = require("./login/login");
router.use("/login", loginRouter);
module.exports = router;
