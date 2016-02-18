'use strict';

angular.module('myApp.present', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/present', {
            templateUrl: 'present/present.html',
            controller: 'presentCtrl'
        });
    }])

    .controller('presentCtrl', ['$scope', 'DataFactory', function ($scope, DataFactory) {
        //$scope.isShown = false;
        //console.log('DataFactory', DataFactory.getDataForPage('present'));

        $scope.data  = DataFactory.getDataForPage('present');
        var activeSection = $scope.data.sections[0];
        activeSection.selected = true;

        $scope.sectionClicked = function (section) {
            if (section === activeSection) return;
            section.selected = true;
            activeSection.selected = false;
            activeSection = section;
        }
    }]);
