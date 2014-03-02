
/*
 * GET home page.
 */

var mysql = require('../config/db');
var connection = mysql.dbConect.blog();
var article = require ('../model/article');
var auth = require ('../model/auth');


exports.blogController = {

    'top' : function(req, res){


        article.getAllArticle(req , res , function(data){
//            var msg = req.sessionID + 'on' + process.pid;

            res.render('index', { articles: data });
        });


    },
    'postBlog' : function(req , res){

        article.post(req , res ,function(){
            res.redirect('/');
        });
    },

    'login'  : function(req , res){
        if(req.session.flg){
            res.redirect('/mypage');
        }else{
            res.render('login');
        }


    },

    'doLogin'  : function(req , res){
        auth.login(req , res ,function(){
            res.redirect('/mypage');
        });



    },


    'myPage'  : function(req , res){

        if(req.session.flg){
            res.render('mypage');
        } else {
            res.redirect('/login');
        }



    },

    'about' : function(req , res){
        res.render('about');
    }



};
