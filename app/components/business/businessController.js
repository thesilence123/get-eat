/**
 * Created by Amit on 11/14/2015.
 */
/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('businessCtrl', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {
        $scope.title = 'BringEat';

        $scope.switchTab = function(tab) {
            $location.path('/' + tab);
        };
        $scope.$route = $route;
        $scope.getYear = function(){
            return new Date().getFullYear();
        };
        $scope.range = function(count){

            var array = [];

            for (var i = 0; i < count; i++) {
                array.push(i)
            }

            return array;
        }
    }]);