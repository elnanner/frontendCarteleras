'use strict';
angular.module('app')
.factory('OtherOperations', function( $http, $q){

  var config = {
    headers : {
      'Content-Type': 'application/json;charset=utf-8;',
    }
  };
  
  var addComment = function(comment, noteID) {
    var defer = $q.defer();
    alert(" en el servicio el id es... "+noteID);
    var t=localStorage.getItem('tokenSeguridad');
    $http.post('http://localhost:8080/backendCarteleras/addComment/',
    {
      'comment': comment,
      'noteID': noteID,
      'token': t,
    }, config)
    .success(function(data){
      console.log('El alta del comentario responde: ');
      console.log(data);
      defer.resolve(data);  

    })
    .error(defer.reject);

    return defer.promise;
  };

  
  var getToken = function() {
    return localStorage.getItem('tokenSeguridad');
  };


  return {
    getToken: getToken,
    addComment: addComment
  };
})
