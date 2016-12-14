/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

// let angular = require('angular');

angular.module('FingoApp').controller('ListController', ['$scope', '$http', function($scope, $http) {

  $http({
  	method: 'GET', //방식
  	url: 'http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/boxoffice/', /* 통신할 URL */
  	// data: dataObject, /* 파라메터로 보낼 데이터 */
  	// cb4a980f063b2dd4b550886526494091c131448f
  	// 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c
  	headers: {'Authorization': 'Token cb4a980f063b2dd4b550886526494091c131448f'} //헤더
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

  // bipan 모델 데이터
  // $scope.movies = [
  //     {
  //       "category": "closing",
  //       "title": "서울역",
  //       "english_title": "Seoul Station",
  //       "director": "연상호",
  //       "year": "2016",
  //       "duration": "93",
  //       "nation": "Korea",
  //       "image": "http://www.bifan.kr/uploads/program/program_32016062110580.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "패티와의 스물 하룻밤",
  //       "english_title": "21 Nights with Pattie",
  //       "director": "아르노 라리외 / 장 마리 라리외",
  //       "year": "2015",
  //       "duration": "110",
  //       "nation": "France",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160614152925.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "오토헤드",
  //       "english_title": "Autohead",
  //       "director": "로힛 미탈",
  //       "year": "2016",
  //       "duration": "97",
  //       "nation": "India",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160614153423.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "훠궈전쟁",
  //       "english_title": "Chongqing Hot Pot",
  //       "director": "양 칭",
  //       "year": "2016",
  //       "duration": "97",
  //       "nation": "China",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160614153615.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "장강도",
  //       "english_title": "Crosscurrent",
  //       "director": "양 차오",
  //       "year": "2015",
  //       "duration": "116",
  //       "nation": "China",
  //       "image": "http://www.bifan.kr/uploads/program/program_32016061415383.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "세상에서 고양이가 사라진다면",
  //       "english_title": "If Cats Disappeared from the World",
  //       "director": "나가이 아키라",
  //       "year": "2016",
  //       "duration": "100",
  //       "nation": "Japan",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160620101248.JPG"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "인어와 함께 춤을",
  //       "english_title": "The Lure",
  //       "director": "아그네즈카 스모친즈카",
  //       "year": "2015",
  //       "duration": "92",
  //       "nation": "Poland",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160614153915.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "무법자와 천사들",
  //       "english_title": "Outlaws and Angels",
  //       "director": "JT 몰너",
  //       "year": "2016",
  //       "duration": "120",
  //       "nation": "USA",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160614154028.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "포인트 제로",
  //       "english_title": "Point Zero",
  //       "director": "호세 페드로 굴라르",
  //       "year": "2015",
  //       "duration": "84",
  //       "nation": "Brazil",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160614154234.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "얼굴 없는 밤",
  //       "english_title": "The Similars",
  //       "director": "이작 에즈반",
  //       "year": "2015",
  //       "duration": "89",
  //       "nation": "Mexico",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160614154342.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "아래층 사람들",
  //       "english_title": "The Tenants Downstairs",
  //       "director": "아담 추웨이",
  //       "year": "2016",
  //       "duration": "97",
  //       "nation": "Taiwan",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160620101739.jpg"
  //     },
  //     {
  //       "category": "choice",
  //       "title": "어둠의 여인",
  //       "english_title": "Under the Shadow",
  //       "director": "바박 안바리",
  //       "year": "2015",
  //       "duration": "110",
  //       "nation": "France",
  //       "image": "http://www.bifan.kr/uploads/program/program_320160621223015.jpg"
  //     }
  // ];

  // Controller $scope 객체의 속성
  $scope.selected_index = null;
  $scope.selected_movie = null;

  // Controller $scope 객체의 메소드
  $scope.selectMovie = function(movie, index) {
    $scope.selected_index = index;
    $scope.selected_movie = movie;
  };

}]);
