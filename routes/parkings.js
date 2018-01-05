var express = require("express");
var router = express.Router();
var request = require('request');

//router.get
router.get('/', function(req,res){
    request.get("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json",
function(error,response,body){
    var parkings = JSON.parse(body);
    res.render("parkings/index", {parking: parkings});
});
});

module.exports = router;