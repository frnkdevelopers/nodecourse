const express = require("express");
const router = express.Router();

const usersRouter = require("./user.routes.js");

router.use("/users", usersRouter);

module.exports = router;
