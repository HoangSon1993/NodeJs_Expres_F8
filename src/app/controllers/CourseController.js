const { log } = require("console");
const Course = require("../models/Courses");
const{mongooseToObject} = require('../utils/mongoose')
class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {;
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        console.log(course);
        res.render("courses/show",{course:mongooseToObject(course)})
      })
      .catch(next);
  }
}

module.exports = new CourseController();
