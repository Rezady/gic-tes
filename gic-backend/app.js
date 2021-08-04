var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./model");
var bodyParser = require("body-parser");
const Redis = require("ioredis")
const User = require('./model/user')
const Kontak = require('./model/kontak')

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use((req, res, next) => {
  // membolehkan semua link untuk diakses, parameter kedua itu link
  res.setHeader('Access-Control-Allow-Origin', '*');
  // mengizinkan method get post dll untuk diakses di backend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT,PATCH,DELETE,OPTIONS');
  // mengizinkan headers yang boleh diakses
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
  
})

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  
  res.status(err.status || 500).json({
    success: false,
    message: "path tidak sesuai",
  });
});

db.kontak.belongsTo(db.user, { constraints: true, onDelete: 'CASCADE' });
db.user.hasMany(db.kontak);

// sinkronisasi perubahan skema database
db.sequelize.sync();
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = app;