
/*
 * GET home page.
 */

//DB設定
var mysql = require('../config/db');
var connection = mysql.dbConect.blog();

exports.blogController = {

    'top' : function(req, res){

            var queryStr = 'select * from blog';
            connection.query(queryStr, [ new Date() ], function(err, rows) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('db中身' + debug(rows));
                    res.render('index', { articles: rows });
                }
            });




    },
    'postBlog' : function(req , res){
        var body = req.body;
        insertBlogQuery = 'insert into blog (title, content) values("' + body.title + '","' + body.content + '")';
        connection.query(insertBlogQuery , function(err, rows){
            if(err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });


    }


};
