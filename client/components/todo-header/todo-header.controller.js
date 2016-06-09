(function () {
    'use strict';

    angular
        .module('todoHeader.module')
        .controller('TodoHeaderController', TodoHeaderController);

    TodoHeaderController.$inject = ['Task'];
    function TodoHeaderController (Task) {
        var vm = this;
        vm.search = { name: '' };

        vm.filterTaskListByName = filterTaskListByName;

        function filterTaskListByName() {
            Task.filterTaskList(vm.search);
        }
    }
})();

