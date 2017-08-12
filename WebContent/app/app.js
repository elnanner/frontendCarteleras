var app=angular.module('app', ['ngRoute', 'ngResource']);
// create the controller and inject Angular's $scope, aca iba el mainController
app.controller('mainController', function($scope){

});

app.run(['$rootScope', '$location','LoginService','UserService','OtherOperations', function ($rootScope, $locationProvider, LoginService, UserService,OtherOperations) {
		console.log("dentro del metodo run");
		//debugger;
		$rootScope.userGlobal =null;
		$rootScope.userPerfil =null;
		$rootScope.$on('$routeChangeStart', function(e, next, current){
			console.log("ruta cambi\363 hacia: "+ next.originalPath+" usuario:"+$rootScope.userGlobal);
			
		})
		//LoginService.logout();//reseteo la sesion al arrancar
	   
 }]);

