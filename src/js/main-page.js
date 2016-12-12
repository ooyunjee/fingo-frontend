var header_carousel = {
  'width': 1640,
  'height': {
    'desktop': 850,
    'tablet': 650,
    'mobile': 600
  }
};
// var main_box_office_carousel = {
//   'height': {
//     'desktop': 530,
//     'tablet': 530
//   },
//   'index': {
//     'desktop': 2,
//     'tablet': 1,
//     'mobile': 0
//   },
//   'col': {
//     'desktop': 5,
//     'tablet': 3,
//     'mobile': 1
//   },
//   'margin': 20,
//   'infinite': {
//     'desktop': true,
//     'tablet': true,
//     'mobile': false
//   }
// };
// var main_movie_ranking_carousel = {
//   'height': {
//     'desktop': 690,
//     'tablet': 690
//   },
//   'count': {
//     'desktop': 5,
//     'tablet': 3,
//     'mobile': 1
//   },
//   'col': {
//     'desktop': 5,
//     'tablet': 3,
//     'mobile': 1
//   },
//   'row': 2,
//   'margin': 20,
// };

var main_movie_trailers_carousel = {
  'height': 225,
  'count': {
    'desktop': 3,
    'tablet': 2,
    'mobile': 1
  },
  'col': 3,
  'margin': 20
};


$('#main-header-carousel').fingoCarousel(header_carousel);
// $('#main-box-office-carousel').fingoCarousel(main_box_office_carousel);
// $('#main-movie-ranking-carousel').fingoCarousel(main_movie_ranking_carousel);
$('#main-new-movie-trailers-carousel').fingoCarousel(main_movie_trailers_carousel);


// function delayAction() {
//   var $caro4 = $('#main-header-carousel').fingoCarousel(header_carousel);
//   var $caro = $('#main-box-office-carousel').fingoCarousel(main_box_office_carousel);
//   var $caro2 = $('#main-movie-ranking-carousel').fingoCarousel(main_movie_ranking_carousel);
//   var $caro3 = $('#main-new-movie-trailers-carousel').fingoCarousel(main_movie_trailers_carousel);
// }

// window.setTimeout(delayAction, 2000);

// var $ca = $('#carousel').fingoCarousel({});


  var main_movie_ranking_btn_group = document.querySelector('.main-movie-ranking-btn-group');
  var active_btns = main_movie_ranking_btn_group.querySelectorAll('button');

  active_btns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      $(btn).radioClass('active');
    });
  });




  var tabs = document.querySelectorAll('.ui-carousel-tab');

  // 인디케이터 기본 이벤트 차단
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      if(e) { e.preventDefault(); }
    });
  });

  var box_office_list = document.querySelector('.main-box-office-list');
  var box_office_list_btn = box_office_list.querySelector('button');
  var ul = box_office_list.querySelector('ul');

  var index = 1;
  var intervalID = null;
  var $ul = $(ul);


  // Box Office List 버튼 이벤트 처리
  box_office_list_btn.addEventListener('click', function() {
    box_office_list.classList.toggle('show');
    if(box_office_list.classList.contains('show')) {
      $ul.css('top', 0);
      clearInterval(intervalID);
      for(var i = 0, l = index - 1; i < l; i++) {
        $ul.prepend($ul.children().last());
      }
    } else if(!box_office_list.classList.contains('show')) {
      index = 1;
      intervalID = window.setInterval(rollingList, 2500);
    }
  });

  // Box Office List 롤링 함수
  function rollingList() {
    var list_length = $ul.children().length;

    $ul.stop().animate({
      'top': -45
    }, 600, function() {
      $(this).append($(this).children().first());
      $(this).css('top', 0);
      index++;
    });
  }

  // Box Office List 롤링 수행
  if(!box_office_list.classList.contains('show')) {
    intervalID = window.setInterval(rollingList, 2500);
  }


  ul.addEventListener('mouseover', function() {
    clearInterval(intervalID);
  });

  ul.addEventListener('mouseout', function() {
    intervalID = window.setInterval(rollingList, 2500);
  });

// })(this, this.jQuery);
