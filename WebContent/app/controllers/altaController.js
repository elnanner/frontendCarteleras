var app = angular.module("app");//obtenemos la el modulo para poder usarlo

app.controller("altaController", function($scope, $http, $location){//$http ,$location son servicios que importamos
	$scope.lista = [{nombre: "luciano"}, {nombre : "ramiro"}, {nombre:"sara"}];
	
	//functio que guarda un usuario 
	$scope.saveUser = function(){
		alert("saraza");
		$http({
			url: "localhost:8080/backendCarteleras/createUser",
			method: "POST",
			data: $scope.usuario,
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
		}).then(//si todo fue correcto
			function(respuesta){
				$location.path('/');
			}
		)
		
	}
	
});