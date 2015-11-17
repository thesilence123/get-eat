/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('customersCtrl', ['$scope',
    '$route',
    '$location',
    '$mdToast',
    '$document',
    'customersService',
    '$mdDialog',
    function ($scope, $route, $location, $mdToast, $document, customersService,
    $mdDialog) {
        $scope.showSimpleToast = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('הוזמן! חצי שעה אצלך ;)')
                    .hideDelay(3000)
                    .capsule(true)
                    .position('upper left')
                    .theme("md-primary")
            );
        };

        $scope.order = function(ev){

            if ($scope.accountDetails.address === undefined) {
                $scope.showAdvanced(ev)
            } else {
                customersService.postOrder($scope.orders).then(function (data) {
                    $scope.showSimpleToast();
                    $scope.orders = [];  // Empty shopping cart
                }, function () {
                    // TODO: Show toast error
                });
            }
        };
        $scope.getCustomerDetails = function () {
            customersService.getCustomerDetails().then(function (details) {
                $scope.$parent.accountDetails = details;
            })
        };
        $scope.getCustomerDetails();
        // To be recieved from the REST API
        $scope.restaurants = [
            {
                "name": "abu hassan",
                "displayName": "אבו חסן",
                "description": "המסבחה העסיסית ביותר כבר 40 שנה...",
                "logo": "app/assets/images/ali_logo.JPG",
                "phone": "03-6666666",
                "address": "מתחת לעץ 6, תל אביב-יפו",
                "dishes": [{
                    "name": "מסבחה",
                    "price": "66"
                },
                    {
                        "name": "חומוס",
                        "price": "66"
                    },
                    {
                        "name": "פיתה",
                        "price": "2"
                    }
                ]
            },
            {
                "name": "dominos pizza",
                "displayName": "דומינוס פיצה",
                "description": "חם, פריך. דומינוס פיצה.",
                "logo": "app/assets/images/pizza.png",
                "phone": "03-6666666",
                "address": "חם ופריך 6, תל אביב",
                "dishes": [{
                    "name": "פיצה",
                    "price": "66"
                },
                {
                    "name": "לחם שום",
                    "price": "66"
                },
                {
                    "name": "רוטב שום",
                    "price": "2"
                }
                ]
            },
            {
                "name": "bar giora",
                "displayName": "בר גיורא",
                "description": "בר מסעדה",
                "logo": "app/assets/images/bar_giora.jpg",
                "phone": "03-6666666",
                "address": "בר גיורא 6, תל אביב",
                "dishes": [{
                    "name": "קולה",
                    "price": "66"
                },
                    {
                        "name": "בירה",
                        "price": "66"
                    },
                    {
                        "name": "וויסקי",
                        "price": "600"
                    }
                ]
            },
            {
                "name": "dan-dan",
                "displayName": "פיצה דן דן",
                "description": "הפיצה הטובה של הדר יוסף",
                "logo": "app/assets/images/dan-dan.jpg",
                "phone": "03-6666666",
                "address": "שלום אש 20, תל אביב",
                "dishes": [{
                    "name": "פיצה",
                    "price": "66"
                    },
                    {
                        "name": "לחם שום",
                        "price": "66"
                    },
                    {
                        "name": "רוטב שום",
                        "price": "2"
                    }
                ]
            }
        ];

        // 2-way-binded to the chips of the shopping cart
        $scope.orders = [
            // recieves in the form of:
            //{
            //    "restaurantName": "ignore",
            //    "restaurantDisplayName": "דוגמה",
            //    "amount": 0,
            //    "dish": "מנה גדולה מאוד מאוד"
            //}
        ];

        // Called from the dishes buttons
        $scope.addOrder = function(restaurantName, restaurantDisplayName, dish){
            $scope.orders.push(
                {
                    "restaurantName": restaurantName,
                    "restaurantDisplayName": restaurantDisplayName,
                    "dish": dish
                }
            );
        }


}]);