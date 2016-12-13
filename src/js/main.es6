/*! main.js © yamoo9.net, 2016 */

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
      });

    $urlRouterProvider.otherwise('/');

    // let token = 'Token 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c';
    // $httpProvider.defaults.headers.common['Authorization'] = token;
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


// ListController
require('./controllers/FingoLoginController');
require('./controllers/FBLoginController');
// require('./controllers/FingoMovieDetailController');

// require('./services/ListDataShareService');

// // Custom Filter
// require('./filters/readingZeroFilter')

require('./lib/jquery.min');
require('./lib/jquery.easing.min');
require('./jquery.radioClass');
// require('./checkbox');
