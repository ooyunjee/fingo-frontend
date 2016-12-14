/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp').controller('FingoMovieDetailController', ['$scope', '$http', function($scope, $http) {
  $scope.selected_index = null;
  $scope.selected_movie = null;
  $scope.movie_id = null;
  $scope.selected_movie = null;
  $scope.popup_show_index = null;
  $scope.popup_show_active = false;
  var dataObject = 1;
  $scope.popup_show = function(movie, id, boolean){
    console.log(id);
    console.log(boolean);
    $scope.movie_id = id;
    $scope.popup_show_active = boolean;
    $scope.selected_movie = movie;
    if(id == 0){

    } else {
      $http({
      	method: 'GET', //방식
      	url: 'http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+$scope.movie_id+'/', /* 통신할 URL */
      	data: dataObject, /* 파라메터로 보낼 데이터 */
      	headers: {'Authorization': 'Token cb4a980f063b2dd4b550886526494091c131448f'} //헤더
      })
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          // console.log(data.data[0].movie.title);
          $scope.fingo_movie_detail = data;
          console.log($scope.fingo_movie_detail);
      	}
      	else {
      		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          console.log(error);
      	}
      })
      $http({
        method: 'GET', //방식
        url: 'http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+$scope.movie_id+'/comments/', /* 통신할 URL */
        data: dataObject, /* 파라메터로 보낼 데이터 */
        //http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/1/comments/
        headers: {'Authorization': 'Token cb4a980f063b2dd4b550886526494091c131448f'} //헤더
      })
      .success(function(data, status, headers, config) {
      	if( data ) {
          $scope.fingo_movie_detail_comment = data;
          console.log($scope.fingo_movie_detail_comment);
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
    }

  };


  // angular.forEach(fingo_movie_detail.actor, function(person){
  //     console.log(person.img);
  // });

  // Controller $scope 객체의 속성


  // Controller $scope 객체의 메소드
  $scope.selectMovie = function(movie, index) {
    $scope.selected_index = index;
    $scope.selected_movie = movie;
  };

}]);
