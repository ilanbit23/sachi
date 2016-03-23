'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'xeditable',
    'ngAria',
    'toaster',
    'pascalprecht.translate',
    'angular-carousel',
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
    .run(['$location', '$rootScope', '$window', 'DataFactory', function ($location, $rootScope, $window, DataFactory) {
        $rootScope.hideNav = true;

        var w = window.innerWidth;
        if (w > 640) {
            $rootScope.hideNav = false;
            $rootScope.isMobile = false;
        } else {
            $rootScope.isMobile = true;
        }


        $rootScope.changeLang = function (lang) {

            DataFactory.changeLang(lang);

            $window.location.reload();


        };


        $rootScope.lang = (localStorage.lang)? localStorage.lang  :DataFactory.lang;

        $rootScope.user = {isAdmin: true};
        if ($location.search().secret === 'GivingIsLiving') {
            $rootScope.user.isAdmin = true;
            console.log('$rootScope', $rootScope);
        }



        $rootScope.getClass = function (path) {
            var className = ($location.path().substr(-path.length) === path) ? 'active' : '';
            return className;
        }
    }]);



//donation slide
function slideIn(el) {
    document.querySelector(".closeDonation").style.display = "block";
    var w = window.innerWidth;
    var donationBtn = document.querySelector("#d1");
    var donation = document.getElementById(el);
    donation.style.transition = "left 1s";
    donation.style.left = "0";
    if (w > 860) {
        donationBtn.style.transition = "left 0.9s";
        donationBtn.style.left = "86%";
    }
    else if (w > 640 && w < 860) {
        donationBtn.style.transition = "left 0.9s";
        donationBtn.style.left = "84%";
    }
    //else {
    //    donationBtn.style.left = "0";
    //}

}

function slideOut(el) {
    document.querySelector(".closeDonation").style.display = "none";
    var donation = document.getElementById(el);
    var donationBtn = document.querySelector("#d1");
    var w = window.innerWidth;
    donation.style.left = "-100%";
    if (w > 860) {
        donation.style.transition = "left 1s";
        donationBtn.style.left = "-52px";
    }
    else if (w > 640 && w < 860) {
        donation.style.transition = "left 1s";
        donation.style.left = "-100%";
        donation.style.transition = "left 1s";
        donationBtn.style.left = "-52px";
    }
    else {

    }
}


//dropdown
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

