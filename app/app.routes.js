/**
 * Created by Amit on 9/19/2015.
 */
'use strict';
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Bussiness', {
        templateUrl: 'app/components/business/orders.html',
        controller: 'businessCtrl',
        activeTab: 'My Passion'
    })
        .when('/Customers', {
            templateUrl: 'app/components/customers/restaurants.html',
            controller: 'customersCtrl',
            activeTab: 'About'
        })
        .otherwise({redirectTo: '/Customers'})
    ;
}]);