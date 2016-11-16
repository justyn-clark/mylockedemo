'use strict';

//var passportConf  = require('../config/passport');  // New dependency

module.exports.controller = function(app) {
    app.get('/offer', function(req, res) {  // When user requests offer page
        res.render('offer/offer', {           // Render Offer page
        });
    });
};
