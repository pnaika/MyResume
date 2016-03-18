/**
 * Created by Prashanth on 3/6/2016.
 */
(function(){
    'use strict';

    angular.module('myResume')
        .controller('myFooterController',myFooterController);

    function myFooterController(){
        return {
            restrict:'E',
            templateUrl: 'components/footer/footer.html'
        };
    }
})();