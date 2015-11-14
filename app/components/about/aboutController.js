/**
 * Created by Amit on 9/24/2015.
 */
'use strict';

myApp.controller('aboutCtrl', ['$scope', function($scope){

}]).directive('linkedInProfile', [function() {
    return {
        restrict: 'E',
        template: '<script type="IN/MemberProfile" data-id="https://www.linkedin.com/pub/amit-eliav/ba/916/b67" data-format="click" data-related="false" data-text="Amit Eliav"></script>',
        link: function () {
            if (IN.parse) {
                IN.parse();
            }
        }
    };
}])
    .directive('about', function() {
        return {
            restrict: 'E',
            scope: {},
            controller: ['$scope', function($scope) {
                $scope.styles = {
                    linkedin: {fill: 'black'},
                    facebook: {fill: 'black'},
                    googleplus: {fill: 'black'},
                    email: {fill: 'black'}
                };

                $scope.changeColor = function(icon, color){
                    $scope.styles[icon].fill = color;
                    console.log("changed");
                };
                $scope.infoOpen = true;
            }],
            templateUrl: 'app/components/about/about.html'
        };

    });