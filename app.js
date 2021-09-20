const express = require("express");
const app = express();
const morgan = require("morgan");
const productRoutes = require("./API/routes/products");
const orderRoutes = require("./API/routes/orders");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://Umer:DBPassword123@umercluster.038er.mongodb.net/SHOP_DB?retryWrites=true&w=majority`
);

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Allow-Access-Control-Origin", "*");
  res.header(
    "Allow-Access-Control-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Allow-Access-Control-Methods", "DELETE, PATCH, PUT, POST, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found.");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
