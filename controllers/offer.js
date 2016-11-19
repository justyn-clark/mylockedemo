
// var url = require('url');
//
// var Default = require('./DefaultService');
//
//var Offer  = require('../models/Offer');
'use strict';

module.exports.controller = function(app) {
    app.get('/offer', function(req, res) {  // When user requests offer page
        res.render('offer/offer', {           // Render offer page
        });
    });
};



// (function(root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         // AMD. Register as an anonymous module.
//         define(['ApiClient', 'models/Offer'], factory);
//     } else if (typeof module === 'object' && module.exports) {
//         // CommonJS-like environments that support module.exports, like Node.
//         module.exports = factory(require('../ApiClient'), require('../models/Offer'));
//     } else {
//         // Browser globals (root is window)
//         if (!root.Offer) {
//             root.Offer = {};
//         }
//         root.Offer.DefaultApi = factory(root.Offer.ApiClient, root.Offer.Offer);
//     }
// }(this, function(ApiClient, Offer) {
//     'use strict';
//
//     /**
//      * Default service.
//      * @module api/DefaultApi
//      * @version 0.0.0
//      */
//
//     /**
//      * Constructs a new DefaultApi.
//      * @alias module:api/DefaultApi
//      * @class
//      * @param {module:ApiClient} apiClient Optional API client implementation to use,
//      * default to {@link module:ApiClient#instance} if unspecified.
//      */
//     var exports = function(apiClient) {
//         this.apiClient = apiClient || ApiClient.instance;
//
//
//         /**
//          * Callback function to receive the result of the offerPost operation.
//          * @callback module:api/DefaultApi~offerPostCallback
//          * @param {String} error Error message, if any.
//          * @param data This operation does not return a value.
//          * @param {String} response The complete HTTP response.
//          */
//
//         /**
//          * Create a new offer
//          * @param {module:api/DefaultApi~offerPostCallback} callback The callback function, accepting three arguments: error, data, response
//          */
//         this.offerPost = function(callback) {
//             var postBody = null;
//
//
//             var pathParams = {
//             };
//             var queryParams = {
//             };
//             var headerParams = {
//             };
//             var formParams = {
//             };
//
//             var authNames = [];
//             var contentTypes = [];
//             var accepts = [];
//             var returnType = null;
//
//             return this.apiClient.callApi(
//                 '/offer', 'POST',
//                 pathParams, queryParams, headerParams, formParams, postBody,
//                 authNames, contentTypes, accepts, returnType, callback
//             );
//         }
//
//         /**
//          * Callback function to receive the result of the offeridDelete operation.
//          * @callback module:api/DefaultApi~offeridDeleteCallback
//          * @param {String} error Error message, if any.
//          * @param data This operation does not return a value.
//          * @param {String} response The complete HTTP response.
//          */
//
//         /**
//          * Delete an Offer
//          * Delete an Offer
//          * @param {module:api/DefaultApi~offeridDeleteCallback} callback The callback function, accepting three arguments: error, data, response
//          */
//         this.offeridDelete = function(callback) {
//             var postBody = null;
//
//
//             var pathParams = {
//             };
//             var queryParams = {
//             };
//             var headerParams = {
//             };
//             var formParams = {
//             };
//
//             var authNames = [];
//             var contentTypes = [];
//             var accepts = [];
//             var returnType = null;
//
//             return this.apiClient.callApi(
//                 '/offer/:id', 'DELETE',
//                 pathParams, queryParams, headerParams, formParams, postBody,
//                 authNames, contentTypes, accepts, returnType, callback
//             );
//         }
//
//         /**
//          * Callback function to receive the result of the offerslimitGet operation.
//          * @callback module:api/DefaultApi~offerslimitGetCallback
//          * @param {String} error Error message, if any.
//          * @param {Array.<module:model/Offer>} data The data returned by the service call.
//          * @param {String} response The complete HTTP response.
//          */
//
//         /**
//          * Retrieve a list of offers with optional limit
//          * List all offers Optional query param of **size** determines size of returned array
//          * @param {module:api/DefaultApi~offerslimitGetCallback} callback The callback function, accepting three arguments: error, data, response
//          * data is of type: {@link Array.<module:model/Offer>}
//          */
//         this.offerslimitGet = function(callback) {
//             var postBody = null;
//
//
//             var pathParams = {
//             };
//             var queryParams = {
//             };
//             var headerParams = {
//             };
//             var formParams = {
//             };
//
//             var authNames = [];
//             var contentTypes = [];
//             var accepts = [];
//             var returnType = [Offer];
//
//             return this.apiClient.callApi(
//                 '/offers/:limit', 'GET',
//                 pathParams, queryParams, headerParams, formParams, postBody,
//                 authNames, contentTypes, accepts, returnType, callback
//             );
//         }
//     };
//
//     return exports;
// }));
