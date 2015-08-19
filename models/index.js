var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripPlanner');
mongoose.Promise = require('bluebird');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Place,
	Hotel,
	Activity,
	Restaurant;
var Schema = mongoose.Schema;

var placeSchema = new Schema ({
	address: {type: String, required: true},
	city: {type: String, required: true},
	state: {type: String, required: true},
	phone: {type: String, required: true},
	location: {lat: Number, lon: Number}
});

var hotelSchema = new Schema ({
	name: {type: String, required: true},
	place: {type: mongoose.Schema.Types, ref: 'Place'},
	numStars: {type: Number, max: 5, min: 1},
	amenities: {type: String},
});

var activitySchema = new Schema ({
	name: {type: String, required: true},
	place: {type: mongoose.Schema.Types, ref: 'Place'},
	ageRange: {type: String}
});

var restaurantSchema = new Schema ({
	name: {type: String, required: true},
	place: {type: mongoose.Schema.Types, ref: 'Place'},
	cuisines: {type: String},
	price: {type: Number, max: 5, min: 1}
});

var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
};