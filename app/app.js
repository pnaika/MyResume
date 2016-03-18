'use strict';

// Declare app level module which depends on views, and components
angular.module('myResume', [
  'ngRoute',
  'myResume.introduction',
  'myResume.education',
  'myResume.technical-skills',
  'myResume.others',
  'myResume.experience',
  'myResume.acadamic-projects',
  'myResume.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/introduction'});
}]);
