const express = require("express");
const {getProduct, postProduct, deleteProduct, updateProduct} = require("../controller/ProductController");
const router = express.Router();
router.get("/getProduct", getProduct);
router.post("/postProduct", postProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);
module.exports = router;