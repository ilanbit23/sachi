function stageController($scope) {
    $scope.pw1 = 'password';
}
angular.module('myApp.directives', [])
    .directive('pwCheck', [function () {
        return {
            templateUrl: 'components/login/login.html',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var firstPassword = '#' + attrs.pwCheck;
                elem.add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        // console.info(elem.val() === $(firstPassword).val());
                        ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword).val());
                    });
                });
            }
        }
    }]);

