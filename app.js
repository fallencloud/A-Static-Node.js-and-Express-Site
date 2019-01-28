//dependencies
const express = require("express");
const pug = require("pug");
const data = require("./data");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public")); //use a static route and the express.static method to serve the static files located in the public folder
app.set("view engine", "pug"); //set your “view engine” to “pug”
app.set("views", __dirname + "/views");

//index route
app.get("/", (req, res, next) => {
  res.render("index");
  next();
});

//GET about
app.get("/about", (req, res, next) => {
  res.render("about");
  next();
});

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  console.info(`Now listening on port ${port}`);
});

//handle errors
app.use((req, res, next) => {
  let err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.error(err.message);
});
