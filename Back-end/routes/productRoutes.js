const express = require("express");
const router = express.Router();
const product = require("../models/productSchema")

router.post("/products", (req, res) => {});

router.get("/products", (req, res) => {
    product.find({}).then((product) => res.send(product));
});
router.get("/products/:product_name", (req, res) => {
    let product_id = req.params.product_id;
  product_id.find({ _id: product_id }).then((product) => res.send(product));
});

router.delete("/product/:hide", (req, res) => {});

router.put("/product/:edit", (req, res) => {});

module.exports = router;
