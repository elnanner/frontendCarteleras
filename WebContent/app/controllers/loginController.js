/* var app=angular.module('app', ['ngRoute']);

app.controller('mainController', function($scope){
$scope.error='no error';
});


var app=angular.module('app').controller('loginController', function ($scope){
	
	
	
});*/





app.controller('loginController',['$scope','$http','$location','$rootScope',function($scope,$http, $locationProvider,$rootScope){
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
		
		
		
		/*
		//contra servidor
		if($scope.userNameLogin==$scope.passLogin && $scope.formLogin.$submitted){  //&& $scope.userNameLogin.trim().lenght>0){  //fijarse vacios
			$scope.error='no error';
			//cambiar tipo de usuarip $parent.var?
			$rootScope.userGlobal="logged";
			$locationProvider.path('/');
		
			//notLogged();
		}else{
			$scope.error='error';
			
		}*/
		 
		
		
		/* var data = $.param({
	            json: JSON.stringify({
	                user: $scope.userNameLogin,
	                pass: $scope.passLogin
	            })
	        });*/
		//var data={"user": "prof1", "pass":"prof1"};
		var data={"user": $scope.userNameLogin, "pass": $scope.passLogin};
		    alert(JSON.stringify(data));
	        $http.post("http://localhost:8080/backendCarteleras/tryLogin/", data)
	        	.success(function(response, status) {
	        		$scope.error='no error';
	        		$rootScope.userPerfil=response;
	        		//alert(JSON.stringify(response));
	    			$rootScope.userGlobal="logged";
	    			$locationProvider.path('/');
	        	 }).error(function(response){
	        		 /*alert(response.status);
	        		 if(response.status==404){
	        			 $scope.error='error';
	        		 }else{//otro error
	        		 alert("errour");
	        		 $scope.mensaje = "algo anduvo mal";
	        		 }*/
	        		 
	        		 
	        		 $scope.error='error';
	        		 //VER STATUS RESPUESTA PORQUE TODO ES UNDEFINED
	        	 }); 
		
		 
	};
	
	
	    function init(){
		$scope.userNameLogin='';
		$scope.passLogin='';
	};
	
	function notLogged(){
	//	alert('logged or not');
		if($rootScope.userGlobal!=null){
			$locationProvider.path('/');
			
		}
	};
	
}]);
