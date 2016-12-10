/*! main.js © yamoo9.net, 2016 */


// App 모듈 정의 (의존 모듈 주입)
// require('angular-resource');
let angular = require('angular');

let fingo = angular.module('FingoApp', []);
// 모듈 환경 설정
// bipan.config(['$httpProvider', '$resourceProvider',($httpProvider, $resourceProvider)=> {
//   let token = 'Token e5af61bea9ac671d360850752fe9c775bf2f6e9a';
//   $httpProvider.defaults.headers.common['Authorization'] = token;
//   $resourceProvider.defaults.stripTrailingSlashes = false;
// }]);

// ListController
require('./controllers/ListController');
//
// // Custom Filter
// require('./filters/readingZeroFilter')
//
// require('./lib/jquery.min');
// require('./lib/jquery.easing.min');
// require('./jquery.radioClass');
// require('./ui-carousel-refactoring');
// require('./main-page');
// require('./main-add-comment');
// require('./directives/MyDirective');
require('./star');
require('./nav-scroll-event');
require('./nav-toggle-menu');
