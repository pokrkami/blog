
/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('../routes');
//var user = require('./../routes/user');
var http = require('http');
var path = require('path');
var util = require('util');
var mysqlSession = require('connect-mysql-session')(express);

debug = function(target){
    return util.inspect(target);
};

var app = express();

// all environments


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.cookieParser());
app.use(express.session({
    store: new mysqlSession("blog", "root", "", {

    }),
    secret: "keyboard cat"
}));


app.use(app.router);
app.use(express.static(path.join(__dirname, '../public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}




//routing
var router = require('./routes/index');
router.init(app);



//初期設定
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
