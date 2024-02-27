const express = require("express");
const { urlRouter } = require("./router/url.routes");
const connectDB = require("./connectDB");
const { redirectToUrl } = require("./controller/url.controller");
const authRouter = require("./router/auth.routes");
const { checkAuthentication } = require("./middleware/auth.middleware");

const app = express();

connectDB("url-shortener");

app.use(express.urlencoded({ extended: false }), express.json());

app.get("/:id", checkAuthentication, redirectToUrl);

app.use("/api/urls", checkAuthentication, urlRouter);

app.use("/api/auth", authRouter);

app.listen(4000, () => {
  console.log("server is listing");
});
