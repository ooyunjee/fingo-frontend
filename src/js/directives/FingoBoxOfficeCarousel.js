var angular = require('angular');

angular
  .module('FingoApp')
  .directive('fingoBoxOfficeCarousel', function() {
    return {
      'restrict': 'EA',
      'templateUrl': '/js/directives/FingoBoxOfficeCarousel.html',
      'link': function(scope, element, attrs) {
        var main_box_office_carousel = {
          'height': {
            'desktop': 530,
            'tablet': 530
          },
          'index': {
            'desktop': 2,
            'tablet': 1,
            'mobile': 0
          },
          'col': {
            'desktop': 5,
            'tablet': 3,
            'mobile': 1
          },
          'margin': 20,
          'infinite': {
            'desktop': true,
            'tablet': true,
            'mobile': false
          }
        };

        scope.repeatComplete = function() {
          var $carousel = element.find('#main-box-office-carousel');
          $carousel.fingoCarousel(main_box_office_carousel);
        };

      }
    };

  });
