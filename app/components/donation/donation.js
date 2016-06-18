'use strict';

angular.module('myApp.donation', [])

    .directive('donation', function () {
        return {
            templateUrl: 'components/donation/donation.html',
            link: function (scope, el, attr) {

                scope.donation = {
                    amount: 0
                };
                var direction = bodyDir.classList;
                if (direction == 'rtl') {
                    scope.paypalValue = 'FF8BLQ27UX8YU'
                } else {
                    scope.paypalValue = 'CVYVZQCLTKK9G'
                }

                scope.donate = function () {
                    if (document.querySelector('#jgive').checked) {

                        if (direction == 'rtl') {
                            window.open('https://www.jgive.com/external_pages/charity_donate?charity_organization_id=274&currency=ILS&locale=he');
                        } else {
                            window.open('https://www.jgive.com/external_pages/charity_donate?charity_organization_id=274&currency=USD&locale=en');
                        }
                    }
                }
            }
        }
    });
