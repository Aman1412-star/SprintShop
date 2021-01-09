const express = require("express");
const router = express.Router();
const product = require("../models/productSchema");

router.post("/products", (req, res) => {});

//get all products
router.get("/products", (req, res) => {
  product.find({}).then((product) => res.send(product));
});

//get single product
router.get("/products/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  product_id.find({ _id: product_id }).then((product) => res.send(product));
});

//delete product
router.delete("/product/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  product_id
    .deleteOne({ _id: product_id })
    .then((product) => res.send({ message: `Product ${product} deleted.` }));
});

//edit product
router.put("/product/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  product_id
    .update({ _id: product_id })
    .then((product) => res.send({ message: `Product ${product} updated.` }));
});

module.exports = router;
