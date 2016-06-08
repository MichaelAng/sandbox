(function () {
    'use strict';

    angular.module('task.module')
        .factory('TaskApi', TaskApi);

    TaskApi.$inject = ['$http', '$log', '$q', 'Task'];

    function TaskApi($http, $log, $q, Task) {
        return {
            createTask: createTask,
            deleteTask: deleteTask,
            getTaskById: getTaskById,
            getTaskList: getTaskList,
            updateTask: updateTask
        };

        function createTask (task) {
            return $http.post('/api/tasks/create', task)
                .then( x => Task.addToTaskList(x.data) )
                .catch( x => console.log(x) );
        }

        function deleteTask (taskId) {
            return $http.delete('/api/tasks/'+ taskId)
                .then( x =>  Task.removeFromTaskList(x.data) )
                .catch( x => console.log(x) );
        }

        function getTaskById (taskId) {
            return $http.get('/api/tasks/'+ taskId)
                .then( x => Task.setTask(x.data) )
                .catch( x => console.log(x) );
        }

        function getTaskList () {
            return $http.get('/api/tasks/')
                .then( (x) => {
                    return Task.setTaskList(x.data);
                })
                .catch( x => console.log(x) );
        }
        // When i update a task i should edit it to the list of tasks
        function updateTask (taskId, payload) {
            return $http.put('/api/tasks/' + taskId, payload)
                .then( x => Task.updateTaskList(x.data) )
                .catch( x => console.log(x) );
        }
    }
})();
