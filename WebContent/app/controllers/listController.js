var app = angular.module("app");//obtenemos la el modulo para poder usarlo
app.controller('listController', function($scope, $resource, $location, $http, $route){

		//Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
	//	if($locationProvider.path() == "/" || $locationProvider.path()=="/home"){
//			$scope.board = Board.get({id: "25"});
//		}else{
//			$scope.board = Board.get({id: $routeParams.id});
//		}
	$http({
	    method: 'GET', 
	    url: 'http://localhost:8080/backendCarteleras/users'
	  }).success(function(data, status, headers, config) {
	      $scope.users=data;
	  }).error(function(data, status, headers, config) {
	      alert("Ha fallado la petición. Estado HTTP:"+status);
	  });
		
	$scope.deleteUser = function(id){
		//var id = {idUser: $scope.user.id };
		
		alert(id);
		$http({
			url: "http://localhost:8080/backendCarteleras/deleteUser",
			method: "DELETE",
			data: {idUser: id},
			headers: {"Content-Type": "application/json"}
		}).then(//si todo fue correcto
			function(respuesta){
				//$location.path('/userList');
				$route.reload();
			}
		)
	}

});

