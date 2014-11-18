'use strict';

/**
 * @ngdoc function
 * @name managerOfMoneyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the managerOfMoneyApp
 */
angular.module('managerOfMoneyApp')
  .controller('MainCtrl', function ($scope, mainService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    mainService.getMessageList(process);

    function process(response){
    	$scope.messageList = response;
    }

  });
