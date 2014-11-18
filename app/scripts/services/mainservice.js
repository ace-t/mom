'use strict';

/**
 * @ngdoc service
 * @name managerOfMoneyApp.mainService
 * @description
 * # mainService
 * Service in the managerOfMoneyApp.
 */
angular.module('managerOfMoneyApp')
  .service('mainService',['momRequestFactory','ngProgress','momRestfulApi', 
  	function mainService(momRequestFactory, ngProgress, momRestfulApi) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getMessageList = function(successCallback){
    	// factory?
    	var request = momRequestFactory.createRequest('msgList', 'list', '');
    	callRestfulApi(request, 'list', successCallback);


    }

    function callRestfulApi(request, method, successCallback){
        ngProgress.start();
          momRestfulApi[method](
          	request,
            function(response) {
              ngProgress.complete();
              successCallback(response);
            },
            function(error){
              ngProgress.complete();
              console.log(error);

            }
         );
      };

  }]);

