(function(){
    'use strict';

    angular.module('myResume.education', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/education', {
                templateUrl: 'features/education/education.html',
                controller: 'educationCtrl',
                controllerAs: 'eduCtrl'
            });
        }])

        .controller('educationCtrl', [function() {
            var vm = this;
            vm.customOne = true;
            vm.customTwo = true;

            vm.toggleCustomOne = function() {
                vm.customOne = vm.customOne === false ? true: false;
            };

            vm.toggleCustomTwo = function() {
                vm.customTwo = vm.customTwo === false ? true: false;
            };
        }]);
})();