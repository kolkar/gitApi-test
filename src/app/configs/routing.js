export default function routing($stateProvider, $urlRouterProvider, $locationProvider,$qProvider) {
    "ngInject";
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state(require('../components/searchOfRep'));

    $qProvider.errorOnUnhandledRejections(false);
}

