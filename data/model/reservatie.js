const mongoose = require("mongoose");
let reservatiaSchema = require("../schema/reservatie");
let Reservatie = mongoose.model('Reservatie',reservatiaSchema,'reservaties');

Reservatie.addReservatie = function(values,callback){
    Reservatie.create(values,function(err,result){
        if(err) callback(err,null);
        callback(null,result);
    });
};

Reservatie.getReservatie = function(callback){
    Reservatie.find({}).exec(function(err,result){
        if(err) callback(err,null);
        callback(null,result);
    });
};

module.exports = Reservatie;