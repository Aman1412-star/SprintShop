const express = require("express");
const router = express.Router();
const category = require("../models/categorySchema");

router.post("/category", (req, res) => {});

//get all category
router.get("/category", (req, res) => {
  category.find({}).then((category) => res.send(category));
});

//get single category
router.get("/category/:category_id", (req, res) => {
  let category_id = req.params.category_id;
  category_id.find({ _id: category_id }).then((category) => res.send(category));
});

//edit category
router.put("/category/:category_id", (req, res) => {
  let category_id = req.params.category_id;
  category_id
    .update({ _id: category_id })
    .then((category) => res.send({ message: `Category ${category} updated.` }));
});

//delete category
router.delete("/category/:category_id", (req, res) => {
  let category_id = req.params.category_id;
  category_id
    .deleteOne({ _id: category_id })
    .then((category) => res.send({ message: `Category ${category} deleted.` }));
});

module.exports = router;
