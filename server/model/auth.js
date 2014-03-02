/**
 * Created with JetBrains WebStorm.
 * User: taka
 * Date: 2014/02/16
 * Time: 10:01
 * To change this template use File | Settings | File Templates.
 */



//DB設定
var mysql = require('../config/db');
var connection = mysql.dbConect.blog();
var helper = require('../util/helper');

var auth = {};

auth = {

    login : function(req , res , callback){

        if(req.session.flg){
            res.redirect('/mypage')
        }

        var body = req.body;

        var dateTime = helper.makeNowDateTime();

        var checkUserQuery = 'select * from user where user_name ="' + body.id + '"';
        connection.query(checkUserQuery , function(err, rows){
            if(err) {
                console.log(err);
            } else {
                if(body.pass === rows[0].password){
                  req.session.flg = true;
                  callback();
                }

            }
        });

    },

    checkCookie : function(){

    }


};

module.exports = auth;