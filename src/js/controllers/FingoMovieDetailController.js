/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp').controller('FingoMovieDetailController', ['$scope', '$http', function($scope, $http) {

  var dataObject = 1;

  $http({
  	method: 'GET', //방식
  	url: 'http://fingo-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+dataObject+'/', /* 통신할 URL */
  	data: dataObject, /* 파라메터로 보낼 데이터 */
  	headers: {'Authorization': 'Token 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c'} //헤더
  })
  .success(function(data, status, headers, config) {
  	if( data ) {
  		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
      // console.log(data.data[0].movie.title);
      $scope.fingo_movie_detail = data;
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


  // Controller $scope 객체의 속성
  $scope.selected_index = null;
  $scope.selected_movie = null;

  // Controller $scope 객체의 메소드
  $scope.selectMovie = function(movie, index) {
    $scope.selected_index = index;
    $scope.selected_movie = movie;
  };

}]);
