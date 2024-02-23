const { Router } = require("express");
const {
  createUrlShortId,
  redirectToUrl,
  getAllUrls,
  getAnalytic,
} = require("../controller/url.controller");

const urlRouter = Router();

urlRouter.route("/").get(getAllUrls).post(createUrlShortId);

urlRouter.route("/:id").get(redirectToUrl);

urlRouter.route("/analytic/:id").get(getAnalytic);

module.exports = { urlRouter };
