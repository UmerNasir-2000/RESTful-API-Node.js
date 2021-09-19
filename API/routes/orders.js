const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET route for orders",
  });
});

router.get("/:orderId", (req, res) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: `GET route for order ${id}`,
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "POST route for order",
  });
});

router.delete("/:orderId", (req, res) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: `DELETE route for order ${id}`,
  });
});

module.exports = router;
