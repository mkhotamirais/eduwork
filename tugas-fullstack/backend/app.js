var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const config = require("./config/config.js");
const db = require("./config/db.js");
const cors = require("cors");
const ProductRouter = require("./app/product/router.js");
const CategoryRouter = require("./app/category/router.js");
const TagRouter = require("./app/tag/router.js");
const authUserRouter = require("./app/authUser/router.js");
const deliveryAddressRouter = require("./app/deliveryAddress/router.js");
// const cartRouter = require("./app/cart/router.js");
// const orderRouter = require("./app/order/router.js");
// const invoiceRouter = require("./app/invoice/router.js");
const { decodeToken } = require("./app/mw.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(decodeToken());

// pages
app.use("/auth", authUserRouter);
app.use("/api", ProductRouter);
app.use("/api", CategoryRouter);
app.use("/api", TagRouter);
app.use("/api", deliveryAddressRouter);
// app.use("/api", cartRouter);
// app.use("/api", orderRouter);
// app.use("/api", invoiceRouter);

// home
app.use("/", (req, res) => {
  res.render("index", {
    title: "Eduwork Api Service",
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
