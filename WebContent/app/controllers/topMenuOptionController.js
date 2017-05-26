/*
app.config(function($routeProvider ,$locationProvider) {
	    $routeProvider
	    .when('/createUsers',{
	    	templateUrl: 'pages/userOperations/createUser.html',
	    	controller: 'topMenuOptionController'
	    })
	    .when('/userList',{
	    	templateUrl: 'pages/userOperations/listUsers.html',
	    	controller: 'topMenuOptionController'
	    })
	});
*/
var app = angular.module("app");//obtenemos la el modulo para poder usarlo
app.controller("topMenuOptionController", function($scope, $http, $location, $resource){
	$scope.createUser = function(){
		alert(" createUser Nuevo");
		/*var data={"user": $scope.name, "pass": $scope.pass, "mail": $scope.mail, "type": $scope.type};	
		    alert(JSON.stringify(data));
	      /*  $http.post("http://localhost:8080/backendCarteleras/createUser/", data)
	        	.success(function(response, status) {
	        		$scope.mensajeError='';
	        		
	    			$locationProvider.path('/listUsers');
	        	 }).error(function(response){
	        		 
	        		 $scope.mensajeError='error';
	        	
	        	 }); 
		*/
		 
	}
	$scope.saludar = function(){
		alert("saludando");
	};
	
	$scope.saveUser = function(){
		alert("usuario ingresado correctamente");
		
		$http({
			url: "http://localhost:8080/backendCarteleras/createUser",
			method: "POST",
			data: $scope.usuario,
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
		}).then(//si todo fue correcto
			function(respuesta){
				$location.path('/');
			}
		)
		
		
	};
	
	
		$http({
		    method: 'GET', 
		    url: 'http://localhost:8080/backendCarteleras/users'
		  }).success(function(data, status, headers, config) {
		      $scope.users=data;
		  }).error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  });
			
		
});
