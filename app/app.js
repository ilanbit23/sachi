'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'xeditable',
    'ngRoute',
    'myApp.factories',
    'myApp.home',
    'myApp.donation',
    'myApp.present',
    'myApp.people',
    'myApp.partners',
    'myApp.transparency',
    'myApp.contact'
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
    elem.style.left = "-100%";
    var donationBtn = document.querySelector("#d1");
    donationBtn.style.display = "block";
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
    for (var i = 0; i < image.length; i++) {
        image[i].classList.toggle("grayscale");
    }
    document.querySelector('.dd').classList.toggle("bw");
    document.querySelector('#msg').classList.toggle("bw");
    document.querySelector('.title').classList.toggle("bw");
    document.querySelector('.btnContinue').classList.toggle("buttonbw");
    if (!document.querySelector('h1')) return;
    document.querySelector('h1').classList.toggle("bw");
    if (!document.querySelector('aside')) return;
    document.querySelector('aside h3').classList.toggle("cg");
    document.querySelector('aside').classList.toggle("asidebw");
    if (!document.querySelector('.formSend')) return;
    document.querySelector('.formSend').classList.toggle("bw");
}
