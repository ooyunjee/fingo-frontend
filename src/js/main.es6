/*! main.js © yamoo9.net, 2016 */


// App 모듈 정의 (의존 모듈 주입)
// require('angular-resource');
let angular = require('angular');

require('angular-resource');
require('angular-ui-router');
require('angular-route');
require('angular-css');

let fingo = angular.module('FingoApp', [
  'ngResource',
  'ui.router',
  'ngRoute',
  'angularCSS'
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
        'templateUrl' : 'views/main.html',
        'css' : 'css/main.css'

        // 'controller'  : 'ListController'
        //indexpage
      })
      .state('wish', {
        'url'         : '/wish',
        'templateUrl' : 'views/wish.html',
        'css' : 'css/wish.css'
        // 'controller'  : 'ListController',
        // 'controller' : 'FingoMovieDetailController'
        //sub moviespage
      })
      .state('movies', {
        'url'         : '/movies',
        'templateUrl' : 'views/movies.html',
        'css' : 'css/movies.css'
        // 'controller'  : 'ListController',
        // 'controller' : 'FingoMovieDetailController'
        //sub moviespage
      })
      .state('comments', {
        'url'         : '/comments',
        'templateUrl' : 'views/comments.html',
        'css' : 'css/comments.css'
        // 'controller'  : 'ListController',
        // 'controller' : 'FingoMovieDetailController'
        //sub comment page
      })
      .state('search', {
        'url'         : '/search',
        'templateUrl' : 'views/search.html',
        'css' : 'css/search.css'
        // 'controller'  : 'ListController',
        // 'controller' : 'FingoMovieDetailController'
        //sub comment page
      });

    $urlRouterProvider.otherwise('/');

    let token = 'Token 8b7e29cf10bd79af9f387f021d4a1cd0a8ecd291';
    $httpProvider.defaults.headers.common['Authorization'] = token;
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $resourceProvider.defaults.stripTrailingSlashes = false;

}]);
//Router
require('angular-ui-router');


// ListController
require('./controllers/ListController');
require('./controllers/FingoMovieDetailController');
require('./controllers/FingoWishMoviesController');
require('./controllers/FingoUserPageController');
require('./controllers/FingoMovieScoreController');



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
