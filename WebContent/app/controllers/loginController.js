/* var app=angular.module('app', ['ngRoute']);

app.controller('mainController', function($scope){
$scope.error='no error';
});


var app=angular.module('app').controller('loginController', function ($scope){
	
	
	
});*/





app.controller('loginController',['$scope','$location','$rootScope',function($scope, $locationProvider,$rootScope){
	notLogged();
	init();
	$scope.ver=function(){
		if($scope.valor=="hola"){
			$scope.mostrado=false;
			
		}
		else{
			$scope.mostrado=true;
		}
	}
	$scope.tryLogin= function(){
		
		
		
		
		//contra servidor
		if($scope.userNameLogin==$scope.passLogin && $scope.formLogin.$submitted){  //&& $scope.userNameLogin.trim().lenght>0){  //fijarse vacios
			$scope.error='no error';
			//cambiar tipo de usuarip $parent.var?
			$rootScope.userGlobal="logged";
			$locationProvider.path('/');
		
			//notLogged();
		}else{
			$scope.error='error';
			
		}
	};
	
	
	    function init(){
		$scope.userNameLogin='';
		$scope.passLogin='';
	};
	
	function notLogged(){
		alert('logged or not');
		if($rootScope.userGlobal!=null){
			$locationProvider.path('/');
			
		}
	};
	
}]);
