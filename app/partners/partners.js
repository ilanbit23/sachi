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
        var pageName = 'partners';
        var prmData = DataFactory.getDataForPage(pageName);
        prmData.then(function (data) {
            ctrl.data = data;


            ctrl.isLast = function(check) {
                var cssClass = check ? 'last' : null;
                return cssClass;
            };
        });



    }]);
