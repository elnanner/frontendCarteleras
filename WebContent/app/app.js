 var app=angular.module('app', ['ngRoute']);
// configure our routes
 
 
app.config(function($routeProvider ,$locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/boards/contentBoard.html',
            controller : 'contentBoardController' /*el controller se declara acá o en la vista, no en ambos*/
        }
        )
        .when('/home', {
            templateUrl : 'pages/boards/contentBoard.html',
            controller : 'contentBoardController' /*el controller se declara acá o en la vista, no en ambos*/
        }
        )
        // route for the about page
        .when('/login', {
            templateUrl : 'pages/login/login.html',
            controller  : 'loginController'
        })

        // route for the contact page
        .when('/alta', {
            templateUrl : 'pages/alta.html',
            controller  : 'altaController'
        })
        .when('/boards/:id?',{
        	templateUrl: 'pages/boards/contentboard.html',
        	//controller: 'contentBoardController'
        })
        .otherwise({ redirectTo: '/' 
        });
         
    //operaciones generales login logout home 
    

    // use the HTML5 History API
   /* $locationProvider.html5Mode({
    	  enabled: true,
    	  requireBase: false
    	});*/
   //$locationProvider.html5Mode(true);
   });

// create the controller and inject Angular's $scope, aca iba el mainController
app.controller('mainController', function($scope){

});

app.run(['$rootScope', function ($rootScope) {

	$rootScope.userGlobal =null;
	$rootScope.userPerfil =null;
	
	
 }]);



