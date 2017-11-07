var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}


var orm = {
    all: function(tableInput, cb){
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    create: function(table, cols, vals, cb){
        var querystring = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";
    
        connection.query(querystring, vals, function(err, result){         
            if (err) {
                throw err;
            }
            cb(result);
            console.log(result);
        });
    },

    update: function (table, objColVals, condition, cb){
        var query = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });   
    }
};

module.exports = orm;