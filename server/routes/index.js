//ルーティング設定

exports.init = function(app){
    var controller = require('../controller');
    var userCotroller = require('../controller/userList');
    //ルーター
    app.get('/', controller.index);
    //console.log(controller.index);
    app.get('/users', userCotroller.userList);

};

