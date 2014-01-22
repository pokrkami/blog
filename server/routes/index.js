//ルーティング設定

exports.init = function(app){
    var routes = require('../../routes');
    var user = require('../../routes/user');
    //ルーター
    app.get('/', routes.index);
    app.get('/users', user.list);

};

