
/**
 * Offer
 */

/**
 * Module Dependencies
 */

var mongoose = require('mongoose');


var offerSchema = new mongoose.Schema({
    id: String,
    name: String,
    amount: Number,
    maximumRides: Number
});




module.exports = mongoose.model('Offer', offerSchema);
