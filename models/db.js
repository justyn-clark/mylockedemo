var chalk = require('chalk');
var mongoose = require( 'mongoose' );

//var dbURI = 'mongodb://127.0.0.1/groceryDB';
var dbURI = 'mongodb://justynclark:password@ds153677.mlab.com:53677/db_mylucke';
//var dbURI =  'mongodb://edu:edu@ds015879.mlab.com:15879/edurekadb';
console.log("Establishing connection to the DB");

// ****** CONNECTIONS
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  'use strict';
  console.log(chalk.yellow('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error', function (err) {
    'use strict';
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
    'use strict';
  console.log(chalk.red('Mongoose disconnected'));
});

// ***** *******  *  *****   Schema defs

// var offerSchema = new mongoose.Schema({
//     id: String,
//     name: String,
//     amount: Number,
//     maximumRides: Number
// }, {collection: 'offers'});
//


var userSchema = new mongoose.Schema({
  username: {type: String, unique:true},
  email: {type: String, unique:true},
  password: {type: String, unique:true},
}, {collection: 'customers'});

var GroceryItemsSchema = new mongoose.Schema({
  key: {type: String, unique:true},
  offerName: {type: String},
  amount: {type: Number},
  maximumRides: {type: String}
}, {collection: 'offers'});

// register the User model
//mongoose.model( 'OfferModel', offerSchema);
mongoose.model( 'UserModel', userSchema);
mongoose.model( 'GroceryItemsModel', GroceryItemsSchema);
