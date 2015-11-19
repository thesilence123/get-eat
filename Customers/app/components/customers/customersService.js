/**
 * Created by Amit on 11/15/2015.
 */
'use strict';

myApp.factory('customersService', function($http, SITE_URL) {

    return {
        getCustomerDetails: function() {
            //return the promise directly.
            return $http.get(SITE_URL + '/api/customers')
                .then(function(result) {
                    return result.data;
                });
        },
        postOrder: function(data) {
            return $http.post(SITE_URL + '/api/orders', data);
        }
    }
});