'use strict';

angular.module('myResume.version', [
  'myResume.version.interpolate-filter',
  'myResume.version.version-directive'
])

.value('version', '0.1');
