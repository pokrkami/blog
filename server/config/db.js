
exports.dbConect = {

    blog : function(){

        var mysql = require('mysql');
        //ローカル環境
        var connStr = 'mysql://root@localhost/blog';
        return connection = mysql.createConnection(connStr);

    }

};
