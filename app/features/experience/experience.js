(function(){
  'use strict';

  angular.module('myResume.experience', ['ngRoute'])

      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/experience', {
          templateUrl: 'features/experience/experience.html',
          controller: 'experienceCtrl',
          controllerAs: 'expCtrl'
        });
      }])

      .controller('experienceCtrl', [function() {
        var vm = this;
        vm.customOne = true;
        vm.customTwo = true;
        vm.customThree = true;
        vm.customFour = true;
        vm.customFive = true;

        vm.toggleCustomOne = function() {
          vm.customOne = vm.customOne === false ? true: false;
        };

        vm.toggleCustomTwo = function() {
          vm.customTwo = vm.customTwo === false ? true: false;
        };

        vm.toggleCustomThree = function() {
          vm.customThree = vm.customThree === false ? true: false;
          if(vm.customThree){
            vm.customFour = true;
            vm.customFive = true;
          }
        };

        vm.toggleCustomFour = function() {
          vm.customFour = vm.customFour === false ? true: false;
        };

        vm.toggleCustomFive = function() {
          vm.customFive = vm.customFive === false ? true: false;
        };
      }]);
})();