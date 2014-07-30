define([
  'angular',
  'text!../partials/data-forms/edit-in-place.html',
  ], function(angular, editInPlaceTemplate) {
    'use strict';

    angular.module('chartbuilderDirectives')
      .directive('editInPlace', function() {
        return {
          restrict: 'EA',
          scope: {
            value: '=',
            type: '@?'
          },
          template: editInPlaceTemplate,
          link: function(scope, element) {
            var inputElement = angular.element(element.children()[1]);

            element.addClass('edit-in-place');

            scope.editing = false;

            scope.edit = function() {
              scope.editing = true;

              element.addClass('active');
              inputElement[0].focus();
            };

            inputElement.bind('keydown keypress', function(event) {
              if(event.which === 13) {
                scope.editing = false;
                element.removeClass('active');
              }
            });

            inputElement.bind('blur', function() {
              scope.editing = false;
              element.removeClass('active');
            });
          }
        };
      });
});
