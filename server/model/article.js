/**
 * Created with JetBrains WebStorm.
 * User: taka
 * Date: 2014/02/02
 * Time: 18:03
 * To change this template use File | Settings | File Templates.
 */

//DB設定
var mysql = require('../config/db');
var connection = mysql.dbConect.blog();
var helper = require('../util/helper');

var article = {};

article = {


    /** get all articles from DB
     *  @to do
     *  to enable to set limit
     *
     * @param req
     * @param res
     * @param callback
     */
    getAllArticle : function(req , res , callback){
        var obj = {};
        var queryStr = 'select * from blog ';
        connection.query(queryStr, [ new Date() ], function(err, rows) {
            if(err) {
                console.log(err);
            } else {
                var tagQuery = 'select tags , blog_id from tags';

                connection.query(tagQuery, [ new Date() ], function(err, tags) {
                    if(err) {
                        console.log(err);
                    }else{
                        for(var i = 0; i < tags.length; i++ ){
                            for(var k = 0; i < rows.length; k++){
                                if(rows[k].id === tags[i].blog_id){
                                    rows[k].tags = tags[i].tags;
                                    break;
                                }
                            }
                        }
                    }
                    callback(rows);
                })

            }
        });
    },

    /** post the article
     *
     * @param req
     * @param res
     */
    post : function(req , res , callback){

        var body = req.body;

        var dateTime = helper.makeNowDateTime();

        insertBlogQuery = 'insert into blog (title, content , create_time ,update_time) values("' + body.title + '","' + body.content + '","' + dateTime + '","' + dateTime + '")';

        connection.query(insertBlogQuery , function(err, rows){
            if(err) {
                console.log(err);
            } else {
                if(body.tags){
                    console.log(debug(body.tags));
                    var tags = body.tags.replace(/,/g , '\/n');
                    console.log(debug(tags));
                    var insertTagQuery = 'insert into tags (blog_id, tags , create_time ,update_time) values("' + rows.insertId + '","'+ tags + '","' + dateTime + '","' + dateTime + '")';
                    connection.query(insertTagQuery , function(err, rows){
                        if(err) {
                            console.log(err);
                        } else {
                            callback()
                        }
                    });
                }else{
                    callback();
                }

            }
        });

    }

};


module.exports = article;