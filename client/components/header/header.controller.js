(function () {
    'use strict';

    angular
        .module('header.module')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = [];
    function HeaderController () {
        var vm = this;
    }
})();

