const express = require("express"); // Thư viện chúng ta vừa cài
const morgan = require("morgan"); // Thư viện morgan chúng ta vừa cài

const app = express(); // Trả về 1 Instance của express()
// Chúng ta sẽ sử dụng nó xuyên suốt trong quá trình
const PORT = 3000; // Khai báo biến PORT có giá trị 3000

// HTTP logger
app.use(morgan("combined")); //Sử dụng morgan

// ---Sử dung handlebars--
// Template engine
const { engine } = require("express-handlebars");
const path = require("path");
app.engine(
  ".hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Static file
app.use(express.static(path.join(__dirname, "public")));

//Định nghĩa các route
app.get("/", function (req, res) {
  //res.send("hello");
  res.render("home");
});
app.get("/news", function (req, res) {
  //res.send("hello");
  res.render("new");
});

app.get("/search", function (req, res) {
  console.log(req.query.q)
  console.log(req.query.author)

  //res.send("hello");
  res.render("search");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
