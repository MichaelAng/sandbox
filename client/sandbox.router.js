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
                        controller: 'HeaderController'
                    },
                    '' : {
                        templateUrl: 'components/content/content.tmpl.html',
                        controller: 'ContentController'
                    }
                }
            })
            .state('home.welcome', {
                url: '/'
            });
    }

})();
