module.exports = {
  multipleMongoosesToObject:  function (courses) {
    return courses.map(course => course.toObject());
  },
  mongooseToObject: function (course) {
    return course ? course.toObject() : course;
  },
};
