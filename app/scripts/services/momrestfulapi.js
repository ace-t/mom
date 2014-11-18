'use strict';

/**
 * @ngdoc service
 * @name managerOfMoneyApp.momRestfulApi
 * @description
 * # momRestfulApi
 * Factory in the managerOfMoneyApp.
 */
angular.module('managerOfMoneyApp')
  .factory('momRestfulApi', function ($resource) {

   var prefixUrl="";

    // Public API here
    return $resource(
     // prefixUrl + '/:area/:resource/:id',
      prefixUrl + '/:area/:resource/:id',
      {
        area : "@area",
        resource : "@resource",
        id : "@id"
      },
      {
        'get': {method:'GET'},
        'list' : {method:'GET',isArray:true},
        'save': {method:'POST'},
        'update':{method:'PUT'},
        'delete':{method:'DELETE'},
        'login': {method:'POST'}

      });

});
