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
            getTasks: getTasks,
            updateTask: updateTask
        };

        function createTask (task) {
            return $http.post('/api/tasks/create', task)
                .then( x => Task.setTask(x.data) )
                .catch( x => console.log(x) );
        }

        function deleteTask (taskId) {
            return $http.delete('/api/tasks/'+ taskId)
                .then( x =>  Task.setTasks(x.data) )
                .catch( x => console.log(x) );
        }

        function getTaskById (taskId) {
            return $http.get('/api/tasks/'+ taskId)
                .then( x => Task.setTask(x.data) )
                .catch( x => console.log(x) );
        }

        function getTasks () {
            return $http.get('/api/tasks/')
                .then( (x) => {
                    return Task.setTasks(x.data);
                })
                .catch( x => console.log(x) );
        }

        function updateTask (taskId, payload) {
            return $http.put('/api/tasks/' + taskId, payload)
                .then( x => Task.setTask(x.data) )
                .catch( x => console.log(x) );
        }

    }
})();
