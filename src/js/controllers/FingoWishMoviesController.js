/*! FingoLoginController.js © yamoo9.net, 2016 */
'use strict';
console.log('나옴');
let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoWishMovies', ['$resource', function($resource){
    // FingoWishMovie
    let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/wish/12/';
    let token = 'Token 0428140f0f353791520d51d20ce445c7d41c5cad';
    return $resource(url, {}, {
        'create': {
            method: 'POST'
        }
    });
  }])
  .controller('FingoWishMoviesController', function($scope, FingoWishMovies) {

    $scope.WishMovies = function(boolean) {
      console.log('또나옴');
      console.log(boolean);
      var entry = new FingoWishMovies();
      // entry.wish_movie = $scope.boolean;
      entry.wish_movie = boolean;

      entry.$create().then(function(response) {
        console.log(response.token);
      }, function errorCallback(response) {
         console.log('error',response);
      });
    };

  });
