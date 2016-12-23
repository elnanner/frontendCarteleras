/*app.controller('contentBoardController',['$scope','$http', '$location',function($scope,$http,$locationProvider){	 
     $scope.updateBoardData = function($id) {
    	 $scope.currentBoard=$id;
    	 $http({method: "GET",
    		 url: "http://localhost:8080/backendCarteleras/boards/"+$id })
    	 .success(function(response){
    		alert(JSON.stringify("lista de boards "+response.boardList));
    		$scope.boards = response.boardList;
    		$scope.notes = response.noteList;
    		alert(JSON.stringify("lista de notas "+response.noteList));
    		$locationProvider.path("/boards/"+$id)	
    	 }).error(function(response){
    		 alert("errour");
    		 $scope.mensaje = "algo anduvo mal";
    	 }); 
     }
     

     

	    function privateGetNotesBoard(idBoard)
	    { //deberia pedir por get
			 if( $scope.currentBoard=='21'){
				 $scope.boards=[{ "id":"12", "publishDate":"11/12/16", "publish":"nota " },
				                { "id":"13", "name":"primero", "description":"noticias pri" },
				                { "id":"20", "name":"perdidos", "description":"objetos perdidos"  },
				                { "id":"18", "name":"ofertas", "description":"noticias ofertas"  }];			 
		     }else if( $scope.currentBoard=='13'){
		    	 $scope.boards=[{ "id":"99", "name":"adp", "description":"noticias adp" },	                
		    	               ];			 
		     }else if( $scope.currentBoard=='12'){
		    	 $scope.boards=[];	
		     }else if( $scope.currentBoard=='18'){
		    	 $scope.boards=[];
		     }else if( $scope.currentBoard=='20'){
		    	 $scope.boards=[];	
		     } 
	    }
}]);*/
app.controller('boardController',['$scope', '$resource','$location', '$routeParams', function($scope, $resource,$locationProvider, $routeParams){
	Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
	if($locationProvider.path() == "/" || $locationProvider.path()=="/home"){
		$scope.board = Board.get({id: "26"});
	}else{
		$scope.board = Board.get({id: $routeParams.id});
	}
		
		
	
	
	//alert("notas ");
	//alert("listas "+$scope.boards)
	
}])
