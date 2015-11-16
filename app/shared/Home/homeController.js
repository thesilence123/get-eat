/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('homeCtrl', ['$scope', '$route', '$location',
    '$mdDialog',
    function ($scope, $route, $location, $mdDialog) {
        $scope.title = 'GetEat';

        $scope.accoutDetails = [];

        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '/app/shared/Home/login.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                .then(function (customerDetails) {
                }, function () {
                });
        };
        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
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