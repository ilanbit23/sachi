'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'contactCtrl as vm'
        });
    }])


    .controller('contactCtrl', ['DataFactory','toaster', function (DataFactory, toaster) {
        var ctrl = this;
        ctrl.contact = {};

        ctrl.sendContact = function () {
            console.log('here', ctrl.contact);
            DataFactory.sendContact(ctrl.contact).then(function () {
                ctrl.pop();
            });

        }
        ctrl.pop = function(){
            toaster.pop('success', "הצלחה", "נשלח בהצלחה");
            //toaster.pop('error', "title", "text");
            //toaster.pop('warning', "title", "text");
            //toaster.pop('note', "title", "text");
        };

    }]);