const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET route for products",
  });
});

router.get("/:productId", (req, res) => {
  const id = req.params.productId;
  if (id === "special") {
    return res.status(200).json({
      message: "GET route for SPECIAL products",
    });
  }
  res.status(200).json({
    message: `GET route for products ${id}`,
  });
});

router.patch("/:productId", (req, res) => {
  res.status(200).json({
    message: `UPDATED products route`,
  });
});

router.delete("/:productId", (req, res) => {
  res.status(200).json({
    message: `DELETE products route`,
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "POST route for products",
  });
});

module.exports = router;
