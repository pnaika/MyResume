(function(){
  'use strict';

  angular.module('myResume.acadamic-projects', ['ngRoute'])

      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/acadamic-projects', {
          templateUrl: 'features/acadamic-projects/acadamic-projects.html',
          controller: 'acadamic-projects-Ctrl',
          controllerAs: 'apCtrl'
        });
      }])

      .controller('acadamic-projects-Ctrl', [function() {
          var vm = this;
          vm.customOne = true;
          vm.customOneUG = true;
          vm.customTwo = true;
          vm.customTwoUG = true;
          vm.customThree = true;
          vm.customFour = true;
          vm.customFive = true;
          vm.customSix = true;
          vm.customSeven = true;

          vm.toggleCustomOne = function() {
              vm.customOne = vm.customOne === false ? true: false;
              if(vm.customOne){
                  vm.customTwo = true;
                  vm.customThree = true;
                  vm.customFour = true;
                  vm.customFive = true;
                  vm.customSix = true;
                  vm.customSeven = true;
              }
          };

          vm.toggleCustomOneUG = function() {
              vm.customOneUG = vm.customOneUG === false ? true: false;
              if(vm.customOneUG) {
                  vm.customTwoUG = true;
              }
          };
          vm.toggleCustomTwoUG = function() {
              vm.customTwoUG = vm.customTwoUG === false ? true: false;
          };
          vm.toggleCustomTwo = function() {
              vm.customTwo = vm.customTwo === false ? true: false;
          };

          vm.toggleCustomThree = function() {
              vm.customThree = vm.customThree === false ? true: false;
          };

          vm.toggleCustomFour = function() {
              vm.customFour = vm.customFour === false ? true: false;
          };

          vm.toggleCustomFive = function() {
              vm.customFive = vm.customFive === false ? true: false;
          };

          vm.toggleCustomSix = function() {
              vm.customSix = vm.customSix === false ? true: false;
          };

          vm.toggleCustomSeven = function() {
              vm.customSeven = vm.customSeven === false ? true: false;
          };
      }]);
})();