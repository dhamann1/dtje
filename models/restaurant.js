var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var users = require('./user');

var noteSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User'}
});

var restaurantSchema = new Schema({
  yelpId: String,
  name: String,
  image: String,
  price: String, 
  address: String,
  categories: [String],
  rating: Number,
  reviewCount: Number,
  coordinates: {},
  notes: [noteSchema]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
