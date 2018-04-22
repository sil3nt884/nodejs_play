var express = require('express');
var  Boxtype1 = require("../objects/Boxtype1");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var box1 = new Boxtype1(20,20,20,1);
    box1.getCost(1);


  var box = {
    boxPrice : box1.getPrice(),
    boxItem : "No box "+box1.getPrice()
  };
  res.render('index', box);
});

module.exports = router;
