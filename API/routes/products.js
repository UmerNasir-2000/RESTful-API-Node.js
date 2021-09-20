const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product");

router.get("/", (req, res) => {
  Product.find()
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
  // res.status(200).json({
  //   message: "GET route for products",
  // });
});

router.get("/:productId", (req, res) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => console.log(err));
});

router.patch("/:productId", (req, res) => {
  const id = req.params.productId;
  const updateOps = {};
  for (let ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Product.findByIdAndUpdate(id, { $set: updateOps })
    .exec()
    .then((updatedDoc) => {
      console.log(updatedDoc);
      res.status(200).json(updatedDoc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err,
      });
    });
});

router.delete("/:productId", (req, res) => {
  const id = req.params.productId;
  Product.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error,
      });
    });
});

router.post("/", (req, res) => {
  const { name, price } = req.body;
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: name,
    price: price,
  });

  console.log(product);

  product
    .save(product)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  res.status(201).json({
    message: "POST route for products",
    createdProduct: product,
  });
});

module.exports = router;
