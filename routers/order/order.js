const router = require("express").Router();
const { get_order_data_controller } = require("../../controllers/order");
const { authentication } = require("../../middlewares/authentication");
router.get("/:UserId", authentication, get_order_data_controller);

module.exports = router;
