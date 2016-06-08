(function () {
    'use strict';

    angular.module('task.module')
        .factory('Task', Task);

    Task.$inject = [];
    function Task() {
        var taskList = [];
        var currentTask = {};

        return {
            tasks: taskList,
            currentTask: currentTask,

            getTask: getTask,
            getTaskList: getTaskList,
            destroyTask: destroyTask,
            destroyTaskList: destroyTaskList,
            setTask: setTask,
            setTaskList: setTaskList
            // Add filter tasklist
            // Add update task
            // remove task
            // update task
            // Why do i have a current task?
        };

        function getTask () {
            return currentTask;
        }

        function getTaskList () {
            return taskList;
        }

        function destroyTask () {
            setTask({});
        }

        function destroyTaskList () {
            setTaskList({});
        }

        function setTask (task) {
            angular.copy(task, currentTask);
        }

        function setTaskList (tasks) {
            angular.copy(tasks, taskList);
        }

        add
    };
})();
