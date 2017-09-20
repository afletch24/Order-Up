var express = require("express");
var orders = require("../models/orderUp.js");

var router = express.Router();

router.get("/", function(req, res) {
  orders.selectAll(function(data) {
    var hbsObject = {
      orderUp: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  orders.insertOne([
    "order", "ready"
  ], [
    req.body.order, req.body.ready
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  orders.updateOne({
    ready: req.body.ready
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  orders.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;