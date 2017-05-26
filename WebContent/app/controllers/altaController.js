
app.controller('altaController',['$scope','$location', '$rootScope', 'LoginService',function($scope,$locationProvider,$rootScope, UserService){
	alert("in alta controller");
	$scope.mensaje = '';
	$rootScope.userPerfil='';
	  $scope.login = function(){
	   // console.log('Usuario: ' + $scope.userNameLogin);
	   //console.log('Password: ' + $scope.passLogin);

	    LoginService.login('administrativeAltaController','ad' ,'mail@nuevoAdminAltaCOntroller.com','administrative',$rootScope)//$scope.userNameLogin, $scope.passLogin,$rootScope)
	    .then(function(){
	      $scope.mensaje = ''; //reset error message
	     // $rootScope.userGlobal="logged";
	      
	      $locationProvider.path('/');
	    })
	    .catch(function(){
	      $scope.mensaje = 'no pudo darse de alta el usuario =(';
	    });
	  }
	}]);

/*var app = angular.module("app");//obtenemos la el modulo para poder usarlo

app.controller("altaController", function($scope, $http, $location){//$http ,$location son servicios que importamos
	//ej {"user": "administrative", "pass": "ad", "mail": "mail@nuevoAdmin.com", "type": "administrative"}
	alert("haaaaaaaaaaaaaa");
	$scope.lista = [{nombre: "luciano"}, {nombre : "ramiro"}, {nombre:"sara"}];
	$scope.user=[{"user": "ejAngular", "pass": "ejAngular", "mail": "mail@nuevoEjAngularcom", "type": "administrative"}];
	//functio que guarda un usuario 
$scope.saveUser = function(){
		alert("saraza");
		$http({
			url: "http://localhost:8080/backendCarteleras/createUser/",  //la url!
			method: "PUT", //es put, no post je
			//data: $scope.usuario,
			data: $scope.user,
			headers: {'Content-Type': 'application/json;charset=utf-8;'}//"Content-Type": "application/x-www-form-urlencoded"}
		}).then(//si todo fue correcto
			function(respuesta){
				$location.path('/');
			}
		)
		
	}
	
});*/