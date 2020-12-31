const express = require("express");
const router = express.Router();
const category = require("../models/categorySchema");

router.post("/category", (req, res) => {});

router.get("/category", (req, res) => {
  category.find({}).then((category) => res.send(category));
});

router.get("/category/:category_id", (req, res) => {
  let category_id = req.params.category_id;
  category_id.find({ _id: category_id }).then((category) => res.send(category));
});
router.put("/category/:edit", (req, res) => {});
router.delete("/category/:delete", (req, res) => {});

module.exports = router;
