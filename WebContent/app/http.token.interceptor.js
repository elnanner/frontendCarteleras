'use strict';
/**
 * @ngdoc interceptor
 * @name app.interceptor.httpTokenInterceptor
 * @description httpTokenInterceptor Factory
 */
angular.module('app')
  .factory('httpTokenInterceptor',
    function($q, $injector) {
      var loginService;
      return {
        request: function(config) {
          if(!loginService){loginService = $injector.get('LoginService');}
          // Si no es un html
          if (config.url.indexOf('.html') === -1) {
            // Si es usuario esta logeado y no va a logout (no es necesario el token)
            if (loginService.isLoggedIn() && config.url.indexOf('logout') === -1) {
              config.headers['Authorization'] = loginService.getToken();
            }
          }
          return config || $q.when(config);
        }
      };
  })
  .config(function($httpProvider) {
      $httpProvider.interceptors.push('httpTokenInterceptor');
  });
