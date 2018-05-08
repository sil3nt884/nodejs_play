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
   var height = parseInt(formData.height);
   var width = parseInt(formData.width);
   var lenght = parseInt(formData.length);
   var quantity = parseInt(formData.quantity);
   var cardGrade =parseInt(formData.cardgrade);
   var colour = formData.Colour;
   var colour1 = false;
   var colour2 = false;
   var stabletops = formData.stabletops;
   var bottom =   formData.bottom;
   var concer = formData.concer;
   if(colour=="colour 1"){
       colour1 = true;
   }
   else if(colour == "colour 2"){
       colour1 = true;
       colour2 = true;

   }
   else if(colour=="No Colour"){
       colour1 = false;
       colour2 = false;
   }
   if(stabletops=="true" ) {
       stabletops = true;
   }
    if(bottom=="true") {
        bottom = true;
    }
    if(concer == "true"){
        concer = true;
    }

    if( stabletops == undefined){
        stabletops = false;
    }
    if( bottom == undefined){
        bottom = false;
    }
    if( concer == undefined){
        concer = false;
    }
   console.log(formData);
   console.log(cardGrade, height, lenght, width, quantity, colour1, colour2, bottom, stabletops, concer);
   //var orderList = new OrderList();
   var order =  new Order(cardGrade, height, lenght, width, quantity, true, false, false, true, false);
  // orderList.addOrders(cardGrade,  height, lenght, width,  quantity, false,  fasle, false, corner, add, this.valid);

    var box ={

        boxPrice : order.getAdd(),
        boxItem : order.getAdd()
    };
    //console.log("here.... 2 "+box.boxPrice);

   res.send(box);
});

module.exports = router;
