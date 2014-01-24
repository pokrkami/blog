
/*
 * GET users listing.
 */

exports.userList = function(req, res){
    res.render('index', { title: 'users' });
};

//exports.userList = function(req, res){
//    res.render('user', { title: 'user' });
////    res.send("respond with a resource");
//};