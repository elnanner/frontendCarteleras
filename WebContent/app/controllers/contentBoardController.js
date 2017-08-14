
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
		    			      
			    //alert("exito al agregar comment?");
			  	Board = $resource("http://localhost:8080/backendCarteleras/boards/:id",{id: "@id"});
				{
					$scope.board = Board.get({'id': boardId});
			    }
				//esto esta re mal pero bueh
			    $("#btnCloseModal").click();
		    })
		    .catch(function(){
		      $scope.mensaje = 'No se pudo agregar el comentario';
		    });
		    
		};

		
     }
		

	
]);

