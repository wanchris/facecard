var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var cuecardSchema = mongoose.Schema({
    _id: Number,
    id: Number,
    question: String,
    answer: String,
    rating: Number,
    lastAccessed: String,
});

module.exports = mongoose.model('Cuecard', cuecardSchema);
