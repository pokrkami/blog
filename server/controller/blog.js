
/*
 * GET home page.
 */

var mysql = require('../config/db');
var connection = mysql.dbConect.blog();
var article = require ('../model/article');


exports.blogController = {

    'top' : function(req, res){


        article.getAllArticle(req , res , function(data){
//            console.log(debug(data));
            res.render('index', { articles: data });
        });


    },
    'postBlog' : function(req , res){

        article.post(req , res ,function(){
            res.redirect('/');
        });
    }
};
