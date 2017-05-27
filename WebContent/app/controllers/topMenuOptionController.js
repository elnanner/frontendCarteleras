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
		/*
		 * esto es de listController, lo paso allá
		 * $http({
		    method: 'GET', 
		    url: 'http://localhost:8080/backendCarteleras/users'
		  }).success(function(data, status, headers, config) {
		      $scope.users=data;
		  }).error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  });
			
		*/
});
