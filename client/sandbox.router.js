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
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'components/header/header.tmpl.html',
                        controller: 'HeaderController',
                        controllerAs: 'HeaderController'
                    }
                }
            })
            .state('home.todo', {
                url: '/',
                views: {
                    'header@': {
                        templateUrl: 'components/todo-header/todo-header.tmpl.html',
                        controller: 'TodoHeaderController',
                        controllerAs: 'TodoHeaderController'
                    },
                    '@' : {
                        templateUrl: 'components/todo/todo.tmpl.html',
                        controller: 'TodoController',
                        controllerAs: 'TodoController'
                    }
                }
            })
            .state('home.about', {
                url: '/about',
                views: {
                    '@' : {
                        templateUrl: 'components/about/about.tmpl.html',
                        controller: 'AboutController',
                        controllerAs: 'AboutController'
                    }
                }
            });
    }

})();
