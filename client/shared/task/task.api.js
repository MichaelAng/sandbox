(function () {
    'use strict';

    angular.module('task.module')
        .factory('TaskApi', TaskApi);

    TaskApi.$inject = ['$http', '$log', '$q', 'Task'];

    function TaskApi($http, $log, $q, Task) {
        return {
            createTask: createTask
        };

        function createTask (task) {
            return $http.post('/api/task/create', task)
                .then( x => Task.setTask(x))
                .catch( x => console.log(x) );
        }
    }
})();
