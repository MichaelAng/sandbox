(function () {
    'use strict';

    angular.module('task.module')
        .factory('Task', Task);

    Task.$inject = ['$filter'];
    function Task($filter) {
        var currentTask = {};
        var filterOptions = {};
        var originalTaskList = [];
        var taskList = [];

        return {
            // Getter/Setters
            getTask: getTask,
            getTaskList: getTaskList,
            destroyTask: destroyTask,
            destroyTaskList: destroyTaskList,
            setTask: setTask,
            setTaskList: setTaskList,

            // Manipulators
            addToTaskList: addToTaskList,
            filterTaskList: filterTaskList,
            removeFromTaskList: removeFromTaskList,
            updateTaskList: updateTaskList
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
            setTaskList([]g);
        }

        function setTask (task) {
            angular.copy(task, currentTask);
        }

        function setTaskList (tasks) {
            angular.copy(tasks, taskList);
            angular.copy(tasks, originalTaskList);
        }

        function addToTaskList (task) {
            taskList.push(task);
            originalTaskList.push(task);
        }

        function filterTaskList (expression) {
            var filteredTaskList = $filter('filter')(originalTaskList, expression, 'strict');
            angular.copy(filteredTaskList, taskList);
        }

        function removeFromTaskList (task) {
            taskList.splice(taskList.map(x => x._id).indexOf(task._id), 1);
            originalTaskList.splice(originalTaskList.map(x => x._id).indexOf(task._id), 1);
        }

        function updateTaskList (task) {
            taskList.splice(taskList.map(x => x._id).indexOf(task._id), 1, task);
            originalTaskList.splice(originalTaskList.map(x => x._id).indexOf(task._id), 1, task);
        }
    };
})();
