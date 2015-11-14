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
    function ($scope,
              $route,
              $location,
              $mdToast,
              $document) {
        $scope.showSimpleToast = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .hideDelay(3000)
                    .capsule(true)
            );
        };
        $scope.myData = [
            {
                "שעה": "12:35",
                "טלפון": "0524244204",
                "כתובת": "חנה רובינא 7, תל אביב",
                "מנה": "פיצה",
                "כמות": "6",
                "הערות": "עם פפרוני"
            },
            {
                "שעה": "10:36",
                "טלפון": "0566666666",
                "כתובת": "בסיס גלילות",
                "מנה": "פיצה",
                "כמות": "42",
                "הערות": "לחיילים בשמירה"
            },
            {
                "שעה": "9:41",
                "טלפון": "0527777777",
                "כתובת": "מתחת לעץ 6, קריית אונו",
                "מנה": "לחם שום",
                "כמות": "6",
                "הערות": "סטייל"
            }
        ]
    }]);