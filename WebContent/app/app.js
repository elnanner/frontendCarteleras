 var app=angular.module('app', ['ngRoute', 'ngResource']);
// configure our routes
 alert("rrrraaa");
 
app.config(function($routeProvider ,$locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/boards/contentBoard.html',
            controller : 'boardController' /*el controller se declara acá o en la vista, no en ambos*/
        }
        )
        .when('/home', {
        	templateUrl : 'pages/boards/contentBoard.html',
            controller : 'boardController'/*el controller se declara acá o en la vista, no en ambos*/
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
    //OJO QUE ESAN EN EL CONTROLADOR DE TOP MENU PERO NI BOLA PARECE...
        
         .when('/createUser',{
	    	templateUrl: 'pages/userOperations/createUser.html',
	    	controller: 'topMenuOptionController'
	    })
	    .when('/userList',{
	    	templateUrl: 'pages/userOperations/listUsers.html',
	    	controller: 'topMenuOptionController'
	    })
	     .when('/listBoard',{
	    	templateUrl: 'pages/userOperations/listBoards.html',
	    	controller: 'listController'
	    })
	    
	    
        
        //FIN OJO
        //para mostrar las pizarras en particular
        .when('/boards/:id?',{
        	templateUrl: 'pages/boards/contentBoard.html',
        	controller: 'boardController'
        })
        .otherwise({
        	redirectTo: "/"
        })
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
           alert("main ctrl");
});

app.run(['$rootScope', '$location','LoginService','UserService', function ($rootScope, $locationProvider, LoginService, UserService) {
        alert("ini app?");
		$rootScope.userGlobal =null;
		$rootScope.userPerfil =null;
		alert("app init");
		//LoginService.logout();//reseteo la sesion al arrancar
	   
 }]);

