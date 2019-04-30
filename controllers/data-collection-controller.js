/**
 * Created by asoadmin on 2018-11-26.
 */
var Camera = require('../models/cameraMovements.js');
var Hotspots = require('../models/hotspotInteractions.js');
var VideoControls = require('../models/videoControls.js');

/**
 * SAVE CAMERA MOVEMENTS DATA
 * @param scenarioId
 * @param studyId
 * @param groupName
 * @param pitch
 * @param yaw
 * @param mouseCords
 * @param timeline
 * @param callback
 */
exports.addCameraData = function (scenarioId,studyId,groupName,pitch,yaw,mouseCords,timeline,callback) {

    var cameraData = new Camera({scenarioId:scenarioId,studyId:studyId,groupName:groupName,pitch:pitch,yaw:yaw,mouseCords:mouseCords,timeline:timeline});

    cameraData.save(function(err,result){

       if(!err) callback({result:result});
       else callback({result:"Error"});
    });
};


/**
 * SAVE HOTSPOTS INTERACTION DATA
 * @param scenarioId
 * @param studyId
 * @param groupName
 * @param questionName
 * @param questionId
 * @param action
 * @param evaluation
 * @param timeline
 * @param callback
 */
exports.addHotspotsData = function (scenarioId,studyId,groupName,questionName,questionId,questionType,action,evaluation,timeline,callback) {

    if(evaluation.correct==="none"){
        evaluation.correct = false;
    }

    var hotspotsData = new Hotspots({scenarioId:scenarioId,studyId:studyId,groupName:groupName,questionName:questionName,questionId:questionId,questionType:questionType,action:action,evaluation:evaluation,timeline:timeline});

    hotspotsData.save(function(err,result){

        if(!err) callback({result:result});
        else
        {
            console.log(err);
            callback({result:"Error"});}
    });
};

/**
 * SAVE VIDEO CONTROLS DATA
 * @param scenarioId
 * @param studyId
 * @param groupName
 * @param action
 * @param timeline
 * @param callback
 */
exports.addVideoControlsData = function (scenarioId,studyId,groupName,action,timeline,callback) {

    var videoControlData = new VideoControls({scenarioId:scenarioId,studyId:studyId,groupName:groupName,action:action,timeline:timeline});

    videoControlData.save(function(err,result){

        if(!err) callback({result:result});
        else
        {console.log(err);
            callback({result:"Error"});}
    });
};
