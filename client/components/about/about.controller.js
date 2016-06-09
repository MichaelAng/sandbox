(function () {
    'use strict';

    angular
        .module('about.module')
        .controller('AboutController', AboutController);

    AboutController.$inject = [];
    function AboutController () {
        var vm = this;
        vm.hello = 'world';
    }
})();

