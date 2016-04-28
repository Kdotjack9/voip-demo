var express = require('express');
var router = express.Router();
var request = require('request');

var data = require('../modules/data.js');

var users = data.getUsers();

router.post('/customerCall', function(req, res, next) {
    var incomingData = req.body;
    var username = incomingData.username;

    var user = null;
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            user = users[i];
            break;
        }
    }

    var postForSessionData = buildSessionJson(user, false, "sip:csagent@10.0.0.49");

    getSession(postForSessionData, res);
});

router.post('/agentCall', function(req, res, next) {
    var incomingData = req.body;
    var username = incomingData.username;

    var user = null;
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            user = users[i];
            break;
        }
    }

    var postForSessionData = buildSessionJson (user, true, null);


    getSession(postForSessionData, res);
});

var buildSessionJson = function (user, inboundCallingEnabled, allowedOutboundDestination) {
    var sessionJson = {
        "webAppId": "davidEppenbergerWebappId0123",
        "timeout": 1,
        "allowedOrigins": ["10.0.0.49"],
        "urlSchemeDetails": {
            "secure": true,
            "host": "10.0.0.49",
            "port": "8443"
        },
        "voice": {
            "username": user.username,
            "domain": "10.0.0.49",
            "inboundCallingEnabled": inboundCallingEnabled,
            "auth": {
                "username": user.username,
                "password": user.password,
                "realm": "10.0.0.49"
            }
        }
    };

    if(allowedOutboundDestination){
        sessionJson.voice.allowedOutboundDestination = allowedOutboundDestination;
    }

    return sessionJson;
};

var getSession = function(postForSessionData, res) {
    request.post("http://10.0.0.49:8080/gateway/sessions/session",
        {json: postForSessionData},
        function(error, response, body){
            if(!error && response.statusCode == 200){
                console.log(body);
                res.status(200).send(body);
            }
        }
    );
};


module.exports = router;