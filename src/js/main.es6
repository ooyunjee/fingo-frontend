/*! main.js © yamoo9.net, 2016 */

let fingo = angular.module('FingoApp', []);

// App 모듈 정의 (의존 모듈 주입)
// require('angular-resource');


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
require('./lib/jquery.easing.min');
require('./jquery.radioClass');
require('./ui-carousel-refactoring');
require('./main-page');
require('./main-add-comment');
require('./directives/MyDirective');
