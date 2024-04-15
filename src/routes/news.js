const express = require("express");

//lấy ra controller
const newsController = require("../app/controllers/NewsController");

// newController.index
const route = express.Router();
route.use("/:slug", newsController.show);
route.use("/", newsController.index);

module.exports = route;
