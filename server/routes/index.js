//ルーティング設定

exports.init = function(app){
    var blogContlPath = require('../controller/blog');


    //ルーター
    app.get('/', blogContlPath.blogController.top);
    app.get('/login', blogContlPath.blogController.login);
    app.get('/mypage', blogContlPath.blogController.myPage);
    app.get('/about', blogContlPath.blogController.about);
    app.get('/article/:id', blogContlPath.blogController.articleDetail);


    //API
    app.post('/json/postBlog', blogContlPath.blogController.postBlog);
    app.post('/api/login', blogContlPath.blogController.doLogin);




};

