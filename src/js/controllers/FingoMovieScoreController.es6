/*! FingoMovieScoreController.es6 © heoyunjee, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp')
  .controller('FingoMovieScoreController', ['$scope', '$http', ($scope, $http)=>{
    console.log('FingoMovieScoreController');

    $scope.score = null;

    $scope.getScore = function(event, id) {
      console.log(id);
      $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/score/'+ id +'/';
      // $scope.stars = angular.element(event.currentTarget.querySelector('.stars').querySelectorAll('label'));
      $http({
        'method': 'GET',
        'url': $scope.url,
        'headers': {'Authorization': 'Token ' + window.localStorage['key1'] }
      })
      .success(function(data, status, headers, config) {
        if( data ) {
          /* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          console.log(data.score);
          $scope.score = data.score * 2;
          angular.element(event.currentTarget.querySelectorAll('label')).css('color', '#999');
          if($scope.score != 0) {
            for(let i = 0, l = $scope.score; i <= l; i++) {
              angular.element(event.currentTarget.querySelector('.star' + i)).css('color', '#e7ae5a');
            }
          }
        }
        else {
          /* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          console.log(error);
        }
      })
      .error(function(data, status, headers, config) {
        /* 서버와의 연결이 정상적이지 않을 때 처리 */
        console.log(status);
      });

    };


    $scope.addScore = function(event, id, score) {
      // $scope.score = score;
      $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/score/' + id + '/';

      console.log('scope.score', $scope.score);

      if((score * 2) === $scope.score) {
        console.log('same');
        score = 0;
      }

      $http.post($scope.url, { score: score },
        {
          headers: {'Authorization': 'Token ' + window.localStorage['key1'] }
        }
      )
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          // console.log(data.data[0].movie.title);
          // $scope.fingo_movies = data.data;
          console.log(data);
          // $scope.getScore(event, id);

      	}
      	else {
      		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          console.log(error);
      	}
      })
      .error(function(data, status, headers, config) {
      	/* 서버와의 연결이 정상적이지 않을 때 처리 */
      	console.log(status);
      });
    };

}]);
