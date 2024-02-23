const { Router } = require("express");
const {
  createUrlShortId,
  redirectToUrl,
  getAllUrls,
} = require("../controller/url.controller");

const urlRouter = Router();

urlRouter.route("/").get(getAllUrls).post(createUrlShortId);

urlRouter.get("/:id", redirectToUrl);

module.exports = { urlRouter };
