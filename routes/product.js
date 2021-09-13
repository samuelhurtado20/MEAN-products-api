const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/", productController.CreateProduct);
router.get("/", productController.AllProducts);
router.put("/:id", productController.UpdateProduct);
router.get("/:id", productController.SingleProduct);
router.delete("/:id", productController.DeleteProduct);

module.exports = router;
