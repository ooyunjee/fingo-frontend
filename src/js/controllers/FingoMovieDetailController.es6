/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

let angular = require('angular');

angular.module('FingoApp')
.factory('FingoBoxofficeDetail', ['$resource', ($resource)=>{
  let url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/boxoffice/';
  return $resource(url);
}])
.controller('FingoMovieDetailController', ($scope, FingoBoxofficeDetail)=>{

  FingoBoxofficeDetail.get(function(data) {
    console.log('success',data);
    $scope.fingo_boxoffice_detail = data.data;
  }, function errorCallback(data) {
     console.log('e',data);
  });
  
});
//   .controller('FingoMovieDetailController', ['$scope', '$http', function($scope, $http) {
//
//   // var dataObject = 1;
//
//   $http({
//   	method: 'GET', //방식
//   	url: 'http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/1/', /* 통신할 URL */
//   	// data: dataObject, /* 파라메터로 보낼 데이터 */
//   	headers: {'Authorization': 'Token cb4a980f063b2dd4b550886526494091c131448f'} //헤더
//   })
//   .success(function(data, status, headers, config) {
//   	if( data ) {
//   		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
//       // $scope.actors = [];
//       console.log(data);
//       $scope.fingo_boxoffice_detail = data;
//       // console.log($scope.fingo_boxoffice_detail);
//       // console.log('details', $scope.details);
//       // for(var i = 0, l = $scope.fingo_boxoffice_detail.length; i < l; i++) {
//       //   var title = $scope.fingo_boxoffice_detail[i].movie.title;
//       //
//       //   for(var j = 0, ll = $scope.fingo_boxoffice_detail[i].movie.actor.length; j < ll; j++) {
//       //     $scope.actors = $scope.fingo_boxoffice_detail[i].movie.actor;
//       //     // console.log($scope.fingo_boxoffice_detail[i].movie.actor[j]);
//       //   }
//       // }
//       // console.log('actors', $scope.actors);
//    	}
//   	else {
//   		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
//       console.log(error);
//   	}
//   })
//   .error(function(data, status, headers, config) {
//   	/* 서버와의 연결이 정상적이지 않을 때 처리 */
//   	console.log(status);
//   });
//
//
//   // Controller $scope 객체의 속성
//   $scope.selected_index = null;
//   $scope.selected_movie = null;
//
//   // Controller $scope 객체의 메소드
//   $scope.selectMovie = function(movie, index) {
//     $scope.selected_index = index;
//     $scope.selected_movie = movie;
//   };
//
// }]);
