

/* Model Student contain information about the student */
var mongoose = require('mongoose'),Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

/*define schema for mapping structure in mongodb */
var hotspotSchema = new Schema({
        scenarioId:{type:mongoose.Schema.Types.ObjectId,ref:'Scenario'},
        studyId:{type:mongoose.Schema.Types.ObjectId,ref:'Study'},
        groupName:String,
        questionName:String,
        questionId:String,
        questionType:String,
        action:String,
        evaluation:{correct:Boolean,answer:String},
        timeline:Number,
        timestamp:{type: Date, default: Date.now}

    }
);
module.exports = mongoose.model('HotspotInteractions',hotspotSchema);