'use strict';


var mongoose = require('mongoose');

// connect to mongoDB
mongoose.connect('mongodb://justynclark:password@ds153677.mlab.com:53677/db_mylucke');

// open the connection
var db = mongoose.connection;
db.once('open', function () {
    console.log('Connected to db');
});
db.on('error', console.error.bind(console, 'connection error'));

// get the shema
var Schema = mongoose.Schema;
// create the epmSchema and define the atrs
var empSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    city: String,
    mobile: Number,
    other: {
        designation: String,
        email: {type: String, required: true}
    }
});

// create model
var Employee = mongoose.model('employee', empSchema);

// export the model
module.exports = Employee;