(function(){

  'use strict';
  angular.module('myResume.others', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/others', {
      templateUrl: 'features/others/others.html',
      controller: 'othersCtrl',
      controllerAs: 'otCtrl'
    });
  }])

  .controller('othersCtrl', [function() {
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