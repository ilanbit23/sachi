'use strict';

angular.module('myApp.present', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/present', {
            templateUrl: 'present/present.html',
            controller: 'presentCtrl as vm'
        });
    }])

    .controller('presentCtrl', ['DataFactory', function (DataFactory) {

        var ctrl = this;
        var pageName = 'present';


        var prmData = DataFactory.getDataForPage(pageName);
        prmData.then(function (data) {
            ctrl.data = data;

            var activeSection = ctrl.data.sections[0];
            activeSection.selected = true;

            ctrl.sectionClicked = function (section) {
                if (section === activeSection) return;
                section.selected = true;
                activeSection.selected = false;
                activeSection = section;
            }

        });


        ctrl.updateModel = function () {
            console.log('Model updated: ', ctrl.data);
            DataFactory.updatePage(pageName, ctrl.data);
        }



    }]);
