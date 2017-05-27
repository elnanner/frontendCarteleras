'use strict';
angular.module('app')
.factory('UserService', function( $http, $q){

  var config = {
    headers : {
      'Content-Type': 'application/json;charset=utf-8;',
    }
  };
  
  var login = function(user, password,mail,type,rootScope) {
    $http.put('http://localhost:8080/backendCarteleras/createUser/',
    {
      'user': user,
      'pass': password,
      'mail': mail,
      'type': type
    }, config)
    .success(function(data){
      console.log('El alta de user responde: ');
      console.log(data);
     // rootScope.userPerfil=data.profile;
      alert("alta exitosa de user");
    })
    .error(alert("error al hacer alta de usuario"));//defer.reject);
    
    return ;
    //return defer.promise;
  };

  var logout = function() {
    var defer = $q.defer();
    // invalido el token
    localStorage.removeItem('tokenSeguridad');
    defer.resolve();

    return defer.promise;
  };

  var isLoggedIn = function() {
    var isToken = angular.isDefined(getToken()) && getToken() !== null;
    return isToken;
  };

  var getToken = function() {
    return localStorage.getItem('tokenSeguridad');
  };


  return {
    login: login,
    logout: logout,
    getToken: getToken,
    isLoggedIn: isLoggedIn
  };
})
