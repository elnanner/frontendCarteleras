var app=angular.module('app', ['ngRoute', 'ngResource', 'ngCookies']);
// create the controller and inject Angular's $scope, aca iba el mainController
app.controller('mainController', function($scope){

});

app.run(['$rootScope', '$location','LoginService','UserService','OtherOperations','$cookies', function ($rootScope, $locationProvider, LoginService, UserService,OtherOperations, $cookies) {
		console.log("dentro del metodo run");
		//debugger;
		//$rootScope.userGlobal =null;
		//$rootScope.userPerfil =null;
		$rootScope.$on('$routeChangeStart', function(e, next, current){
			console.log("ruta cambi\363 hacia: "+ next.originalPath+" usuario:"+$rootScope.userGlobal);
			var logged = $cookies.get('userGlobal');
			if(logged == 'logged'){
				alert('usuario logueado');
				$rootScope.userPerfil = $cookies.get('userPerfil');
				$rootScope.userGlobal = $cookies.get('userGlobal');
			}
			alert($rootScope.userGlobal);
			
			
		})
		//LoginService.logout();//reseteo la sesion al arrancar
	   
 }]);

