'use strict';

angular.module('myApp.transparency', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/transparency', {
            templateUrl: 'transparency/transparency.html',
            controller: 'transparencyCtrl'
        });
    }])


    .controller('transparencyCtrl', [function ($scope) {
        //$scope.isShown = false;
    }]);
