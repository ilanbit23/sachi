'use strict';

angular.module('myApp.thanks', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/thanks', {
            templateUrl: 'thanks/thanks.html',
            controller: 'thanksCtrl as vm'
        });
    }])

    .controller('thanksCtrl', ['DataFactory', function (DataFactory, toaster) {
        var ctrl = this;
        var pageName = 'thanks';

        var prmData = DataFactory.getDataForPage(pageName);
        prmData.then(function (data) {
            ctrl.data = data;
            ctrl.updateModel = function () {
                console.log('Model updated: ', ctrl.data);
                DataFactory.updatePage(pageName, ctrl.data);
            }
            ctrl.pop = function(){
                toaster.pop('success', "הצלחה", "הטקסט עודכן בהצלחה");
                //toaster.pop('error', "title", "text");
                //toaster.pop('warning', "title", "text");
                //toaster.pop('note', "title", "text");
            };
        });
        
    }]);
