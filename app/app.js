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
    donationBtn.style.left = "777px";
}

function slideOut(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.1s ease 0s";
    elem.style.left = "-839px";
    var donationBtn = document.querySelector("#d1");
    donationBtn.style.transition = "left 1.1s ease 0s";
    donationBtn.style.left = "-60px";
}

function openMenu(){
    var menu = document.querySelector(".nav>ul");
    if (menu.style.display = "none") menu.style.display = "block";
    //else if (menu.style.display = "block") menu.style.display = "none";
}

/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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
}
//
//function closeMenu() {
//    var menu = document.querySelector(".nav>ul");
//    if (menu.style.display = "block") menu.style.display = "none";
//}

var obj =
{

    homePage: [{videoId: "vimeo-78907398", "name": "Arik"}],
    past: [{}],
    present: [{
        pageTitle: "הווה",
        ulTitle: "סיירות החסד",
        header: "סיירות החסד",
        headText: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
        firstParagraph: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
        secondParagraph: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.'
    }],
    future: [{}],

    people: [
        {
            pageTitle: "אנשים",
            name: 'אברהם חיון',
            job: 'מנכ"ל סח"י',
            jobDescription1: "מעל ל 333,300- בני נוער בישראל נמצאים בסיכון. לעתים קרובות הם חשים ניכור, חוסר שייכות, תסכול, חוסר תקווה וכישלון. הם מרגישים מנותקים מהמשפחות, הקהילות שלהם והחברה כולה. הם מפגינים התנהגות הרסנית ואנטי חברתית, אשר, אם אינה מטופלת בזמן, עלולה להביא למעשים פליליים, התמכרות לסמים ואלכוהול.",
            jobDescription2: "מעל ל 333,300- בני נוער בישראל נמצאים בסיכון. לעתים קרובות הם חשים ניכור, חוסר שייכות, תסכול, חוסר תקווה וכישלון. הם מרגישים מנותקים מהמשפחות, הקהילות שלהם והחברה כולה. הם מפגינים התנהגות הרסנית ואנטי חברתית, אשר, אם אינה מטופלת בזמן, עלולה להביא למעשים פליליים, התמכרות לסמים ואלכוהול."
        }

    ]


};
