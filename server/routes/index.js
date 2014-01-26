//ルーティング設定

exports.init = function(app){
    var blogContlPath = require('../controller/blog');


    //ルーター
    app.get('/', blogContlPath.blogController.top);
    app.post('/json/postBlog', blogContlPath.blogController.postBlog);



};

