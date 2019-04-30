var express = require('express');
var router = express.Router();

var scenarioStudyCtrl = require('../controllers/scenario-study-controller.js');
var dataCollectionCtrl = require('../controllers/data-collection-controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '360 Video Project' });
});

/* AUTHENTIFICATION */
router.get('/login', function(req, res, next) {

    res.send({result:"OK"});
});






/************************DATA COLLECTION API***************************************************/


/**
 * SAVE CAEMRA MOVEMENTS INTERACTIONS
 */
router.post('/data/camera-movements', function(req, res, next) {
    var scenarioId = req.body.scenarioId;
    var studyId = req.body.studyId;
    var groupName = req.body.groupName;
    var pitch = req.body.pitch;
    var yaw = req.body.yaw;
    var mouseCords = req.body.mouseCords;
    var timeline = req.body.timeline;

    dataCollectionCtrl.addCameraData(scenarioId,studyId,groupName,pitch,yaw,{x:req.body['mouseCords[x]'],y:req.body['mouseCords[y]']},timeline,function(result){
        res.send(result);
    })


});


/**
 * SAVE HOTSPOTS INTERACTIONS
 */
router.post('/data/hotspots-interactions', function(req, res, next) {

    console.log(req.body);
    var scenarioId = req.body.scenarioId;
    var studyId = req.body.studyId;
    var groupName = req.body.groupName;
    var questionName = req.body.questionName;
    var questionId = req.body.questionId;
    var questionType = req.body.questionType;
    var action = req.body.action;
    var evaluation = {correct:req.body['evaluation[correct]'],answer:req.body['evaluation[answer]']};
    var timeline = req.body.timeline;

    dataCollectionCtrl.addHotspotsData(scenarioId,studyId,groupName,questionName,questionId,questionType,action,evaluation,timeline,function(result){
        res.send(result);
    })


});


/**
 * SAVE VIDEO CONTROLS INTERACTIONS
 */
router.post('/data/video-controls', function(req, res, next) {
    console.log(req.body);
    var scenarioId = req.body.scenarioId;
    var studyId = req.body.studyId;
    var groupName = req.body.groupName;
    var action = req.body.action;
    var timeline = req.body.timeline;

    dataCollectionCtrl.addVideoControlsData(scenarioId,studyId,groupName,action,timeline,function(result){
        res.send(result);
    })


});







/***************************SCENARIO AND STUDY API************************************************/

/**
 * ADD NEW SCENARIO
 */
router.post('/scenario/add', function(req, res, next) {
    var name = req.body.name;
    var description = req.body.description;

    scenarioStudyCtrl.createScenario(name,description,function (result) {
        res.send(result);
    });


});

/**
 * ADD NEW STUDY
 */
router.post('/scenario/add', function(req, res, next) {
    var name = req.body.name;
    var description = req.body.description;
    var scenarioId = req.body.scenarioId;
    var participiantsN = req.body.participiantsN;


    scenarioStudyCtrl.createStudy(scenarioId,name,description,participiantsN,function (result) {
        res.send(result);
    });


});

/**
 * GET ALL SCENARIOS
 */
router.post('/scenarios/all',function (req,res,next) {
    scenarioStudyCtrl.getScenarios(function (result) {
       res.send(result);
    });
});

/**
 * GET ALL STUDIES FOR SPECIFIC SCENARIO
 */
router.post('/studies/get',function (req,res,next) {
    var scenarioId = req.body.scenarioId;
    scenarioStudyCtrl.getStudiesByScenarioId(scenarioId,function (result) {
        res.send(result);
    });
});





module.exports = router;
