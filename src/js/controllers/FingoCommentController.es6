'use strict';

angular.module('FingoApp')
  .controller('FingoCommentController' ['$scope', '$http', function($scope, $http) {

  }]);
 // .factory('FingoComment', ['$resource', ($resource)=>{
 //   let url = 'http://fingo2-real.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/id/comment/';
 //  //  let params = {'id': '@id'};
 //    return $resource(url, {}, {
 //        'save': {
 //            method: 'POST'
 //        }
 //    });
 // }])
 // .controller('FingoCommentController', ($scope, FingoComment)=>{
 //
 //  //  index = $scope.comment;
 //   $scope.addComment = function(comment, index) {
 //     console.log(comment);
 //     console.log(index);
 //
 //     var add_comment = new FingoComment();
 //
 //     add_comment.comment = comment;
 //
 //     add_comment.$save((reponse)=>{
 //       console.log('success',response);
 //     }, function errorCallback(response) {
 //       console.log('error',response);
 //     });
 //
 //   };
 // });
