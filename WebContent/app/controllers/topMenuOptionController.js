app.config(function($routeProvider ,$locationProvider) {
	    $routeProvider
	    .when('/createUser',{
	    	templateUrl: 'pages/userOperations/createUser.html',
	    	controller: 'topMenuOptionController'
	    })
	    .when('/userList',{
	    	templateUrl: 'pages/userOperations/listUsers.html',
	    	controller: 'topMenuOptionController'
	    })
	});

app.controller('topMenuOptionController',['$scope','$htpp',function($scope,$http){
	

	
	$scope.createUser= function(){
		alert(" createUser");
		var data={"user": $scope.name, "pass": $scope.pass, "mail": $scope.mail, "type": $scope.type};	
		    alert(JSON.stringify(data));
	      /*  $http.post("http://localhost:8080/backendCarteleras/createUser/", data)
	        	.success(function(response, status) {
	        		$scope.mensajeError='';
	        		
	    			$locationProvider.path('/listUsers');
	        	 }).error(function(response){
	        		 
	        		 $scope.mensajeError='error';
	        	
	        	 }); 
		*/
		 
	};
	
	
	
	
	
	
}]);
