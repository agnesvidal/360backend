/**
 * Created by asoadmin on 2018-11-26.
 */
/**
 * Created by asoadmin on 2018-07-11.
 */
var mongoose = require('mongoose');
var db = {
    db: '360Video',
    host: 'localhost',
    port: 27017,
    username: 'admin',
    password: 'admin360'
};
var dbUrl = 'mongodb://';
dbUrl += db.username + ':' + db.password + '@';
dbUrl += db.host + ':' + db.port;
dbUrl += '/' + db.db;
mongoose.connect(dbUrl, { useNewUrlParser: true });