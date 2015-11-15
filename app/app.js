'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'angular-loading-bar',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    'ui.grid'
])
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
    .constant('SITE_URL', 'https://demo1401836.mockable.io');