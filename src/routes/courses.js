const express = require('express')
const coursesController = require("../app/controllers/CourseController")

const route = express.Router()

route.get("/:slug",coursesController.show)

module.exports= route
