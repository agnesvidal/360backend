/**
 * Created by asoadmin on 2018-11-26.
 */
/**
 * Created by asoadmin on 2018-07-11.
 */

/* Model Student contain information about the student */
var mongoose = require('mongoose'),Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

/*define schema for mapping structure in mongodb */
var userSchema = new Schema({
        name:String,
        email:String,
        password:String
    }
);
module.exports = mongoose.model('User',userSchema);