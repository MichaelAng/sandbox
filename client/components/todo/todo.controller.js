(function () {
    'use strict';

    angular
        .module('content.module')
        .controller('ContentController', ContentController);

        ContentController.$inject = ['TaskApi', 'Task'];
        function ContentController(TaskApi, Task) {
            var vm = this;
            vm.newTask = '';
            vm.tasks = Task.getTaskList();

            vm.createTask = createTask;
            vm.deleteTask = deleteTask;
            vm.updateTask = updateTask;

            activate();

            function activate () {
                TaskApi.getTaskList();
            }

            function createTask () {
                let payload = { name: vm.newTask };

                return TaskApi.createTask(payload)
                    .then( () => { return vm.newTask = ''; });
            }

            function deleteTask (taskId) {
                return TaskApi.deleteTask(taskId);
            }

            function updateTask (task) {
                let payload = {
                    name: task.name,
                    isDone: task.isDone
                };

                return TaskApi.updateTask(task._id, payload);
            }
        }
})();
