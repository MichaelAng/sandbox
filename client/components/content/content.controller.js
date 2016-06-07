(function () {
    'use strict';

    angular
        .module('content.module')
        .controller('ContentController', ContentController);

        ContentController.$inject = ['TaskApi'];
        function ContentController(TaskApi) {
            TaskApi.createTask(1)
                .then(function () {
                    console.log(x);
                })
        }
})();
