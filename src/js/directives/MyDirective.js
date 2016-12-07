var angular = require('angular');

angular
  .module('FingoApp')
  .directive('myDirective', function() {

    var link = function(scope, element, attrs) {
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

      element.find('#main-box-office-carousel').fingoCarousel(main_box_office_carousel);
    };

    return {
      'restrict': 'EA',
      'templateUrl': '/js/directives/MyDirective.html',
      'link': link,
      'scope': {
        'movie': '=MyDirective'
      },
      'controller': 'ListController'
    };
  });
