var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoMovieScoreDirective', function() {
    return {
      'restrict': 'EA',
      'templateUrl': 'views/FingoMovieScore.html',
      'controller': 'FingoMovieScoreController',
      'replace': true,
      'scope': {
        'movieId': '='
      }
    };
  });
