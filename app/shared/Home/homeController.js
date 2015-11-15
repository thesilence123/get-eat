/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('homeCtrl', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {
        $scope.title = 'GetEat';
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