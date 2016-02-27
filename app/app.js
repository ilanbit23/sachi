'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.factories',
    'myApp.home',
    'myApp.donation',
    'myApp.present',
    'myApp.people',
    'myApp.partners',
    'myApp.transparency',
    'myApp.contact'
    //'myApp.version'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

function slideIn(el) {
    var donation = document.getElementById(el);
    donation.style.transition = "left 1.1s ease 0s";
    donation.style.left = "0px";
    var donationBtn = document.querySelector("#d1");
    donationBtn.style.display = "none";
}

function slideOut(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.1s ease 0s";
    elem.style.left = "-92%";
    var donationBtn = document.querySelector("#d1");
    donationBtn.style.display = "block";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    //console.log('click');
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

var logo = document.querySelector(".logo");
function accFontSizeDefault() {
    document.body.style.fontSize = "1em";
    logo.style.marginLeft = "3em";
}
function accFontSizePlusOne() {
    document.body.style.fontSize = "1.2em";
    logo.style.marginLeft = "0";
}
function accFontSizePlusTwo() {
    document.body.style.fontSize = "1.4em";
    logo.style.marginLeft = "-2em";
}
function changeColor() {
    var image = document.querySelectorAll('img');
    for (var i=0; i < image.length; i++) {
        image[i].classList.toggle("grayscale");
    }
}
