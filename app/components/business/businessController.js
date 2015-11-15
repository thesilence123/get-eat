/**
 * Created by Amit on 11/14/2015.
 */
/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('businessCtrl', [
    '$scope',
    '$route',
    '$location',
    '$mdToast',
    '$document',
    'businessService',
    function ($scope,
              $route,
              $location,
              $mdToast,
              $document,
              businessService) {

        businessService.getOrders().then(function(orders) {
            console.log(orders);
            $scope.myData = orders;
        });
        $scope.showSimpleToast = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .hideDelay(3000)
                    .capsule(true)
                    .position('upper left')
                    .theme("md-primary")
            );
        };
        $scope.myData = [];
        $scope.gridOptions = {
            data: $scope.myData,
            columnDefs: businessService.getColumns()
        }
    }]);