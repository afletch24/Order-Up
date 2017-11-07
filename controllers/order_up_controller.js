var express = require("express");
var orders = require("../models/order_up.js");

var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/orders");
});

router.get("/orders", function(req, res){
  orders.all(function(data){
    res.render("index", {order_data: data});
  });
  
});

router.post("/orders/create", function(req, res) {
  orders.create( req.body.foodorder, function(result){
    res.redirect("/orders");
  });
});

router.put("/orders/update", function(req, res) {
  
  orders.update(req.body.order_id, function(result){
    res.redirect("/");
  });  
});

module.exports = router;