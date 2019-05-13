const express = require("express");
const logger = require("morgan");

// const path = require("path");
// const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
//mongoose connection
const { connect } = require("./db/connection");
//apiRoutes
const { apiRouter } = require("./routes/quotesapi");

const app = express();

connect()
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch(err => {
    console.error("Couldn't connect to Mongodb");
  });

app.use(logger("dev"));
app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = { app };
