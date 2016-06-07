(function () {
    'use strict';

    angular
        .module('content.module')
        .controller('ContentController', ContentController);

        ContentController.$inject = ['TaskApi', 'Task'];
        function ContentController(TaskApi, Task) {
            var vm = this;
            vm.task = Task.getTask();
            vm.updateTask = updateTask;

            TaskApi.createTask();

            function updateTask () {
                Task.setTask({win:'I wanna win'})
            }

        }
})();
