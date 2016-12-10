/*! main.js © yamoo9.net, 2016 */

let angular = require('angular');

// 의존 모듈 로드
require('angular-resource');

// App 모듈 정의 (의존 모듈 주입)
let fingo = angular.module('FingoApp', ['ngResource']);

// 모듈 환경 설정
fingo.config(['$httpProvider', '$resourceProvider',($httpProvider, $resourceProvider)=> {
  // let token = 'Token 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c';
  // $httpProvider.defaults.headers.common['Authorization'] = token;
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

// Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : '642288965949672',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// ListController
require('./controllers/ListController');
require('./controllers/FBLoginController');
// require('./controllers/FingoMovieDetailController');

require('./services/ListDataShareService');

// // Custom Filter
// require('./filters/readingZeroFilter')

// require('./lib/jquery.min');
require('./lib/jquery.easing.min');
require('./jquery.radioClass');
require('./checkbox');
// require('./ui-carousel-refactoring');
// require('./main-add-comment');
// require('./main-page');
// require('./directives/FingoBoxOfficeCarousel');
// require('./directives/FingoMovieRankingCarousel');
// require('./directives/FingoCommentDim');
