/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp')
  .controller('FingoBoxofficeController',
    ['$scope', '$http', 'FingoTokenService', ($scope, $http, FingoTokenService)=>{
  // .controller('FingoBoxofficeController', ['$scope', '$http', function($scope, $http) {
  $scope.share_data = FingoTokenService;
  console.log('token', $scope.share_data.token);

  $http({
  	method: 'GET', //방식
  	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/boxoffice/', /* 통신할 URL */
  	// data: dataObject, /* 파라메터로 보낼 데이터 */
  	// cb4a980f063b2dd4b550886526494091c131448f
  	// 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c
  	// headers: {'Authorization': 'Token 0428140f0f353791520d51d20ce445c7d41c5cad'} //헤더
  })
  .success(function(data, status, headers, config) {
  	if( data ) {
  		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
      // console.log(data.data[0].movie.title);
      $scope.fingo_movies = data.data;
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

  $scope.Comment = function(index) {
    console.log('index',index);
    $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/'+index+'/comment/';
    $http({
    	method: 'GET', //방식
    	url: $scope.url, /* 통신할 URL */
    	// data: dataObject, /* 파라메터로 보낼 데이터 */
    	// cb4a980f063b2dd4b550886526494091c131448f
    	// 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c
    	// headers: {'Authorization': 'Token 0428140f0f353791520d51d20ce445c7d41c5cad'} //헤더
    })
    .success(function(data, status, headers, config) {
    	if( data ) {
    		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
        $scope.fingo_comment = data.comment;
        console.log($scope.fingo_comment);
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

  $scope.addComment = function(comment) {
    console.log(comment);
    $http.post($scope.url, { comment: comment })
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          // console.log(data.data[0].movie.title);
          // $scope.fingo_movies = data.data;
          console.log('success');
          window.alert('success');
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
