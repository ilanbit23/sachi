'use strict';

angular.module('myApp.present', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/present', {
            templateUrl: 'present/present.html',
            controller: 'presentCtrl'
        });
    }])

    .controller('presentCtrl', ['$scope', 'DataFactory', function ($scope, DataFactory) {
        $scope.data  = DataFactory.getDataForPage('present');
        var activeSection = $scope.data.sections[0];
        activeSection.selected = true;

        $scope.sectionClicked = function (section) {
            if (section === activeSection) return;
            section.selected = true;
            activeSection.selected = false;
            activeSection = section;
        }

        $(function(){

            $('#top-toolbar-editor').html5_editor();

            $('#left-toolbar-editor').html5_editor({
                'toolbar-items': [
                    [
                        ['h1', 'H1', 'Heading 1'],
                        ['h2', 'H2', 'Heading 2'],
                        ['h3', 'H3', 'Heading 3'],
                        ['h4', 'H4', 'Heading 4'],
                        ['p', '¶', 'Paragraph']
                    ], [
                        ['bold', 'B', 'Bold'],
                        ['italic', 'I', 'Italicize'],
                        ['underline', 'U', 'Underline'],
                        ['remove', '⌫', 'Remove Formating'],
                        ['custom', 'Cust', 'Custom function', function() { alert('My custom function'); }]
                    ]
                ],
                'left-toolbar': true,
                'auto-hide-toolbar': true } );

        });
    }]);
