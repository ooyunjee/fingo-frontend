/*! main.js © yamoo9.net, 2016 */


// App 모듈 정의 (의존 모듈 주입)
// require('angular-resource');
let angular = require('angular');

let fingo = angular.module('FingoApp', []);


//Router
require('angular-ui-router');


// ListController
require('./controllers/ListController');
require('./controllers/FingoMovieDetailController');
// require('./controllers/FingoMovieDetailCommentController');


// Custom Filter
require('./filters/readingZeroFilter');


// repuire('./lib/ng-infinite-scroll');

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
