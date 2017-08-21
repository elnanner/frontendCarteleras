'use strict';
angular.module('app')
.factory('Board',function($resource){
	var resource =$resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
	var resourceSave = $resource("http://localhost:8080/backendCarteleras/createBoard/");
	var resourceDelete = $resource("http://localhost:8080/backendCarteleras/deleteBoard/:id",{id: "@id"});
	
	var listar = function(){
		return resource.query();
	}
	
	var obtener = function(id){
		return resource.get({id: id});
	}
	
	var guardar = function(data){
		return resourceSave.save({},data);
	}
	
	var borrar = function(id){
		return resourceDelete.remove({id: id});
	}
	
	return{
		list: listar,
		get: obtener,
		save: guardar,
		remove: borrar
	}
})