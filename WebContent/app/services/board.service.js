'use strict';
angular.module('app')
.factory('Board',function($resource){
	var resource =$resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
	var resourceSave = $resource("http://localhost:8080/backendCarteleras/createBoard/");
	
	var listar = function(){
		return resource.query();
	}
	
	var obtener = function(id){
		return resource.get({id: id});
	}
	
	var guardar = function(data){
		return resourceSave.save({},data);
	}
	
	return{
		list: listar,
		get: obtener,
		save: guardar
	}
})