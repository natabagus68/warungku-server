const router = require("express").Router();
const {
  generate_product_controller,
  get_product_specify_controller,
} = require("../../controllers/product");

router.post("/:UserId", generate_product_controller);
router.get("/:UserId", get_product_specify_controller);

module.exports = router;
