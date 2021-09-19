const express = require("express");
const app = express();
const productRoutes = require("./API/routes/products");
const orderRoutes = require("./API/routes/orders");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  res.status(200).json({
    message: "It Works",
  });
});

module.exports = app;
