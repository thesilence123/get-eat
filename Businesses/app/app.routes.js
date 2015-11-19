/**
 * Created by Amit on 9/19/2015.
 */
'use strict';
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/businesses', {
        templateUrl: 'app/components/business/orders.html',
        controller: 'businessCtrl'
    })
        .otherwise({redirectTo: '/businesses'})
    ;
}]);