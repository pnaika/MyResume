
/**
 * Created by Prashanth on 3/6/2016.
 */
(function(){
    'use strict';

    angular.module('myResume')
        .directive('myFooter',myFooter);

    function myFooter(){
        return {
            restrict:'E',
            templateUrl: 'components/footer/footer.html'
        };
    }
})();