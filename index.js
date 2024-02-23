const express = require("express");
const { urlRouter } = require("./router/url.routes");
const connectDB = require("./connectDB");
const { redirectToUrl } = require("./controller/url.controller");

const app = express();

connectDB("url-shortener");

app.use(express.urlencoded({ extended: false }), express.json());

app.get("/:id", redirectToUrl);

app.use("/api/urls", urlRouter);

app.listen(4000, () => {
  console.log("server is listing");
});
