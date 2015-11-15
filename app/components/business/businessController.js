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
    '$interval',
    function ($scope,
              $route,
              $location,
              $mdToast,
              $document,
              businessService,
              $interval) {
        var updateData = function() {
            businessService.getOrders().then(function (orders) {
                $scope.myData = orders;
            });
        };
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
        updateData();
        $interval(updateData, 5000);
        $scope.gridOptions = {
            data: $scope.myData,
            enableColumnResizing: true,
            columnDefs: businessService.getColumns()
        }
    }]);