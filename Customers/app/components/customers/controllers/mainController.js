/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('MainCtrl', ['$scope',
    '$route',
    '$location',
    '$mdToast',
    '$document',
    'customersService',
    '$mdDialog',
    function ($scope, $route, $location, $mdToast, $document, customersService,
    $mdDialog) {
        
        $scope.active_classes = {
            all_dishes: false,
            pizza: false,
            hummus: false,
            falafel: false,
            shawarma: false
        }
        
        $scope.showAllDishes = function() {
            $scope.active_classes.all_dishes = !($scope.active_classes.all_dishes);
            $location.path('/all');
        };
        
        $scope.showPizzaDishes = function() {
            $scope.active_classes.pizza = !($scope.active_classes.pizza);
            $location.path('/pizza');
        };
        
        $scope.showHummusDishes = function() {
            $scope.active_classes.hummus = !($scope.active_classes.hummus);
            $location.path('/hummus');
        };
        
        $scope.showFalafelDishes = function() {
            $scope.active_classes.falafel = !($scope.active_classes.falafel);
            $location.path('/falafel');
        };
        
        $scope.showShawarmaDishes = function() {
            $scope.active_classes.shawarma = !($scope.active_classes.shawarma);
            $location.path('/shawarma');
        };
}]);