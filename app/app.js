'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.donation',
    'myApp.present',
    'myApp.people',
    'myApp.partners',
    'myApp.transparency',
    'myApp.contact'
    //'myApp.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
function slideIn(el){
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.1s ease 0s";
    elem.style.left = "0px";
}
function slideOut(el){
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.1s ease 0s";
    elem.style.left = "-800px";
}
var obj =
{

    homePage: [{videoId: "vimeo-78907398", "name": "Arik"}],
    past: [{}],
    future: [{}],

    people: [
        {
            name: "cdcd"


        }

    ]


};
