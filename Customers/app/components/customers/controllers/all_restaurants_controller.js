/**
 * Created by Amit on 9/19/2015.
 */
'use strict';​
function CreateOrder(order){
    var json = JSON.stringify(order);
    $.ajax({
        method: "POST",
        url : "https://api.backand.com:443/1/objects/order?deep=true",
        headers: {"AnonymousToken": "63529d36-5c14-4a0c-b3d1-1336c1401cf3"},
        contentType: 'text/html; charset=UTF-8',
        data: json

    });
    console.debug(order);
    $.ajax({
        method: "GET",
        url: 'https://api.backand.com/1/objects/action/order/?name=notifySeller&parameters=%7B%22order%22:%22%7B%20%20%20%5C%22id%5C%22:%2052,%20%20%20%5C%22restaurant%5C%22:%20%5C%22%D7%A4%D7%99%D7%A6%D7%94%5C%22,%20%20%20%5C%22dishes%5C%22:%20%5B%20%20%20%20%20%7B%20%20%20%20%20%20%20%5C%22id%5C%22:%202,%20%20%20%20%20%20%20%5C%22name%5C%22:%20%5C%22Pizza%5C%22,%20%20%20%20%20%20%20%5C%22price%5C%22:%2020,%20%20%20%20%20%20%20%5C%22extras%5C%22:%20%5C%22Onion%5C%22,%20%20%20%20%20%20%20%5C%22order%5C%22:%20%7B%20%20%20%20%20%20%20%20%20%5C%22id%5C%22:%2052,%20%20%20%20%20%20%20%20%20%5C%22restaurant%5C%22:%20%5C%22Pizzhackthon%5C%22,%20%20%20%20%20%20%20%20%20%5C%22address%5C%22:%20%5C%22ashalim%5C%22,%20%20%20%20%20%20%20%20%20%5C%22time%5C%22:%20%5C%222015-11-19T18:51:44%5C%22%20%20%20%20%20%20%20%7D%20%20%20%20%20%7D%20%20%20%5D,%20%20%20%5C%22drinks%5C%22:%20%5B%20%20%20%20%20%7B%20%20%20%20%20%20%20%5C%22id%5C%22:%202,%20%20%20%20%20%20%20%5C%22name%5C%22:%20%5C%22אבגד%5C%22,%20%20%20%20%20%20%20%5C%22price%5C%22:%208,%20%20%20%20%20%20%20%5C%22order%5C%22:%20%7B%20%20%20%20%20%20%20%20%20%5C%22id%5C%22:%2052,%20%20%20%20%20%20%20%20%20%5C%22restaurant%5C%22:%20%5C%22Pizzhackthon%5C%22,%20%20%20%20%20%20%20%20%20%5C%22address%5C%22:%20%5C%22ashalim%5C%22,%20%20%20%20%20%20%20%20%20%5C%22time%5C%22:%20%5C%222015-11-19T18:51:44%5C%22%20%20%20%20%20%20%20%7D%20%20%20%20%20%7D%20%20%20%5D,%20%20%20%5C%22address%5C%22:%20%5C%22ashalim%5C%22,%20%20%20%5C%22time%5C%22:%20%5C%222015-11-19T18:51:44%5C%22%20%7D%22%7D',
        headers: {"AnonymousToken": "63529d36-5c14-4a0c-b3d1-1336c1401cf3"},
        success: function(response){

        }
    })
}
myApp.controller('AllRestaurantsCtrl', ['$scope',
    '$route',
    '$location',
    '$mdToast',
    '$document',
    'customersService',
    '$mdDialog',

    function ($scope, $route, $location, $mdToast, $document, customersService,
    $mdDialog, $rootScope) {
        $scope.postOrder = function () {
            var order = {
                restaurant: "אבי ובניו",
                dishes: [
                    {
                        "name": "פיצה",
                        "price": 22,
                        "extras": "זיתים ירוקים פטריות",
                    }
                ],
                drinks: [
                    {
                        name: "קולה",
                        price: 21
                    }
                ],
                address: "123123",
                time: ""
            }
            angular.forEach($rootScope.items_in_cart, function(item, index){
                order.dishes.push(item);
            });
            order.drinks = [];
            order.address = 'ויצמן 6, תל אביב';
            order.time = new Date();
        };
        $scope.showMenu = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '/app/components/customers/menu.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        mainDishes: $scope.mainDishes,
                        toppings: $scope.toppings,
                        pricing: $scope.pricing
                    },
                    bindToController: true
                })
                .then(function (customerDetails) {
                }, function () {

                });
        };
        $scope.mainDishes = ['פיצה', 'לחם שום'];
        $scope.pricing = [49, 17];
        $scope.toppings = ['זיתים ירוקים', 'זיתים שחורים', 'אננס', 'פפרוני', 'פטריות'];
        function DialogController($scope, $mdDialog, mainDishes, toppings, pricing, $rootScope) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
            console.log(mainDishes);
            $scope.mainDishes = mainDishes;
            $scope.toppings = toppings;
            $scope.pricing = pricing;
            $scope.mainDish = '0';
            $scope.indexOfDish = function(dish){
                return mainDishes.indexOf(dish);
            };
            $scope.toppingsSelected = [false, false, false, false, false];
            $scope.addToCart = function(){
                var extras = [];
                for (var i = 0; i< $scope.toppingsSelected.length; i++){
                    if($scope.toppingsSelected[i] === true){
                        extras.push($scope.toppings[i]);
                    }
                }
                console.log($scope.mainDishes);
                console.log($scope.mainDish);

                console.log($scope.mainDishes[$scope.mainDish]);
                var item = {
                    name: $scope.mainDishes[$scope.mainDish],
                    extras: extras,
                    price: $scope.pricing[$scope.mainDish]
                };
                $rootScope.addItemToCart(item);
                $scope.answer('Added');
            }
        }
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
                $scope.showAdvancedLogin(ev)
            } else {
                customersService.postOrder($scope.orders).then(function (data) {

                }, function () {
                    // TODO: Show toast error
                });
                $scope.showSimpleToast();
                $scope.orders = [];  // Empty shopping cart
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