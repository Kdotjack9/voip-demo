var express = require('express');
var router = express.Router();

var data = require('../modules/data.js');

var orderDetails = data.getOrderDetails();

router.get('/:orderId', function(req, res, next) {
    var user = req.session.username;
    if(!orderDetails[user]){
        res.redirect("https://localhost:3000/login");
    }
    var orderDetail = orderDetails[user];
    var orderId = req.params.orderId;
    if(!orderId){
        res.redirect("https://localhost:3000/orders");
    }

    var order = null;
    for(var i = 0; i < orderDetail.length; i++){
        if(orderDetail[i].orderId === orderId){
            order = orderDetail[i];
        }
    }

    res.render('returns', {'order': order, 'user': user});
});

router.post('/csCall', function(req, res, next) {
    var incomingData = req.body;
    var username = incomingData.username;

    var user = null;
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            user = users[i];
            break;
        }
    }

    var postForSessionData = {
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
            "inboundCallingEnabled": false,
            "allowedOutboundDestination": "sip:csagent@10.0.0.49",
            "auth": {
                "username": user.username,
                "password": user.password,
                "realm": "10.0.0.49"
            }
        }
    };

    request.post("http://10.0.0.49:8080/gateway/sessions/session",
        {json: postForSessionData},
        function(error, response, body){
            if(!error && response.statusCode == 200){
                console.log(body);
                res.status(200).send(body);
            }
        }
    );
});

module.exports = router;