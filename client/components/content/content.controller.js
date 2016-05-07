(function () {
    'use strict';

    angular
        .module('content.controller', [])
        .controller('ContentController', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.toggleLeft = function () {
            $mdSidenav('left')
                .toggle()
                .then(function () {

                 });
            };
        });
})();
