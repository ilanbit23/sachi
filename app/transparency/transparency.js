'use strict';

angular.module('myApp.transparency', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/transparency', {
            templateUrl: 'transparency/transparency.html',
            controller: 'transparencyCtrl as vm'
        });
    }])


    .controller('transparencyCtrl', ['DataFactory',function (DataFactory) {
        var ctrl = this;


        var pageName = 'transparency';
        var prmData = DataFactory.getDataForPage(pageName);
        prmData.then(function (data) {
            ctrl.data = data;
            console.log('data',data);
            ctrl.selectYear( new Date().getFullYear());
        });


        ctrl.selectYear = function(year) {
            ctrl.selectedYear = year;
            ctrl.docs = ctrl.data.years[year];
            console.log('ctrl.docs', ctrl.docs);
        };




    }]);
