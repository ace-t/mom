'use strict';

/**
 * @ngdoc overview
 * @name managerOfMoneyApp
 * @description
 * # managerOfMoneyApp
 *
 * Main module of the application.
 */
angular
  .module('managerOfMoneyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngProgress'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    console.log("config");
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    });
    $urlRouterProvider.otherwise('/main');
  })
  .run(function($rootScope, $stateParams, $state){
     console.log("run은 뭐하는 녀석?!"+$stateParams);
     $rootScope.$state = $state;
  });
