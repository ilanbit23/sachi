'use strict';

angular.module('myApp.partners', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/partners', {
            templateUrl: 'partners/partners.html',
            controller: 'partnersCtrl as vm'
        });
    }])

    .controller('partnersCtrl', ['DataFactory', function (DataFactory){

        var ctrl = this;
        var prmData = DataFactory.getDataForPage('partners');
        prmData.then(function (data) {
            ctrl.data = data;
        });

    }]);
