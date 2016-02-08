'use strict';

angular.module('myApp.people', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/people', {
            templateUrl: 'people/people.html',
            controller: 'peopleCtrl'
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


    .controller('peopleCtrl', [function ($scope) {
        //$scope.isShown = false;
    }]);
