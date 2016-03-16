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
                //console.log('scope', scope.donation.amount);
                alert('Thanks for Donating: ' + scope.donation.amount );
            }
        }

    }
});
