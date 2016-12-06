// (function(global) {
  'use strict';

  var body = document.body,
      create_modal_btn,
      createModalWindow,
      createDim,
      createDim2,
      createModal,
      createModalLayer,
      createModalHeadline,
      createModalContent,
      createModalContent2,
      createSubModalWindow,
      createModalCloseButton,
      removeDimModal,
      removeDimModal2;

  var dim_window = null;
  var star = false;

  create_modal_btn = document.querySelector('.create-modal-button');

  /** @function createModalWindow */
  createModalWindow = function() {
    createDim();
    createModal();
    if(star === false) {
      createSubModalWindow();

      var modal_like_btn = document.querySelector('.modal-like-btn');
      modal_like_btn.addEventListener('click', function() {
        modal_like_btn.classList.toggle('active');
      });
    }

    var modal_rank_btn = document.querySelector('.modal-rank-btn');
    modal_rank_btn.addEventListener('click', function() {
      console.log('createSubModalWindow');
      createSubModalWindow();
    });

  };

  createSubModalWindow = function() {
    createDim2();
    dim_window.appendChild(createModalContent2());
  };

  // dim 레이어를 생성
  createDim = function() {
    var dim_layer = document.createElement('div');
    dim_layer.setAttribute('class', 'dim');
    body.appendChild(dim_layer);
    // 제거 이벤트 연결
    dim_layer.onclick = removeDimModal;
  };
  createDim2 = function() {
    var dim_layer = document.createElement('div');
    dim_window = document.querySelector('.modal-window');
    dim_layer.setAttribute('class', 'dim2');
    dim_window.appendChild(dim_layer);
    // 제거 이벤트 연결
    dim_layer.onclick = removeDimModal2;

    return dim_window;
  };

  // modal 레이어를 생성
  createModal = function() {
    var container = createModalLayer();
    var headline  = createModalHeadline();
    var contents = createModalContent();
    var button    = createModalCloseButton();
    container.appendChild(headline);
    container.appendChild(contents);
    container.appendChild(button);
    body.appendChild(container);

    // button 요소에 dim, modal 제거 이벤트 연결
    button.onclick = removeDimModal;
  };
  // modal 윈도우 레이어 생성
  createModalLayer = function(){
    var modal_layer = document.createElement('div');
    modal_layer.setAttribute('class', 'modal-window');
    return modal_layer;
  };
  // 모달 헤드라인 생성
  createModalHeadline = function(){
    var headline = document.createElement('h3');
    var rank_btn = document.createElement('button');
    headline.setAttribute('class', 'modal-headline');
    rank_btn.setAttribute('class', 'modal-rank-btn');
    rank_btn.setAttribute('aria-label', '별점 남기기');
    var headline_text = document.createTextNode('신비한 동물사전');
    headline.appendChild(headline_text);
    headline.appendChild(rank_btn);
    return headline;
  };
  // 모달 콘텐츠 생성
  createModalContent = function(){
    var contents = document.createElement('div');
    var poster = document.createElement('img');
    var stars = document.createElement('span');
    var textarea = document.createElement('textarea');
    var button = document.createElement('button');

    contents.setAttribute('class', 'modal-contents');
    poster.setAttribute('class', 'modal-poster');
    poster.setAttribute('src', './images/photo-main-poster-4.png')
    stars.setAttribute('class', 'modal-stars');
    textarea.setAttribute('class', 'modal-textarea');
    textarea.setAttribute('placeholder', '이 영화에 대한 생각을 자유롭게 표현해주세요.');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'modal-ok-button');
    button.setAttribute('aria-label', 'Enter comment');

    var stars_text = document.createTextNode('별별별별별');
    var button_text = document.createTextNode('확인');

    stars.appendChild(stars_text);
    button.appendChild(button_text);

    contents.appendChild(poster);
    contents.appendChild(stars);
    contents.appendChild(textarea);
    contents.appendChild(button);

    return contents;
  };

  createModalContent2 = function(){
    var contents = document.createElement('div');
    var h2 = document.createElement('h4');
    var desc = document.createElement('p');
    var stars = document.createElement('span');
    var desc2 = document.createElement('p');
    var button = document.createElement('button');

    contents.setAttribute('class', 'modal-rank-contents');
    desc.setAttribute('class', 'modal-rank-desc')
    stars.setAttribute('class', 'modal-stars');
    button.setAttribute('class', 'modal-like-btn');
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', '보고싶은 영화로 등록하기');

    var h2_text = document.createTextNode('평가를 먼저 해주세요!');
    var stars_text = document.createTextNode('별별별별별');
    var desc_text = document.createTextNode('본 영화인가요?');
    var desc2_text = document.createTextNode('아직 안 본 영화인가요?');
    var btn_text = document.createTextNode('보고싶어요');

    h2.appendChild(h2_text);
    stars.appendChild(stars_text);
    desc.appendChild(desc_text);
    desc2.appendChild(desc2_text);
    button.appendChild(btn_text);

    contents.appendChild(h2);
    contents.appendChild(desc);
    contents.appendChild(stars);
    contents.appendChild(desc2);
    contents.appendChild(button);

    return contents;
  };

  // 모달 클로즈 버튼 생성
  createModalCloseButton = function(){
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'modal-close-button');
    button.setAttribute('aria-label', 'Close Modal Window');
    var button_text = document.createTextNode('x');
    button.appendChild(button_text);
    return button;
  };
  // 딤, 모달 제거
  removeDimModal = function() {
    // console.log(this);
    // var modal = this.parentNode;
    var modal = document.querySelector('.modal-window');
    var dim = document.querySelector('.dim');
    modal.parentNode.removeChild(modal);
    dim.parentNode.removeChild(dim);
  };

  removeDimModal2 = function() {
    // console.log(this);
    // var modal = this.parentNode;
    var modal = document.querySelector('.modal-rank-contents');
    var dim = document.querySelector('.dim2');
    modal.parentNode.removeChild(modal);
    dim.parentNode.removeChild(dim);
  };

  var tabpanels = document.querySelectorAll('.ui-carousel-tabpanel');

  tabpanels.forEach(function(tabpanel, index) {
    var tabpanel_btns = tabpanel.querySelectorAll('button');
    tabpanel_btns.forEach(function(btn, index) {

      if(index === 0) {
        btn.addEventListener('click', function(e) {
          if(e) { e.preventDefault(); }
          console.log('like');
        });
      } else if(index === 1) {
        btn.addEventListener('click', function(e) {
          if(e) { e.preventDefault(); }
          createModalWindow();
          var modal_ok_button = document.querySelector('.modal-ok-button');
          modal_ok_button.addEventListener('click', function(e) {
            if(e) { e.preventDefault(); }
            removeDimModal();
            // 서버로 코멘트 전송
          });
        });
      }
    });
  });





// })(this);
