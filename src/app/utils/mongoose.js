module.exports = {
  multipleMongoosesToObject:  function (courses) {
    return courses.map(course => course.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.ToObject : mongoose;
  },
};
