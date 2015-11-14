/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('HomeCtrl', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {
    $scope.title = 'BringEat';

    $scope.switchTab = function(tab) {
        $location.path('/' + tab);
    };
    $scope.$route = $route;
    $scope.getYear = function(){
        return new Date().getFullYear();
    };
}]);