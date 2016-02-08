'use strict';

angular.module('myApp.partners', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/partners', {
            templateUrl: 'partners/partners.html',
            controller: 'partnersCtrl'
        });
    }])

    .controller('partnersCtrl', [function ($scope) {
        //$scope.isShown = false;
    }]);
