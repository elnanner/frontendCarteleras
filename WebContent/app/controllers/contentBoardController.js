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
app.controller('boardController',['$scope', '$resource','$location', '$routeParams', 'OtherOperations', function($scope, $resource,$locationProvider, $routeParams, OtherOperations){
	//si no estas logeuado vas al login pero podes ver el home 
//	if (!LoginService.isLoggedIn()) {//si el usuario no esta logueado
//         //alert('Denegar');
//         event.preventDefault();
//         //$state.go('login');
//         $locationProvider.path('/login')
//     }else{
		Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
		if($locationProvider.path() == "/" || $locationProvider.path()=="/home"){
			$scope.board = Board.get({id: "23"});
			console.log($scope.board);//alert($scope.board['id']);
			
		}else{
			$scope.board = Board.get({id: $routeParams.id});
			console.log($scope.board);
		
		}
		if(localStorage.getItem('tokenSeguridad')!=undefined){
			$scope.token="true";
		}else{
			$scope.token="false";
		}
		
		$scope.sendComment = function(boardId, noteId, texto){
			console.log('boardId: '+boardId+' con note id: '+noteId+" y texto a enviar: "+texto);
			console.log('commentario nuevo: ' + texto);

		    OtherOperations.addComment(texto, noteId)
		    .then(function(){ 
		    	$scope.mensaje = ''; //reset error message
		   
		      
			    alert("exito al agregar comment?");
			  	Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
				{
					$scope.board = Board.get({'id': boardId});
			    }
		    })
		    .catch(function(){
		      $scope.mensaje = 'No se pudo agregar el comentario';
		    });
		    
		};
//		$scope.alertar = function(id, texto){
//			alert('id: '+id+' tiene texto: '+texto);
//		}
		/*$scope.texto='';
		$scope.alertar = function(id, texto){
			alert('id: '+id+' tiene texto: '+texto);
			OtherOperations.addComment(texto, id)//ctrl.noteID)
		    .then(function(){ 
		      $scope.mensaje = ''; //reset error message
		      
		      alert("exito al agregar comment?");
		  	Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
			{
				$scope.board = Board.get({id: ctrl.boardID});
		    }
		    })
		    .catch(function(){
		      $scope.mensaje = 'No se pudo agregar el comentario';
		    });
	      
		}*/
		
		
     }
		
		

	
	//alert("notas ");
	//alert("listas "+$scope.boards)
	
]);

