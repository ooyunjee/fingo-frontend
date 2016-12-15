/*! main.js © yamoo9.net, 2016 */


// App 모듈 정의 (의존 모듈 주입)
// require('angular-resource');
let angular = require('angular');

require('angular-resource');
require('angular-ui-router');

let fingo = angular.module('FingoApp', [
  'ngResource',
  'ui.router',
]);

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
      .state('main', {
        'url'         : '/',
        'templateUrl' : 'views/main.html'
        // 'controller'  : 'ListController'
        //indexpage
      })
      .state('movies', {
        'url'         : '/movies',
        'templateUrl' : 'views/movies.html',
        // 'controller'  : 'ListController',
        // 'controller' : 'FingoMovieDetailController'
        //sub moviespage
      })
      .state('comment', {
        'url'         : '/comment',
        'templateUrl' : 'views/comments.html',
        // 'controller'  : 'ListController',
        // 'controller' : 'FingoMovieDetailController'
        //sub comment page
      });

    $urlRouterProvider.otherwise('/');

    // let token = 'Token 9f2411a57a0d3b0495ece88ad38c336c6c8afb6c';
    // $httpProvider.defaults.headers.common['Authorization'] = token;
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $resourceProvider.defaults.stripTrailingSlashes = false;

}]);
//Router
require('angular-ui-router');


// ListController
require('./controllers/ListController');
require('./controllers/FingoMovieDetailController');
require('./controllers/FingoWishMoviesController');


// Custom Filter
require('./filters/readingZeroFilter');
require('./filters/loadMore');



require('./lib/jquery.min');
require('./lib/jquery.easing.min');
require('./jquery.radioClass');
// require('./ui-carousel-refactoring');
// require('./main-page');
// require('./main-add-comment');
require('./directives/MyDirective');
require('./nav-scroll-event');
require('./nav-toggle-menu');
require('./graph');
// require('./movie-add-movie-info');
require('./star');
