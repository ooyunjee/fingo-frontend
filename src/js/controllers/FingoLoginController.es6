/*! FingoLoginController.js © yamoo9.net, 2016 */

'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoLogin', ['$resource', function($resource){
    let url = 'http://fingo-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/';
    let token;
    return $resource(url, {}, {
        'create': {
            method: 'POST'
        }
    });
  }])
  .controller('FingoLoginController', function($scope, FingoLogin) {

    $scope.Login = function() {

      var entry = new FingoLogin();

      entry.email = $scope.email;
      entry.password = $scope.pw;

      entry.$create().then(function(response) {
        console.log(response.token);
      }, function errorCallback(response) {
         console.log('error',response);
      });
    };

  });
