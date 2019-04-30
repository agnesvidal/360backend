/**
 * Created by asoadmin on 2018-11-26.
 */
/**
 * Created by asoadmin on 2018-11-26.
 */
/**
 * Created by asoadmin on 2018-11-26.
 */
/**
 * Created by asoadmin on 2018-07-11.
 */

/* Model Student contain information about the student */
var mongoose = require('mongoose'),Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

/*define schema for mapping structure in mongodb */
var scenarioSchema = new Schema({
        name:String,
        description:String,
        created:{type: Date, default: Date.now}
    }
);
module.exports = mongoose.model('Scenario',scenarioSchema);