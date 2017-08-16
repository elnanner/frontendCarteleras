'use strict';
angular.module('app')
.factory('Board',function($resource){
	return $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
})