'use strict';

/**
 * @ngdoc service
 * @name managerOfMoneyApp.momRequestFactory
 * @description
 * # momRequestFactory
 * Factory in the managerOfMoneyApp.
 */
angular.module('managerOfMoneyApp')
  .factory('momRequestFactory', function () {
    // Service logic
    // ...
    var createRequest = function(area, resource, id, request){
    	console.log("createRequest");
    	var reqObject = {
    		"area" : area,
    		"resource" : resource,
    		"id" : id
    	}

    	if(request){
    		for(var key in request){
    			reqObject[key] = request[key];
    		}
    	}

    	return reqObject;
    }

    //var meaningOfLife = 42;

    // Public API here
    return {
    	createRequest : createRequest
      /*someMethod: function () {
        return meaningOfLife;
      }*/

    };
  });
