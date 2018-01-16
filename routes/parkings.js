var express = require("express");
var router = express.Router();
var request = require('request');
var Reservatie = require("../data/model/reservatie");

//router.get
router.get('/', function (req, res) {
    request.get("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json",
        function (error, response, body) {
            var parkings = JSON.parse(body);
            res.render("parkings/index", {
                parking: parkings
            });
        });
});

router.get("/reservatie",function(req,res,next){
    request.get("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json",
        function (error, response, body) {
            var parkings = JSON.parse(body);
            res.render("parkings/reservatie", {
                parking: parkings
            });
            
        });
});

router.post('/savereservatie',function(req,res,next){
    let values = {};
    values.name = req.body.name;
    values.email = req.body.email;
    values.parkingId = req.body.parkeerplaats;
    Reservatie.addReservatie(values,function(err,resultres){
        if(err) console.error(err);

        res.redirect('/parkings');
    });
});

router.get('/reservaties', function(req,res,next){
    Reservatie.getReservatie(function(err,result){
        if(err) console.error(err);
        res.render("parkings/overview",{
            reservaties : result
        });
    });
});


module.exports = router;