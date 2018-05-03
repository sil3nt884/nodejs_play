var express = require('express');
var router = express.Router();
var OrderList = require("../objects/OrderList");
var Order = require("../objects/Order");

/* GET home page. */
router.get('/', function(req, res, next) {
    //console.log(res.data);
    //var orderList = new OrderList();
    //var order = new Order();
    var box  = {
        boxPrice : 0,
        boxItem : 0
    }

    res.render('index', box);
});



router.post('/addOrder', function(req, res, next) {
   var formData = req.body;
   var height = formData.height;
   var width = formData.width;
   var lenght = formData.length;
   var quantity = formData.quantity;
   var cardGrade = formData.cardgrade;
   var orderList = new OrderList();
    console.log(orderList);
    var bos =  new Order(cardGrade, height, lenght, width, quantity, false, false, false, false, false, orderList);
   console.log(bos);
    var box  = {
        boxPrice :0,
        boxItem : 0
    }

   // res.render('index', box);
});

module.exports = router;
