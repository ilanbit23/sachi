'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'xeditable',
    'ngAria',
    'toaster',
    'ngRoute',
    'myApp.factories',
    'myApp.home',
    'myApp.donation',
    'myApp.activity',
    'myApp.people',
    'myApp.partners',
    'myApp.transparency',
    'myApp.contact'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', function ($location, $rootScope) {


        $rootScope.user = {isAdmin: false};
        if ($location.search().secret === 'GivingIsLiving') {
            $rootScope.user.isAdmin = true;
            console.log('$rootScope', $rootScope);
        }



        $rootScope.getClass = function (path) {
            var className = ($location.path().substr(-path.length) === path) ? 'active' : '';
            return className;
        }
    }])




function slideIn(el) {
    var donation = document.getElementById(el);
    donation.style.transition = "left 1s";
    donation.style.left = "0";
    var donationBtn = document.querySelector("#d1");
    donationBtn.style.transition = "left 0.9s";
    donationBtn.style.left = "86%";
}

function slideOut(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 1s";
    elem.style.left = "-100%";
    var donationBtn = document.querySelector("#d1");
    elem.style.transition = "left 1s";
    donationBtn.style.left = "-52px";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

