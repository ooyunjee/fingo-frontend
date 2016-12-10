/*! ListController.js © yamoo9.net, 2016 */

'use strict';

// let angular = require('angular');

// angular.module('FingoApp').controller('ListController', ['$scope', '$http', function($scope, $http) {
//
//   $scope.SendData = function () {
//      // use $.param jQuery function to serialize data from JSON
//       var data = {
//           email: $scope.email,
//           password: $scope.password,
//           // nickname: $scope.nickname
//       };
//
//       var config = {
//           headers : {
//               'Content-Type': 'application/json'
//           }
//       }
//
//       $http.post(
//       	// method: 'POST', //방식
//       	'http://fingo-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/', /* 통신할 URL */
//         data,
//         config
//       	 /* 파라메터로 보낼 데이터 */
//       	// headers: {'Authorization': 'Token 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c'} //헤더
//       ).then(function successCallback(response) {
//          // this callback will be called asynchronously
//          // when the response is available
//          console.log(response);
//       }, function errorCallback(response) {
//          // called asynchronously if an error occurs
//          // or server returns response with an error status.
//          console.log(response);
//       });
//   };
//
//   // $http({
//   // 	method: 'POST', //방식
//   // 	url: 'http://fingo-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/', /* 통신할 URL */
//   //   body: {
//   //     email: 'heoyunjee@gmail.com',
//   //     password: '1234'
//   //   }
//   // 	// data: {
//   //   //   email: 'heoyunjee@gmail.com',
//   //   //   password: '1234'
//   //   // }, /* 파라메터로 보낼 데이터 */
//   // 	// headers: {'Authorization': 'Token 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c'} //헤더
//   // })
//   // .success(function(data, status, headers, config) {
//   // 	if( data ) {
//   //     console.log(data);
//   // 		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
//   //     // console.log(data.data[0].movie.title);
//   //     $scope.fingo_movies = data.data;
//   // 	}
//   // 	else {
//   // 		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
//   //     console.log(error);
//   // 	}
//   // })
//   // .error(function(data, status, headers, config) {
//   // 	/* 서버와의 연결이 정상적이지 않을 때 처리 */
//   // 	console.log(status);
//   // });
// }]);

'use strict';

let angular = require('angular');

angular
  .module('FingoApp')
  .factory('FingoLogin', ['$resource', function($resource){
    let url = 'http://eb-fingo-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/user/login/';
    return $resource(url);
  }])
  .controller('FingoLoginController', function($scope, FingoLogin) {

    $scope.Login = function() {
      // var entry = FingoSignup.get({}, function() {
      //   console.log(entry);
      // });

      var entry = new FingoLogin(); //You can instantiate resource class

      // $scope.entry.data = {
      //   'email': 'heoyunjee@gmail.com',
      //   'password': '1234'
      // };

      entry.email = 'heoyunjee@gmail.com';
      entry.password = '1234';
      // entry.nickname = 'ooyunjee';

      // console.log(entry);

      entry.$save(function(response) {
        //saves serializes $scope.entry object as JSON and sends as
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

    };

  });

    // $scope.fingo_signup = new FingoSignup();

    // $scope.fingo_signup.data = {}
  // });
  // .controller('ListController',
  //   ['$scope', 'ListDataShareService', ($scope, ListDataShareService)=>{
  //
  //   // bipan 모델 데이터
  //   $scope.share_data = ListDataShareService;
  //
  //   // 컨트롤러 $scope 객체의 속성
  //   // $scope.search = {};
  //   $scope.search = '';
  //   $scope.order  = 'name';
  //
  //   // 컨트롤러 $scope 객체의 메소드
  //   $scope.selectPerson = (person)=> {
  //     $scope.share_data.selected_person = person;
  //   };
  //   $scope.loadMore = ()=>{
  //     // 사용자가 브라우저의 하단 끝에서 스크롤 이벤트 발생
  //     // 다음 페이지의 콘텐츠를 불러와야 합니다.
  //     $scope.share_data.loadMore();
  //   };
  //
  //   // 엄격하게 일치하는 검색 기능
  //   // $scope.sensitiveSearch = function(person) {
  //   //   var search = $scope.search;
  //   //   if ( search ) {
  //   //     return person.title.indexOf(search) === 0 ||
  //   //            person.director.indexOf(search) === 0 ||
  //   //            person.year.indexOf(search) === 0 ||
  //   //            person.category.indexOf(search) === 0;
  //   //   }
  //   //   return true;
  //   // };
  //
  // }]);
