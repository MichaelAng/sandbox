(function () {
    'use strict';

    angular
        .module('sidenav.controller', [])
        .controller('SideNavController', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
            };
        });
})();
