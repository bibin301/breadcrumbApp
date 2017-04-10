(function() {
  'use strict';
  angular
    .module(appObj.id)
    .config(appConfig);
  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'js/components/login/login.html',
        controller: 'loginCtrl',
        ncyBreadcrumb: {
          skip: true
        },
      }).state('dashboard', {
        url: '/dashboard',
        templateUrl: "js/components/dashboard/dashboard.html",
        controller: 'dashboardCtrl',
        ncyBreadcrumb: {
          label: 'Dashboard'
        },
      }).
    state('dashboard.address', {
      url: 'addressForm',
      templateUrl: "js/components/addressForm/address.html",
      controller: 'addressCtrl',
      ncyBreadcrumb: {
        label: 'Address'
      },
    }).state('dashboard.list', {
      url: '/list',
      templateUrl: "js/components/list/list.html",
      controller: 'listCtl',
      ncyBreadcrumb: {
        label: 'List'
      },
    });
  }

})();
