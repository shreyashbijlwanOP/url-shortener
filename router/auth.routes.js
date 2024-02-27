const { Router } = require("express");

const { login, signup } = require("../controller/auth.controller");

const authRouter = Router();

authRouter.post("/login", login);

authRouter.post("/signup", signup);

module.exports = authRouter;
