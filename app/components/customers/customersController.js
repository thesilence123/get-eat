/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('customersCtrl', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {


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
            }
        ];

        $scope.orders = [
            // recieves in the form of:
            {
                "restaurantName": "ignore",
                "restaurantDisplayName": "דוגמה",
                "amount": 0,
                "dish": "מנה גדולה מאוד מאוד"
            }
        ];

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