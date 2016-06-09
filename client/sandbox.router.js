(function () {
    'use strict';

    angular
        .module('sandbox.router', [
            'ui.router'
        ])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /welcome
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                abstract: true
            })
            .state('home.todo', {
                url: '/',
                views: {
                    'header@': {
                        templateUrl: 'components/todo-header/todo-header.tmpl.html',
                        controller: 'HeaderController',
                        controllerAs: 'HeaderController'
                    },
                    '@' : {
                        templateUrl: 'components/content/content.tmpl.html',
                        controller: 'ContentController',
                        controllerAs: 'ContentController'
                    }
                }
            });
    }

})();
