/* var app=angular.module('app', ['ngRoute']);

app.controller('mainController', function($scope){
$scope.error='no error';
});


var app=angular.module('app').controller('loginController', function ($scope){
	
	
	
});*/





app.controller('loginController',['$scope',function($scope){
	notLogged();
	init();

	$scope.tryLogin= function(){
		
		
		//contra servidor
		if($scope.userNameLogin==$scope.passLogin){  //&& $scope.userNameLogin.trim().lenght>0){  //fijarse vacios
			$scope.error='no error';
			//cambiar tipo de usuarip $parent.var?
			$scope.user="logged";
			notLogged();
		}else{
			$scope.error='error';
		}
	};
	
	
	    function init(){
		$scope.error='no error';
		$scope.userNameLogin='';
		$scope.passLogin='';
	};
	
	function notLogged(){
		if($scope.user=="logged"){
			alert("user es ".concat($scope.user));
			//$window.location.href = '/';
			//$window.location.reload();
			
			alert("fin redireccion ");
		}
	};
	
}]);
