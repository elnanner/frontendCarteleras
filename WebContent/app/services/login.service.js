'use strict';
angular.module('app')
.factory('LoginService', function( $http, $q){

  var config = {
    headers : {
      'Content-Type': 'application/json;charset=utf-8;',
    }
  };
  
  var login = function(user, password,rootScope) {
    var defer = $q.defer();
    $http.post('http://localhost:8080/backendCarteleras/tryLogin/',
    {
      'user': user,
      'pass': password
    }, config)
    .success(function(data){
      console.log('El login responde: ');
      console.log(data);
      localStorage.setItem('tokenSeguridad', data.token.token);
      defer.resolve(data);
      //alert(JSON.stringify(data.token));
      //alert(data.token.token);
      //alert(JSON.stringify(data.profile)); 
      rootScope.userPerfil=data.profile;
      
      //alert(jwt_decode(data.token));
     // alert(jwtHelper.decodeToken(data.token));
  	 //alert(base64UrlEncode(header) + "." + base64UrlEncode(data.token));
    })
    .error(defer.reject);

    return defer.promise;
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
