'use strict'

angular.module('FingoApp')
  .controller('FingoAddCommentController',
    ['$scope', '$http', '$stateParams', ($scope, $http, $stateParams)=>{

      let index = $stateParams.id;
      $scope.url = 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/'+index+'/comment/';

      $http({
        method: 'GET', //방식
      	url: 'http://fingo2-dev.ap-northeast-2.elasticbeanstalk.com/api/v1.0/movie/detail/'+ index + '/', /* 통신할 URL */
      })
      .success(function(data, status, header, config) {
        if(data) {
          console.log(data.title);
          $scope.fingo_title = data.title;
          $scope.fingo_img = data.img;
          if(data.score != 0) {
            $scope.fingo_score = data.score;
          } else {
            $scope.fingo_score = '';
          }
        }
      });

      $http({
      	method: 'GET', //방식
      	url: $scope.url, /* 통신할 URL */
      	// headers: {'Authorization': 'Token 0428140f0f353791520d51d20ce445c7d41c5cad'} //헤더
      })
      .success(function(data, status, headers, config) {
      	if( data ) {
      		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
          $scope.fingo_comment = data.comment;

      	}
      	else {
      		/* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          $scope.fingo_comment = '';
          console.log(error);
      	}
      })
      .error(function(data, status, headers, config) {
      	/* 서버와의 연결이 정상적이지 않을 때 처리 */
        $scope.fingo_comment = '';
      	console.log(status);
      });

      $scope.addComment = function(comment) {
        console.log(comment);
        $http.post($scope.url, { comment: comment })
          .success(function(data, status, headers, config) {
          	if( data ) {
          		/* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
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

    // };

    // Add comment
    // var comment_dim_el = document.querySelector('.comment-dim-container');
    // var dim_1 = comment_dim_el.querySelector('.dim');
    // var dim_2 = comment_dim_el.querySelector('.dim2');
    // var modal_rank_contents = comment_dim_el.querySelector('.modal-rank-contents');
    //
    // var modal_rank_btn = comment_dim_el.querySelector('.modal-rank-btn');
    // var modal_close_btn = comment_dim_el.querySelector('.modal-close-button');
    // var modal_ok_button = comment_dim_el.querySelector('.modal-ok-button');
    //
    // var modal_rank_contents_left = 0;
    //
    // dim_1.addEventListener('click', hideDimModal);
    // dim_2.addEventListener('click', hideDimModal);
    //
    // modal_rank_btn.addEventListener('click', function() {
    //   dim_2.style.display = 'block';
    //   modal_rank_contents.style.display = 'block';
    // });
    //
    //
    // modal_close_btn.addEventListener('click', function() {
    //   comment_dim_el.style.display = 'none';
    // });
    //
    // modal_ok_button.addEventListener('click', function(e) {
    //   if(e) { e.preventDefault(); }
    //   comment_dim_el.style.display = 'none';
    //   // 서버로 코멘트 전송
    // });
    //
    //
    // function showDimModal() {
    //   var modals = document.querySelectorAll('.modal');
    //   dim = document.querySelector('.dim');
    //   dim_2 = document.querySelector('.dim2');
    //
    //   dim.style.display = 'block';
    //   dim_2.style.display = 'block';
    //   for(var i = 0, l = modals.length; i < l; i++) {
    //     modals[i].style.display = 'block';
    //   }
    //   modal_rank_contents.style.left = (modal_rank_btn.offsetLeft - 127) + 'px';
    // };
    //
    // function hideDimModal(){
    //   var modal = this.parentNode.querySelector('.modal');
    //
    //   this.style.display = 'none';
    //   modal.style.display = 'none';
    // };
    //
    // var tabpanels = document.querySelectorAll('.hover');
    //
    // tabpanels.forEach(function(tabpanel, index) {
    //   var tabpanel_btns = tabpanel.querySelectorAll('button');
    //
    //   tabpanel_btns.forEach(function(btn, index) {
    //
    //     if(index === 0) {
    //       btn.addEventListener('click', function(e) {
    //         if(e) { e.preventDefault(); }
    //       });
    //     } else if(index === 1) {
    //       btn.addEventListener('click', function(e) {
    //         if(e) { e.preventDefault(); e.stopPropagation();}
    //
    //         var title = this.parentNode.querySelector('h3').textContent;
    //         var poster_src = this.parentNode.parentNode.querySelector('img').getAttribute('src');
    //
    //         comment_dim_el.querySelector('.modal-headline').innerHTML = this.parentNode.querySelector('h3').textContent;
    //         comment_dim_el.querySelector('.modal-poster').setAttribute('src', poster_src);
    //
    //         showDimModal();
    //       });
    //     }
    //   });
    // });

  }]);
