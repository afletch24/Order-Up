var orm = require("../config/orm.js");

var foodOrders = {
    all: function(cb){
        orm.all("order_up", function(res){
            cb(res);
        });
    },

    create: function(name, cb){
        orm.create("order_up", [
            `foodorder`, `ready` 
        ],[
            name, false
        ], cb);
    },

    update: function(id, cb){
        var condition = "id=" + id;
        orm.update("order_up", {
           ready: true
        }, condition, cb);
    }
};

module.exports = foodOrders; 