var express = require('express');
var router = express.Router();

var data = require('../modules/data.js');

var users = data.getUsers();

router.get('/', function(req, res, next){
    res.render('login')
});

router.post('/', function(req, res, next) {
    var input = req.body;
    var username = input.username;
    var password = input.password
    var foundUser = null;

    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            foundUser = users[i];
            break;
        }
    }

    if(!foundUser){
        res.redirect("https://localhost:3000/login");
    } else {
        if(password !== foundUser.password){
            res.redirect("https://localhost:3000/login");
        } else {
            req.session.username = username;
            if(foundUser.type === "customer") {
                res.redirect("/orders");
            } else if( foundUser.type === "agent") {
                res.redirect("/csCallScreen");
            }
        }
    }
});

module.exports = router;