(function () {
    'use strict';
    angular.module('sandboxApp',[])
        .controller('ctrl', ctrl);

    ctrl.$inject = ['$scope'];
    function ctrl($scope) {
        $scope.value = 2;
    }
})();
