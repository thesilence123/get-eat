/**
 * Created by Amit on 9/19/2015.
 */
'use strict';
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl:'index.html',
        controller: 'MainCtrl'
    }).when('/all', {
        templateUrl: 'app/components/customers/templates/all_restaurants_2.html',
        controller: 'AllRestaurantsCtrl'
    }).when('/pizza', {
        templateUrl: 'app/components/customers/templates/pizza_restaurants.html',
        controller: 'PizzaRestaurantsCtrl'
    }).when('/hummus', {
        templateUrl: 'app/components/customers/templates/hummus_restaurants.html',
        controller: 'HummusRestaurantsCtrl'
    }).when('/falafel', {
        templateUrl: 'app/components/customers/templates/falafel_restaurants.html',
        controller: 'FalafelRestaurantsCtrl'
    }).when('/shawarma', {
        templateUrl: 'app/components/customers/templates/shawarma_restaurants.html',
        controller: 'ShawarmaRestaurantsCtrl'
    }).otherwise({redirectTo: '/all'});
}]);