var express = require('express');
var router = express.Router();

var data = require('../modules/data.js');

var orderDetails = data.getOrderDetails();

router.get('/', function(req, res, next) {
    var user = req.session.username;
    if(!orderDetails[user]){
        res.redirect("https://localhost:3000/login");
    }
    var orderDetail = orderDetails[user];
    res.render('orders', {orders: orderDetail});
});

module.exports = router;