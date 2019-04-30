/**
 * Created by asoadmin on 2018-11-26.
 */

var Scenario = require('../models/scenario.js');
var Study = require('../models/study.js');

var mongoose =require('mongoose');

/**
 * CREATE SCENARIO
 * @param name
 * @param description
 */
exports.createScenario = function (name,description,callback) {

    var newScenario = new Scenario({name:name,description:description});

    newScenario.save(function (err,scenario) {
        if (!err) callback({result:scenario});
        else {
            callback({result:"Error"});
        }
    });
};

/**
 * GET ALL SCENARIOS
 * @param callback
 */
exports.getScenarios = function (callback) {

    Scenario.find({},function (err,scenarios) {
        if (!err) callback({result:scenarios});
        else {
            callback({result:"Error"});
        }
    });
};

/**
 * CREATE STUDY
 * @param name
 * @param description
 * @param participiantsN
 * @param callback
 */
exports.createStudy = function (scenarioId,name, description, participiantsN,callback ) {
    var newStudy = new Study({scenarioId:mongoose.Types.ObjectId(scenarioId.toString()),name:name,description:description,participiantsN:participiantsN});

    newStudy.save(function (err,study) {
        if (!err) callback({result:study});
        else {
            callback({result:"Error"});
        }
    });
};


/**
 * GET STUDIES FOR SCENARIO
 * @param name
 * @param description
 * @param participiantsN
 * @param callback
 */
exports.getStudiesByScenarioId = function (scenarioId,callback ) {
    Study.find({scenarioId:mongoose.Types.ObjectId(scenarioId.toString())},function (err,scenarios) {
        if (!err) callback({result:scenarios});
        else {
            callback({result:"Error"});
        }
    });
};