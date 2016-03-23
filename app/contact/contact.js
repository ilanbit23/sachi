'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'contactCtrl as vm'
        });
    }])


    .controller('contactCtrl', ['DataFactory', function (DataFactory) {
        var ctrl = this;
        ctrl.contact = {};

        ctrl.sendContact = function () {
            console.log('here', ctrl.contact);
            DataFactory.sendContact(ctrl.contact);

        }

    }]);