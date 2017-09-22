var orm = require("../config/orm.js");

var foodOrders = {
    all: function(cb){
        orm.all("orderUp", function(res){
            cb(res);
        });
    },

    create: function(name, cb){
        orm.create("orderUp", [
            "order_name", "ready"
        ],[
            name, false
        ], cb);
    },

    update: function(id, cb){
        var condition = "id=" + id;
        orm.update("orderUp", {
           ready: true
        }, condition, cb);
    }
};

module.exports = foodOrders; 