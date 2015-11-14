/**
 * Created by Amit on 9/19/2015.
 */
'use strict';
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Bussiness', {
        templateUrl: 'app/components/my passion/my passion.html',
        controller: 'techCtrl',
        activeTab: 'My Passion'
    })
        .when('/Customers', {
            templateUrl: 'app/components/about/about.html',
            controller: 'aboutCtrl',
            activeTab: 'About'
        })
        .otherwise({redirectTo: '/Customers'})
    ;
}]);