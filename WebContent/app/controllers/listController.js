var app = angular.module("app");//obtenemos la el modulo para poder usarlo
app.controller('listController', 
		['$scope', '$resource', '$location', '$http', '$route', 'Board', function($scope, $resource, $location, $http, $route, Board){
	
		//Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
	//	if($locationProvider.path() == "/" || $locationProvider.path()=="/home"){
//			$scope.board = Board.get({id: "25"});
//		}else{
//			$scope.board = Board.get({id: $routeParams.id});
//		}
	$http({
	    method: 'GET', 
	    url: 'http://localhost:8080/backendCarteleras/users'
	  })
	  .success(function(data, status, headers, config) {
	      $scope.users=data;
	  })
	  .error(function(data, status, headers, config) {
	      alert("Ha fallado la petición. Estado HTTP:"+status);
	  });
		
	$scope.deleteUser = function(id){
		//var id = {idUser: $scope.user.id };
		
		alert(id);
		$http({
			url: "http://localhost:8080/backendCarteleras/deleteUser",
			method: "DELETE",
			data: {idUser: id, token: localStorage.getItem('tokenSeguridad')},
			headers: {"Content-Type": "application/json"}
		}).then(//si todo fue correcto
			function(respuesta){
				//$location.path('/userList');
				$route.reload();
			}
		)
	}
	//litsa pizarras
	$scope.boards = Board.list();
	
	//guarda una pizarra
	$scope.saveBoard = function(idFatherBoard, name, description){
		alert("pizarra: "+idFatherBoard+' con titulo: '+name+' tiene descripcion: '+description);
		var data = {'idFatherBoard': idFatherBoard, 'name': name, 'description': description};
		Board.save(data);
		$route.reload();//recarga la página
	}
	
	//borrado de carteleras
	$scope.deleteBoard = function(idBoard){
		var result = confirm("¿Está seguro que quiere borrar la pizarra? ");
		if(result){
			
			Board.remove(idBoard);
			$route.reload();//recarga la página 	
			alert('borrado exitoso');
			
		}
	}

}]);

