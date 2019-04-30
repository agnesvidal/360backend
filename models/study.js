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
var studySchema = new Schema({
        scenarioId:{type:mongoose.Schema.Types.ObjectId,ref:'Scenario'},
        name:String,
        description:String,
        participiantsN:Number,
        created:{type: Date, default: Date.now}
    }
);
module.exports = mongoose.model('Study',studySchema);