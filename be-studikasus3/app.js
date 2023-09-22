var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./app/config/db.js");
const cors = require("cors");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const productRoute = require("./app/product/router.js");
const categoryRoute = require("./app/category/router.js");
const tagRoute = require("./app/tag/router.js");
const authRoute = require("./app/auth/router.js");
const userRoute = require("./app/user/router.js");
const deliveryAddressRoute = require("./app/deliveryAddress/router.js");
const cartRoute = require("./app/cart/router.js");
const orderRoute = require("./app/order/router.js");
const invoiceRoute = require("./app/invoice/router.js");
const { decodeToken } = require("./app/mw.js");
const { cobamw } = require("./middleware/index.js");

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
app.use(cobamw);

app.use("/auth", authRoute);
app.use("/api", productRoute);
app.use("/api", categoryRoute);
app.use("/api", tagRoute);
app.use("/api", userRoute);
app.use("/api", deliveryAddressRoute);
app.use("/api", cartRoute);
app.use("/api", orderRoute);
app.use("/api", invoiceRoute);

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
