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
    'ngSanitize',
    'myApp.factories',
    'myApp.home',
    'myApp.donation',
    'myApp.activity',
    'myApp.people',
    'myApp.partners',
    'myApp.thanks',
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
            $window.scrollTo(0, 0);

        }
        //$rootScope.userLang = 'app';

        $rootScope.load = true;
        $rootScope.changeLang = function (lang) {

            $rootScope.userLang = 'appltr';
            DataFactory.changeLang(lang);

            $window.location.reload();
            $window.scrollTo(0, 0);


        };

        $rootScope.logo = 'img/logo.PNG'
        $rootScope.lang = (localStorage.lang) ? localStorage.lang : DataFactory.lang;
        if ($rootScope.lang == 'en') {
            $('head').append('<link rel="stylesheet" href="css/appltr.css" type="text/css" />');
            $rootScope.logo = 'img/logoEng.PNG'
        }
        $rootScope.user = {isAdmin: false};

        if ($location.search().secret === 'GivingIsLiving') {
            var pass = prompt('Password Please?');
            DataFactory.login(pass).then(function (res) {
                if (res.data === 'success') {
                    console.log('Welcome Admin');
                    $rootScope.user.isAdmin = true;
                }
            });

        }


        $rootScope.getClass = function (path) {
            var className = ($location.path().substr(-path.length) === path) ? 'active' : '';
            //$window.scrollTo(0, 0);
            return className;
        }

    }]);

//window.addEventListener('orientationchange', function () {
//    if (window.innerHeight > window.innerWidth) {
//        document.getElementsByTagName('body').style.transform = "rotate(90deg)";
//    }
//})
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

var bodyDir = document.querySelector('#SAHI');
var direction = bodyDir.style.direction;
//console.log('direction',direction);
var w = window.innerWidth;

var donationOpen = false;

//donation slide
function slideIn(el) {

    var bodyDir = document.querySelector('#SAHI');

    //var direction = bodyDir.style.direction;
    var direction = bodyDir.classList;
    //console.log(direction);
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
    if (direction == 'rtl') {
        //console.log('direction',direction);
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
    if (direction == 'ltr') {
        donation.style.display = "block";
        donation.style.transition = "right 1s";
        if (w > 860) {
            donation.style.right = "0";
            donationBtn.style.transition = "right 0.9s";
            donationBtn.style.right = "87.5%";
        }
        else if (w > 340 && w < 860) {
            //donation.style.transition = "none";
            //donationBtn.style.transition = "none";
            //donationBtn.style.right = "0";
            $("#msg").fadeIn();
        }
    }

}

function slideOut(el) {
    var bodyDir = document.querySelector('#SAHI');
    var direction = bodyDir.classList;
    var donation = document.querySelector('#msg');
    var donationBtn = document.querySelector("#d1");
    donationOpen = false;
    document.querySelector(".closeDonation").style.display = "none";

    if (direction == 'rtl') {
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
    if (direction == 'ltr') {
        if (w > 860) {
            donation.style.transition = "right 1s";
            donation.style.right = "-100%";
            donationBtn.style.right = "-52px";
        }
        else if (w > 340 && w < 860) {
            donation.style.transition = "none";
            donationBtn.style.transition = "none";
            donationBtn.style.right = "0";
            $("#msg").fadeOut();
        }
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

