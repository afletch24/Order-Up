var express = require("express");
var orders = require("../models/orderUp.js");

var router = express.Router();

// router.get("/", function(req, res) {
//   res.redirect("/orders");
// });

router.get("/", function(req, res){
  orders.all(function(data){
    res.render("index", {orderUp: data});
    console.log("index" + data);
  });
  
});

router.post("/orders/create", function(req, res) {
  orders.create([
    "order", "ready"
  ],[
    req.body.order, req.body.ready
  ], 
    function(){
      res.redirect("/");
  });
  console.log("/orders/create" + result); 
});

router.put("/:id", function(req, res) {
  var condition= "id= " + req.parmas.id;
  console.log(condition);
  orders.update({
    ready: req.body.ready
  },
  condition, function(){
    res.redirect("/");
  });  
});

module.exports = router;