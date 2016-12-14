/*! main.es6 © FINGO, 2016 */

let fingo = angular.module('FingoApp', ['ngResource']);

// App 모듈 정의 (의존 모듈 주입)
require('angular-resource');


// 모듈 환경 설정
fingo.config(['$httpProvider', '$resourceProvider',($httpProvider, $resourceProvider)=> {
  let token = 'Token cb4a980f063b2dd4b550886526494091c131448f';
  $httpProvider.defaults.headers.common['Authorization'] = token;
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

// Controllers
require('./controllers/ListController');
require('./controllers/FingoMovieDetailController');
require('./controllers/FingoCommentController');

// // Custom Filter
require('./filters/getYearFilter')

// require('./lib/jquery.min');
require('./lib/jquery.easing.min');
require('./jquery.radioClass');
require('./ui-carousel-refactoring');
// require('./main-add-comment');
require('./main-page');
require('./directives/FingoBoxOfficeCarousel');
require('./directives/FingoMovieRankingCarousel');
require('./directives/FingoHeaderCarousel');
// require('./directives/FingoCommentDim');
