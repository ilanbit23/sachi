'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'xeditable',
    'ngAria',
    'toaster',
    'pascalprecht.translate',
    'slick',
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

        $rootScope.hideNavOnClick = function () {
            if (w > 640) {
                $rootScope.hideNav = false;
            } else {
                $rootScope.hideNav = true;
            }
        }
        //$rootScope.userLang = 'app';

        $rootScope.load=true;
        $rootScope.changeLang = function (lang) {

            //$rootScope.userLang = 'appltr';
            DataFactory.changeLang(lang);

            $window.location.reload();


        };


        $rootScope.lang = (localStorage.lang) ? localStorage.lang : DataFactory.lang;

        $rootScope.user = {isAdmin: false};

        if ($location.search().secret === 'GivingIsLiving') {
            $rootScope.user.isAdmin = true;
            //console.log('$rootScope', $rootScope);
        }


        $rootScope.getClass = function (path) {
            var className = ($location.path().substr(-path.length) === path) ? 'active' : '';
            return className;
        }
    }])


$(window).bind('click', function (event) {


    if (event.target.id === 'd1') return;

    var popup = $('#msg');

    var isClickedElementChildOfPopup = event.target.id === 'msg' || popup
            .find(event.target)
            .length > 0;

    //console.log('event', event);
    //console.log('isClickedElementChildOfPopup', isClickedElementChildOfPopup);

    if (isClickedElementChildOfPopup)
        return;

    slideOut('msg');
});


var w = window.innerWidth;

var donationOpen = false;

//donation slide
function slideIn(el) {
    var donation = document.querySelector('#msg');
    var donationBtn = document.querySelector("#d1");
    donationOpen = true;
    $(document).on('keydown', function (e) {
        //$(html)
        if (e.keyCode === 27) {
            slideOut(el);
        }
    });
    document.querySelector(".closeDonation").style.display = "block";
    donation.style.transition = "left 1s";
    donation.style.left = "0";
    if (w > 860) {
        donation.style.display = "block";
        donationBtn.style.transition = "left 0.9s";
        donationBtn.style.left = "87.5%";
    }
    else if (w > 340 && w < 860) {
        donation.style.transition = "none";
        donationBtn.style.transition = "none";
        donationBtn.style.left = "0";
        $("#msg").fadeIn();
    }
}

function slideOut(el) {
    var donation = document.querySelector('#msg');
    var donationBtn = document.querySelector("#d1");
    donationOpen = false;
    document.querySelector(".closeDonation").style.display = "none";


    if (w > 860) {
        donation.style.transition = "left 1s";
        donation.style.left = "-100%";
        donationBtn.style.left = "-52px";
    }
    else if (w > 340 && w < 860) {
        donation.style.transition = "none";
        donationBtn.style.transition = "none";
        donationBtn.style.left = "0";
        $("#msg").fadeOut();
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

