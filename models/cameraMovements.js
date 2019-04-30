
/* Model Student contain information about the student */
var mongoose = require('mongoose'),Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

/*define schema for mapping structure in mongodb */
var cameraSchema = new Schema({
        scenarioId:{type:mongoose.Schema.Types.ObjectId,ref:'Scenario'},
        studyId:{type:mongoose.Schema.Types.ObjectId,ref:'Study'},
        groupName:String,
        pitch:Number,
        yaw:Number,
        mouseCords:{x:Number,y:Number},
        timeline:Number,
        timestamp:{type: Date, default: Date.now}

    }
);
module.exports = mongoose.model('Camera',cameraSchema);