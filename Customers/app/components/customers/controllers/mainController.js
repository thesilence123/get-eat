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
    '$rootScope',
    function ($scope, $route, $location, $mdToast, $document, customersService,
    $mdDialog, $rootScope) {
        
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
        
        $scope.total_price = 100;
        $scope.no_items_message = "תתחילו להוסיף מוצרים!";
        $rootScope.items_in_cart = [
            {
                title: "פיצה בינונית",
                extras: ['זיתים'],
                price: 49
            },
            {
                title: "כנפיים 16 יחידות",
                extras: [],
                price: 20
            },
            {
                title: "לחם שום",
                extras: ["גבינה", "בצל"],
                price: 17
            }
        ];
        
        $rootScope.addItemToCart = function(item) {
            $scope.items_in_cart.push(item);
        }
        
        $rootScope.removeItemFromCart = function(item) {
            var index = $scope.items_in_cart.indexOf(item);
            $scope.items_in_cart.splice(index, 1);
        }
        
        $scope.submit_order = function(order) {
            toastr.options = {
                "positionClass": "toast-bottom-right"
            };
            toastr["success"]("You ordered an awesome dish!");
            
        }
        $scope.range = function(number){
            var range = [];
            for(var i=0;i<total;i++) {
                range.push(i);
            }
            return range;
        }
}]);