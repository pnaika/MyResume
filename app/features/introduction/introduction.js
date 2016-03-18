(function(){

  'use strict';
  angular.module('myResume.introduction', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/introduction', {
      templateUrl: 'features/introduction/introduction.html',
      controller: 'introductionCtrl',
      controllerAs: 'introCtrl'
    });
  }])

  .controller('introductionCtrl', [function() {
        var vm = this;
        vm.customOne = false;


        vm.toggleCustomOne = function() {
          vm.customOne = vm.customOne === false ? true: false;
        };
  }]);
})();