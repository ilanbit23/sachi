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
    donationBtn.style.transition = "left 1.1s ease 0s";
    donationBtn.style.left = "85.5%";
}

function slideOut(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.1s ease 0s";
    elem.style.left = "-92%";
    var donationBtn = document.querySelector("#d1");
    donationBtn.style.transition = "left 1.1s ease 0s";
    donationBtn.style.left = "-60px";
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