const mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    name:{ type: String},
    email: {type:String},
    parkingId:{type: String}
});