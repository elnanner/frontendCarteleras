app.controller('contentBoardController',['$scope','$http',function($scope,$http){	 
     $scope.notes= "init N";
     $scope.updateBoardData = function($id) {
    	 $scope.currentBoard=$id;
    	 $http({method: "GET",
    	 url: "http://localhost:8080/backendCarteleras/boards/"+$id })
    	// params: {id: $id } })
    	 .then(function(response) {
    	 $scope.boards = response.data.boardList;  	
    	 }).catch(function(response) {
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
}]);
