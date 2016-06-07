(function () {
    'use strict';

    angular
        .module('task.module')
        .factory('TaskApi', TaskApi);

    TaskApi.$inject = ['$http', '$log', '$q'];

    function TaskApi($http, $log, $q) {
        return {
            createTask: createTask
        };

        function createTask (task) {
            $http.post('/api/task/create', task)
                .then( x => console.log(x) )
                .catch( x => console.log(x) );
        }
    }
})();
