(function () {
    'use strict';

    angular
        .module('content.module')
        .controller('ContentController', ContentController);

        ContentController.$inject = ['TaskApi', 'Task'];
        function ContentController(TaskApi, Task) {
            var vm = this;
            vm.tasks = Task.getTasks();
            vm.createTask = createTask;

            activate();

            function activate() {
                TaskApi.getTasks();
            }

            function createTask() {
                return TaskApi.createTask({name: 'get it done'});
            }

        }
})();
