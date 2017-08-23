'use strict';
angular.module('app')
.factory('LoginService', function( $http, $q, $cookies){

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
      $cookies.put('userGlobal', 'logged')
      $cookies.put('userPerfil', data.profile.type);
      
      defer.resolve(data);
      //alert(JSON.stringify(data.token));
      //alert(data.token.token);
      //alert(JSON.stringify(data.profile)); 
      //rootScope.userPerfil=data;
      
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
    $cookies.put('userPerfil', '');
    $cookies.put('userGlobal', '');
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
