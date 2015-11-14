/**
 * Created by Amit on 9/19/2015.
 */
'use strict';

myApp.controller('customersCtrl', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {

        $scope.dishes = [
            'מסבחה',
            'חומוס',
            'פיתה'
        ];
        $scope.restaurants = [
            {
                "name": "אבו חסן",
                "description": "כבר יותר מ40 שנה... המסבחה העסיסית ביותר",
                "logo": "app/assets/images/masabaha.jpg",
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
                }]
            },
            {
                "name": "דומינוס פיצה",
                "logo": "app/assets/images/pizza.png",
                "phone": "03-6666666",
                "address": "מתחת לעץ 6, תל אביב-יפו",
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
        ]
}]);