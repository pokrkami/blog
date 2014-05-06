
/*
 * GET home page.
 */

var mysql = require('../config/db');
var connection = mysql.dbConect.blog();
var article = require ('../model/article');
var auth = require ('../model/auth');


exports.blogController = {

    //top page
    'top' : function(req, res){


        article.getAllArticle(req , res , function(data){
//            var msg = req.sessionID + 'on' + process.pid;

            res.render('index', { articles: data });
        });


    },


    'myPage'  : function(req , res){

        if(req.session.flg){
            res.render('mypage');
        } else {
            res.redirect('/login');
        }



    },

    //article detail
    'articleDetail' : function(req, res){

        if(isNaN(req.params.id * 1) ){
            return false;
        }

        article.getArticle(req , res , function(data){
            res.render('article_detail', { article: data });
        });

    },

    //about page
    'about' : function(req , res){
        res.render('about');
    },

    // login page
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


    //----API----

    //post article
    'postBlog' : function(req , res){

        article.post(req , res ,function(){
            res.redirect('/');
        });
    }


};
