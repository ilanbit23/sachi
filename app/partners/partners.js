'use strict';

angular.module('myApp.partners', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/partners', {
            templateUrl: 'partners/partners.html',
            controller: 'partnersCtrl'
        });
    }])

    .controller('partnersCtrl', ['$scope', 'DataFactory', function ($scope, DataFactory){
        $scope.data = DataFactory.getDataForPartnersPage('partners');
        var activeSection = $scope.data.sections[0];
        activeSection.selected = true;

        $scope.sectionClicked = function (section) {
            if (section === activeSection) return;
            section.selected = true;
            activeSection.selected = false;
            activeSection = section;
        }
    }]);
