/**
 * Created by Amit on 11/15/2015.
 */
'use strict';

myApp.factory('businessService', function($http, SITE_URL) {
    var translationDictionary = {
        "time": "שעה",
        "name": "מנה",
        "notes": "הערות",
        "address": "כתובת",
        "phone": "טלפון"
    };

    function translateOrders(orders) {
        var hebrewVersion = [];

        angular.forEach(orders, function (order, index) {
            var currentOrder = {};
            angular.forEach(order, function (value, property) {
                currentOrder[translationDictionary[property]] = value;
            });
            hebrewVersion.push(currentOrder);
        });
        return hebrewVersion;
    }

    return {
        getColumns: function() {
            var columns = [];
            angular.forEach(translationDictionary, function(hebrewName, englishName) {
                columns.push(hebrewName)
            });
            return columns;
        },
        getOrders: function() {
            //return the promise directly.
            return $http.get(SITE_URL + '/api/orders')
                .then(function(result) {
                    //resolve the promise as the data
                    var orders = result.data;
                    var hebrewVersion = translateOrders(orders);
                    return hebrewVersion;
                });
        }
    }
});