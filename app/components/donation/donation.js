'use strict';

angular.module('myApp.donation', [])

.directive('donation', function() {
    return {
        templateUrl: 'components/donation/donation.html',
        link: function (scope, el, attr) {

            scope.donation = {
                amount: 0
            };

            scope.donate = function () {
                if(document.querySelector('#jgive').checked) {
                        window.open('https://www.jgive.com/external_pages/charity_donate?charity_organization_id=274&currency=ILS&locale=he');
                }
            }
        }
    }
});
