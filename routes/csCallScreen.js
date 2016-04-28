var express = require('express');
var router = express.Router();

var data = require('../modules/data.js');

var users = data.getUsers();

router.get('/', function(req, res, next) {
    var username = req.session.username;
    var userDetails = null;
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            userDetails = users[i];
            break;
        }
    }

    if(!userDetails) {
        res.redirect("/login");
    } else {
        if(userDetails.type !== "agent"){
            res.redirect("/orders")
        } else {
            res.render('csCallScreen', {'user': username});
        }

    }


});

module.exports = router;
