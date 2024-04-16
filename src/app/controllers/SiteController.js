const { title } = require('process');
const Course  = require('../models/Courses')
const {multipleMongoosesToObject} = require('../utils/mongoose')
class SiteController {

    //[GET] /
    index(req, res, next) {
        // // Sử dụng callback function
        // Course.find({},function(err, courses){
        //     if(!err) {
        //         res.json(courses)
        //     }else{
        //         next(err)
        //     }
        // })

        //Sử dụng promises
        Course.find({}).then((courses) => {
            courses = multipleMongoosesToObject(courses)
            res.render('home',{
                courses  //courses:courses
            })
        }).catch((err) => {
            next(err)
        });
    }
    //[GET] /search
    search(req,res){
        res.render("search");
    }

}

module.exports = new SiteController