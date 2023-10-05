var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./config/db.js");
const cors = require("cors");
const ProductRouter = require("./app/product/router.js");
const CategoryRouter = require("./app/category/router.js");
const TagRouter = require("./app/tag/router.js");
const userAuthRouter = require("./app/userAuth/router.js");
const deliveryAddressRoute = require("./app/deliveryAddress/router.js");
const { decodeToken } = require("./app/mw.js");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/images/products")));
app.use(decodeToken());

app.use("/usersauth", userAuthRouter);
app.use("/api", ProductRouter);
app.use("/api", CategoryRouter);
app.use("/api", TagRouter);
app.use("/api", deliveryAddressRoute);

// home
app.use("/", function (req, res) {
  res.render("index", { title: "Eduwork API Service" });
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
