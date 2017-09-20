var orm = require("../config/orm.js");

var foodOrders = {
    selectAll: function(cb){
        orm.selectAll("orderUp", function(res){
            cb(res);
        });
    },

    insertOne: function(){
        orm.insertOne("orderUp", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(){
        orm.updateOne("orderUp", objColVals, condition, function(){
            cb(res);
        });
    }
};

module.exports = foodOrders; 