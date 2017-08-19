
// configure our routes
console.log("estamos en routes.js")

angular.module('app')
.config(function($routeProvider ,$locationProvider) {
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
        // route for the about page
        .when('/logout', {
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
	    .when('/board/addBoard', {
	    	templateUrl: 'pages/userOperations/addBoard.html',
	    	controller: 'boardController'
	    })
	    .when('/board/addBoard/:id', {
	    	templateUrl: 'pages/userOperations/addBoard.html',
	    	controller: 'boardController'
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
