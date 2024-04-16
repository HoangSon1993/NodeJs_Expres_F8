
const mongoose  = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://sondev:son2024nodejs@facebook.dudubbh.mongodb.net/f8_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connect successfully!!!");
    }
    catch(error){
        console.log("Connection Failure!!!");
    }
}

module.exports = {connect}