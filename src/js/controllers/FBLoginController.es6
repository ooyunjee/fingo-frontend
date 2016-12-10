'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoFBLogin', ['$resource', function($resource){
    let url = 'http://fingo-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/fb_login/';
    return $resource(url);
  }])
  .controller('FBLoginController', function($scope, FingoFBLogin) {
    $scope.name = 'Login';
    $scope.token = null;

    $scope.FBLogin = function() {
      FB.login(function(response) {
        if(response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            console.log(response);

            $scope.token = FB.getAuthResponse().accessToken;
            // token = $scope.token.accessToken;
            console.log($scope.token);

            console.log($scope.token);

            var fb_login = new FingoFBLogin(); //You can instantiate resource class

           //  console.log($scope.token);
            fb_login.access_token = $scope.token;

            fb_login.$save(function(response) {
              //saves serializes $scope.fb_login object as JSON and sends as
              console.log('ddd',response);
            }).then(function successCallback(response) {
               // this callback will be called asynchronously
               // when the response is available
               console.log('s',response);
            }, function errorCallback(response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
               console.log('e',response);
            });

          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
     });



    };


  });
