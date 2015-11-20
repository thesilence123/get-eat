'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'angular-loading-bar',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    'ui.grid',
    'ui.grid.resizeColumns'
])
    .run(['$rootScope', function($rootScope) {
        $rootScope.items_in_cart = [
        ];

        $rootScope.addItemToCart = function(item) {
            $rootScope.items_in_cart.push(item);
        };

        $rootScope.removeItemFromCart = function(item) {
            var index = $rootScope.items_in_cart.indexOf(item);
            $rootScope.items_in_cart.splice(index, 1);
        };


    }])
    //.constant("constants", {
    //    "SITE_URL": "https://demo1401836.mockable.io"
    //
    //})
    .config(['$routeProvider',
        'cfpLoadingBarProvider',
        '$mdThemingProvider',
        function($routeProvider,
                 cfpLoadingBarProvider,
                 $mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('green')
                .accentPalette('pink');
            cfpLoadingBarProvider.includeSpinner = true;
    }])
    .constant('SITE_URL', 'https://demo1401836.mockable.io')
