const express = require("express");

//lấy ra controller
const newsController = require("../app/controllers/NewsController");

// newController.index
const route = express.Router();
route.get("/:slug", newsController.show);
route.get("/", newsController.index);

module.exports = route;
