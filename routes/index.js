var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var models = require('../models');
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
var bodyParser = require('body-parser');


router.post('/', function(req, res, next) {
	console.log(req.body.start);
	res.redirect('/map');
});

router.get('/', function(req, res, next) {
   // var obj = {};
   // var queries = [Hotel.find().exec(), Activity.find().exec(), Restaurant.find().exec()];
   // Promise.all(queries)
   // .then(function(data){
   // 	res.render("index", {hotels: data[0], activities: data[1], restaurants: data[2]});
   // });
   res.render("landing");
});

router.get('/map', function(req, res, next) {
   var obj = {};
   var queries = [Hotel.find().exec(), Activity.find().exec(), Restaurant.find().exec()];
   Promise.all(queries)
      .then(function(data) {
         res.render("map", {
            hotels: data[0],
            activities: data[1],
            restaurants: data[2]
         });
      });
});
router.get('/contact', function(req, res, next) {
	res.render('contact');
});
router.get('/about', function(req, res, next) {
	res.render('about');
});
module.exports = router;
