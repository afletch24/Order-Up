var express = require("express");
var orders = require("../models/orderUp.js");

var router = express.Router();

router.get("/", function(req, res) {
  orders.all(function(data){
    res.render("index", {order_data: data});
  });
});

router.post("/orders/create", function(req, res) {
  orders.create(req.body.order, function(result) {
  });
  res.redirect("/");
});


router.put("/orders/update", function(req, res) {
  orders.update(req.body.ready, function(result) {
    console.log("result");  
  });
  res.redirect("/");
});


router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  orders.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;