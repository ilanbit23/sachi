'use strict';

angular.module('myApp.partners', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/partners', {
            templateUrl: 'partners/partners.html',
            controller: 'partnersCtrl as vm'
        });
    }])

    .controller('partnersCtrl', ['$rootScope','$timeout', 'DataFactory','toaster', function ($rootScope, $timeout, DataFactory, toaster){

        //console.log('this', this);
        var ctrl = this;
        ctrl.lockCarousel = false;
        if (!$rootScope.isMobile) {
            $timeout(function () {
                ctrl.lockCarousel = true;
            }, 100);
        }
        var pageName = 'partners';
        var prmData = DataFactory.getDataForPage(pageName);
        prmData.then(function (data) {
            ctrl.data = data;


            ctrl.isLast = function(check) {
                var cssClass = check ? 'last' : null;
                return cssClass;
            };

            ctrl.updateModel = function () {
                console.log('Model updated: ', ctrl.data);
                DataFactory.updatePage(pageName, ctrl.data);
            };
            ctrl.pop = function(){
                toaster.pop('success', "הצלחה", "הטקסט עודכן בהצלחה");
                //toaster.pop('error', "title", "text");
                //toaster.pop('warning', "title", "text");
                //toaster.pop('note', "title", "text");
            };




        });

        $(document).ready(function(){
            $('.test').slick({
                arrows: true
            });
        });

    }]);
