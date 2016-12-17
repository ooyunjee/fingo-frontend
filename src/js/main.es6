/*! main.es6 © heoyunjee, 2016 */

let angular = require('angular');

// 의존 모듈 로드
require('angular-resource');
require('angular-ui-router');
// require('angular-route');

// App 모듈 정의 (의존 모듈 주입)
let fingo = angular.module('FingoApp', [
  'ngResource',
  'ui.router',
]);

// 모듈 환경 설정
fingo.config([
  '$httpProvider',
  '$resourceProvider',
  '$stateProvider',
  '$urlRouterProvider',
  (
    $httpProvider,
    $resourceProvider,
    $stateProvider,
    $urlRouterProvider
  )=> {

    // $stateProvider
    $stateProvider
      .state('first', {
        'url'         : '/',
        'templateUrl' : 'views/first.html'
      })
      .state('login', {
        'url'         : '/login',
        'templateUrl' : 'views/login.html',
        'controller'  : 'FingoLoginController'
      })
      .state('signup', {
        'url'         : '/signup',
        'templateUrl' : 'views/signup.html',
        'controller'  : 'FingoLoginController'
      })
      .state('main', {
        'url'         : '/main',
        'templateUrl' : 'views/main.html'
        // 'controller'  :
      })
      .state('main.comment', {
        'url'         : '/comment/:id',
        'templateUrl' : 'views/FingoAddComment.html',
        'controller'  : 'FingoAddCommentController'
      });
      // .state('comment.rank', {
      //   'url'         : '/comment/:id/rank',
      //   'templateUrl' : 'views/comment-dim2.html',
      //   'controller'  : 'FingoAddCommentController'
      // });

    $urlRouterProvider.otherwise('/');

    let token = 'Token ' + window.localStorage['key1'];
    $httpProvider.defaults.headers.common['Authorization'] = token;
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $resourceProvider.defaults.stripTrailingSlashes = false;

}]);

// Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : '638541519685008',
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

// Directives
require('./directives/FingoHeaderCarousel');
require('./directives/FingoBoxOfficeList');
require('./directives/FingoBoxOfficeCarousel');
require('./directives/FingoMovieRankingCarousel');
// require('./directives/FingoAddCommentDirective');

// Services
require('./services/FingoSignupService');
require('./services/FingoLoginService');
// require('./services/FingoCommentService');

// Filters
require('./filters/getYearFilter');

// Controllers
require('./controllers/FingoSignupController');
require('./controllers/FingoLoginController');
require('./controllers/FBLoginController');
require('./controllers/FingoMovieDetailController');
require('./controllers/FingoBoxofficeController');
require('./controllers/FingoMovieRankingController');
require('./controllers/FingoAddCommentController');

// require('./controllers/FingoCommentController');


/**
 * --------------------------------
 * jQuery
 * ----------------------------- */
require('./lib/jquery.min');
require('./lib/jquery.easing.min');
require('./jquery.radioClass');

require('./ui-carousel-refactoring');
require('./nav-scroll-event');

// require('./comment-dim');
require('./main-page');
// require('./main-add-comment');
// require('./checkbox');
