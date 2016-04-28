var exports = module.exports = {};

var orderDetails = {"dfen8c": [{"orderId" : "1", "items" : [{"itemName": "Fusion Core, 1.21GW", "quantity" : "1", "price": "8999.99"},
    {"itemName": "Capacitor, Flux, replacement coil", "quantity" : "3", "price": "2999.99"},
    {"itemName": "Automotive Fuel Injector", "quantity" : "1", "price": "299.99"}]},
    {"orderId" : "2", "items" : [{"itemName": "Thermal Fission Battery 18650", "quantity" : "200", "price": "2999.99"},
        {"itemName": "Emitter module assembly, 2000W", "quantity" : "100", "price": "499.99"},
        {"itemName": "Focusing Diode, 2000W", "quantity" : "100", "price": "99.99"},
        {"itemName": "Laser Housing Assembly", "quantity" : "100", "price": "15.99"}]},
    {"orderId" : "3", "items" : [{"itemName": "Distilled Water, 1 liter bottle", "quantity" : "35", "price": ".99"},
        {"itemName": "Pure Carbon, 1kg bag", "quantity" : "20", "price": "1.99"},
        {"itemName": "Ammonia, 1 liter bottle", "quantity" : "4", "price": "3.49"},
        {"itemName": "Lime, 500g bag", "quantity" : "3", "price": "4.99"},
        {"itemName": "Phosphorous, 100g bag", "quantity" : "8", "price": "1.99"},
        {"itemName": "Salt, 250g tub", "quantity" : "1", "price": ".99"},
        {"itemName": "Saltpeter, 100g bag", "quantity" : "1", "price": "2.49"},
        {"itemName": "Pure Sulfer, 80g package", "quantity" : "1", "price": ".99"},
        {"itemName": "Fluroine, 7.5g sample", "quantity" : "1", "price": "9.99"},
        {"itemName": "Iron Filings, 5g bag", "quantity" : "1", "price": ".99"},
        {"itemName": "Pure Silicon Pellets, 3g container", "quantity" : "1", "price": ".99"},
        {"itemName": "Bucket of 15 trace elements", "quantity" : "1", "price": "14.99"}]},
    {"orderId" : "4", "items" : [{"itemName": "Anti-Hydrogen, .5g in magnetic vaccuum bottle", "quantity" : "100", "price": "15999.99"},
        {"itemName": "Hydrogen, .5g vial", "quantity" : "100", "price": "5.99"}]}
]};

var users = [{"username": "dfen8c", "password": "password", "type": "customer"},
    {"username": "csagent", "password": "password", "type": "agent"}];

exports.getOrderDetails = function() {
    return orderDetails;
};

exports.getUsers = function(){
    return users;
};