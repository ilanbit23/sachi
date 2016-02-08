'use strict';

angular.module('myApp.present', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/present', {
            templateUrl: 'present/present.html',
            controller: 'presentCtrl'
        });
    }])

    //.directive('mbFade', function () {
    //    return function (scope, el, attrs) {
    //        el = el[0];
    //        //console.log('mbFade, el is: ', el);
    //        //console.log('mbFade, attrs is: ', attrs);
    //
    //        scope.$watch(attrs.mbFade, function (newVal) {
    //            $(el).fadeToggle();
    //
    //            //console.log('Attr Changed!', newVal);
    //        });
    //    }
    //})


    .controller('presentCtrl', [function ($scope) {
        //$scope.isShown = false;
    }]);
