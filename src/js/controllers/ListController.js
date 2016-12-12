/*! movieListController.js © yamoo9.net, 2016 */
'use strict'

let angular = require('angular');

angular.module('FingoApp').controller('ListController', ['$scope', function($scope) {
  // bipan 모델 데이터
  $scope.movies = [
    {
          "rank": 1,
          "movie": {
              "id": 1,
              "title": "형",
              "genre": "코미디",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1ccfbf81991b24161a31fa2629380acb1c64b9c3",
              "first_run_date": "2016-11-23",
              "score": 1.75,
              "nation_code": "한국"
          }
      },
      {
          "rank": 2,
          "movie": {
              "id": 2,
              "title": "미씽: 사라진 여자",
              "genre": "미스터리",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F87c470f0a3f3ac61c64f6ac85e52bea8dfcbb8b4",
              "first_run_date": "2016-11-30",
              "score": 0.0,
              "nation_code": "한국"
          }
      },
      {
          "rank": 3,
          "movie": {
              "id": 3,
              "title": "신비한 동물사전",
              "genre": "판타지",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F7d09c2f81bfb2f2ff3f38a34dfedab996d501f14",
              "first_run_date": "2016-11-16",
              "score": 4.0,
              "nation_code": "영국"
          }
      },
      {
          "rank": 4,
          "movie": {
              "id": 4,
              "title": "잭 리처: 네버 고 백",
              "genre": "액션",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fab9c84b753dfbe26656957fc05c56995884e991a",
              "first_run_date": "2016-11-30",
              "score": 0.0,
              "nation_code": "미국"
          }
      },
      {
          "rank": 5,
          "movie": {
              "id": 5,
              "title": "언더월드: 블러드 워",
              "genre": "판타지",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F72bda6f1be39162d744c37280ed4032cc8e00452",
              "first_run_date": "2016-11-30",
              "score": 3.5,
              "nation_code": "미국"
          }
      },
      {
          "rank": 6,
          "movie": {
              "id": 6,
              "title": "리틀메딕: 몸속탐험대",
              "genre": "애니메이션",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F47439f98b2c9b9ca4686fb97e1422c2a9284c747",
              "first_run_date": "2016-11-24",
              "score": 3.0,
              "nation_code": "독일"
          }
      },
      {
          "rank": 7,
          "movie": {
              "id": 7,
              "title": "두 남자",
              "genre": "범죄",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff611a95b61a9309894ec4d29d046b6fed3e5086b",
              "first_run_date": "2016-11-30",
              "score": 0.0,
              "nation_code": "한국"
          }
      },
      {
          "rank": 8,
          "movie": {
              "id": 8,
              "title": "닥터 스트레인지",
              "genre": "어드벤처",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc725c52ec857427532c2fe96bbcfff61747ccf77",
              "first_run_date": "2016-10-26",
              "score": 0.0,
              "nation_code": "미국"
          }
      },
      {
          "rank": 9,
          "movie": {
              "id": 9,
              "title": "미스 사이공: 25주년 특별 공연",
              "genre": "뮤지컬",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe98aaa091f8713d98193d2517ddb9d2a70177867",
              "first_run_date": "2016-11-24",
              "score": 0.0,
              "nation_code": "영국"
          }
      },
      {
          "rank": 10,
          "movie": {
              "id": 10,
              "title": "신밧드 더 무비",
              "genre": "애니메이션",
              "img": "http://t1.search.daumcdn.net/thumb/R438x0.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F128d38cf08a7f4f7f46d250b913b6a4c97e9aec8",
              "first_run_date": "2016-12-01",
              "score": 0.0,
              "nation_code": "일본"
          }
      }
  ];
  // Controller $scope 객체의 속성
  $scope.selected_index = null;
  $scope.selected_movie = null;

  // Controller $scope 객체의 메소드
  $scope.selectMovie = function(movie, index) {
    $scope.selected_index = index;
    $scope.selected_movie = movie;
  };

}]);
