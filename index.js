const express = require('express') // Thư viện chúng ta vừa cài
const morgan = require('morgan') // Thư viện morgan chúng ta vừa cài

const app = express() // Trả về 1 Instance của express()
// Chúng ta sẽ sử dụng nó xuyên suốt trong quá trình
const PORT = 3000 // Khai báo biến PORT có giá trị 3000

//Sử dụng morgan
app.use(morgan(''))

//Định nghĩa các route
app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})

app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
})