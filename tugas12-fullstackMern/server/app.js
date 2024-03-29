var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const ProductsRouter = require("./app/product/router");
const CategoriesRouter = require("./app/category/router");
const TagsRouter = require("./app/tag/router");
const UsersRouter = require("./app/user/router");
const AddressRouter = require("./app/address/router");
const CartsRouter = require("./app/cart/router");
const OrderRouter = require("./app/order/router");
const InvoiceRouter = require("./app/invoice/router");

const { decodeToken } = require("./app/mw.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(decodeToken());

// pages
app.use("/api/products", ProductsRouter);
app.use("/api/categories", CategoriesRouter);
app.use("/api/tags", TagsRouter);
app.use("/auth", UsersRouter);
app.use("/api/addresses", AddressRouter);
app.use("/api/carts", CartsRouter);
app.use("/api", OrderRouter);
app.use("/api", InvoiceRouter);

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
