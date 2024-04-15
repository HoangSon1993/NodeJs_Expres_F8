const express = require("express"); // Thư viện chúng ta vừa cài
const morgan = require("morgan"); // Thư viện morgan chúng ta vừa cài

const app = express(); // Trả về 1 Instance của express()
// Chúng ta sẽ sử dụng nó xuyên suốt trong quá trình
const PORT = 3000; // Khai báo biến PORT có giá trị 3000



//Middleware
app.use(express.urlencoded({
  extended: true
}))  // xử lý form-data cho trường hợp submit form
app.use(express.json()) // xử lý dạng javascript gửi lên

// HTTP logger
//app.use(morgan("combined")); //Sử dụng morgan

// ---Sử dung handlebars--
// Template engine
const { engine } = require("express-handlebars");
const path = require("path");
const { log } = require("console");
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

// Home, Search, Contat

// Đưa tất cả các route của app vào file /routes/index.js
const route = require('./routes/index')
route(app)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
