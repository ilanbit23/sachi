'use strict';

angular.module('myApp.people', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/people', {
            templateUrl: 'people/people.html',
            controller: 'peopleCtrl as vm'
        });
    }])

    .controller('peopleCtrl', ['DataFactory', function (DataFactory) {
        var ctrl = this;

        var prmData = DataFactory.getDataForPage('people');
        prmData.then(function (data) {
            ctrl.data = data;
        });
        
    }]);
