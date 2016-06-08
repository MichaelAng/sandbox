(function () {
    'use strict';

    angular
        .module('header.module')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['Task'];
    function HeaderController (Task) {
        var vm = this;
        vm.search = { name: '' };

        vm.filterTaskListByName = filterTaskListByName;

        function filterTaskListByName() {
            Task.filterTaskList(vm.search);
        }
    }
})();

