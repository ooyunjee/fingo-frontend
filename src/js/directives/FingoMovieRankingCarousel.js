var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoMovieRankingCarousel', function() {
    return {
      'restrict': 'EA',
      'templateUrl': '/js/directives/FingoMovieRankingCarousel.html',
      'link': function(scope, element, attrs) {
        var main_movie_ranking_carousel = {
          'height': {
            'desktop': 690,
            'tablet': 690
          },
          'count': {
            'desktop': 5,
            'tablet': 3,
            'mobile': 1
          },
          'col': {
            'desktop': 5,
            'tablet': 3,
            'mobile': 1
          },
          'row': {
            'desktop': 2,
            'tablet': 2,
            'mobile': 1
          },
          'margin': 20,
        };
        scope.repeatComplete = function() {
          var $carousel = element.find('#main-movie-ranking-carousel');
          $carousel.fingoCarousel(main_movie_ranking_carousel);

          // Add comment
          var comment_dim_el = document.querySelector('.comment-dim-container');
          var dim_1 = comment_dim_el.querySelector('.dim');
          var dim_2 = comment_dim_el.querySelector('.dim2');
          var modal_rank_contents = comment_dim_el.querySelector('.modal-rank-contents');

          var modal_rank_btn = comment_dim_el.querySelector('.modal-rank-btn');
          var modal_close_btn = comment_dim_el.querySelector('.modal-close-button');
          var modal_ok_button = comment_dim_el.querySelector('.modal-ok-button');

          var modal_rank_contents_left = 0;

          dim_1.addEventListener('click', hideDimModal);
          dim_2.addEventListener('click', hideDimModal);

          modal_rank_btn.addEventListener('click', function() {
            dim_2.style.display = 'block';
            modal_rank_contents.style.display = 'block';
          });


          modal_close_btn.addEventListener('click', function() {
            comment_dim_el.style.display = 'none';
          });

          modal_ok_button.addEventListener('click', function(e) {
            if(e) { e.preventDefault(); }
            comment_dim_el.style.display = 'none';
            // 서버로 코멘트 전송
          });


          function showDimModal() {
            var modals = document.querySelectorAll('.modal');
            dim = document.querySelector('.dim');
            dim_2 = document.querySelector('.dim2');

            dim.style.display = 'block';
            dim_2.style.display = 'block';
            for(var i = 0, l = modals.length; i < l; i++) {
              modals[i].style.display = 'block';
            }
            modal_rank_contents.style.left = (modal_rank_btn.offsetLeft - 127) + 'px';
          };

          function hideDimModal(){
            var modal = this.parentNode.querySelector('.modal');

            this.style.display = 'none';
            modal.style.display = 'none';
          };

          var tabpanels = document.querySelectorAll('.hover');

          tabpanels.forEach(function(tabpanel, index) {
            var tabpanel_btns = tabpanel.querySelectorAll('button');

            tabpanel_btns.forEach(function(btn, index) {

              if(index === 0) {
                btn.addEventListener('click', function(e) {
                  if(e) { e.preventDefault(); }
                });
              } else if(index === 1) {
                btn.addEventListener('click', function(e) {
                  if(e) { e.preventDefault(); e.stopPropagation();}

                  var title = this.parentNode.querySelector('h3').textContent;
                  var poster_src = this.parentNode.parentNode.querySelector('img').getAttribute('src');

                  comment_dim_el.querySelector('.modal-headline').innerHTML = this.parentNode.querySelector('h3').textContent;
                  comment_dim_el.querySelector('.modal-poster').setAttribute('src', poster_src);

                  showDimModal();
                });
              }
            });
          });

        };
      }
    };
  });
