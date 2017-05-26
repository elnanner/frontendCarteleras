
app.controller('listController',['$scope', '$resource','$location', '$routeParams', 'LoginService', function($scope, $resource,$locationProvider, $routeParams, LoginService){

		//Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
	//	if($locationProvider.path() == "/" || $locationProvider.path()=="/home"){
//			$scope.board = Board.get({id: "25"});
//		}else{
//			$scope.board = Board.get({id: $routeParams.id});
//		}
	alert("listController");
    }
		
	

]);

