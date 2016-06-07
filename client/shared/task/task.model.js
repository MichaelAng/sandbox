(function () {
    'use strict';

    angular.module('task.module')
        .factory('Task', Task);

    Task.$inject = [];
    function Task() {
        var tasks = [];
        var currentTask = {};

        return {
            tasks: tasks,
            currentTask: currentTask,

            getTask: getTask,
            getTasks: getTasks,
            destroyTask: destroyTask,
            destroyTasks: destroyTasks,
            setTask: setTask,
            setTasks: setTasks
        };

        function getTask (task) {
            return currentTask;
        }

        function getTasks (taskList) {
            return tasks;
        }

        function destroyTask () {
            setTask({});
        }

        function destroyTasks () {
            setTasks({});
        }

        function setTask (task) {
            angular.copy(task, currentTask);
        }

        function setTasks (taskList) {
            angular.copy(taskList, tasks);
        }
    };
})();
