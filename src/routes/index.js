function route(app) {
  //Định nghĩa các route
  const coursesRouter = require("./courses")
  app.use('/courses',coursesRouter)

  const newRouter = require("./news");
  app.use("/news", newRouter);

  const siteRouter = require("./site");
  app.use("/", siteRouter);

  //   app.get("/news", function (req, res) {
  //     //res.send("hello");
  //     res.render("new");
  //   });
  //   app.get("/", function (req, res) {
  //     //res.send("hello");
  //     res.render("home");
  //   });
  //   app.get("/search", function (req, res) {
  //     console.log(req.query.q);

  //res.send("hello");
  //res.render("search");
  // });

  //   app.post("/search", (req, res) => {
  //     console.log(req.body);
  //     res.send("");
  //   });
}

module.exports = route;
