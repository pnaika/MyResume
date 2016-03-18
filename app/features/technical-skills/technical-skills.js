(function(){
  'use strict';

  angular.module('myResume.technical-skills', ['ngRoute'])

      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/technical-skills', {
          templateUrl: 'features/technical-skills/technical-skills.html',
          controller: 'technical-skills-Ctrl',
          controllerAs: 'tsCtrl'
        });
      }])

      .controller('technical-skills-Ctrl', [function() {
          var vm = this;
          vm.customOne = true;
          vm.customTwo = true;
          vm.customThree = true;

          vm.toggleCustomOne = function() {
              vm.customOne = vm.customOne === false ? true: false;
          };

          vm.toggleCustomTwo = function() {
              vm.customTwo = vm.customTwo === false ? true: false;
          };

          vm.toggleCustomThree = function() {
              vm.customThree = vm.customThree === false ? true: false;
          };
      }]);
})();