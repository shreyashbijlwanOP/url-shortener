const { Router } = require("express");
const UserModal = require("../models/user.modal");
const { v4: uuid } = require("uuid");
const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModal.findOne({ email, password })
      .select({ password: 0 })
      .lean();
    return res
      .cookie("tkn", uuid())
      .status(200)
      .json({ type: "success", msg: user });
  } catch (error) {
    return res.status(400).send("User Not Found");
  }
});

authRouter.post("/signup", async (req, res) => {
  const { email, password, userName } = req.body;
  try {
    let user = await UserModal.create({ email, password, userName });
    user = user.toJSON();
    delete user.password;
    return res.status(201).json({ type: "success", msg: user });
  } catch (error) {
    return res.status(400).json({ type: "Error", error: "Already Exists" });
  }
});

module.exports = authRouter;
