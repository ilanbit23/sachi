'use strict';

angular.module('myApp.people', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/people', {
            templateUrl: 'people/people.html',
            controller: 'peopleCtrl'
        });
    }])

    .controller('peopleCtrl', ['$scope', 'DataFactory', function ($scope, DataFactory) {
        $scope.data = DataFactory.getDataForPeoplePage('people');
        var activeSection = $scope.data.sections[0];
        activeSection.selected = true;

        $scope.sectionClicked = function (section) {
            if (section === activeSection) return;
            section.selected = true;
            activeSection.selected = false;
            activeSection = section;
        }
    }]);
