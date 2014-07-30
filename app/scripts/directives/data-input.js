define([
  'angular',
  'text!../partials/data-forms/structure-data-input.html',
  ], function(angular, dataFormTemplate) {
    'use strict';

    angular.module('chartbuilderDirectives').
      directive('structureDataInput', function() {
        return {
          restrict: 'EA',
          scope: {
            structureData: '=',
          },
          template: dataFormTemplate,
          link: function(scope) {
            scope.dataGroupBox = {};
            scope.newRow = {};

            scope.$watch('structureData.data', function(newval) {
              angular.forEach(newval, function(val, gidx) {
                scope.newRow[gidx] = {};
              });
            }, true);

            scope.addRow = function(gidx) {
              var validate = true;
              angular.forEach(scope.structureData.columnValues, function(type, key) {
                if (!_.has(scope.newRow[gidx], key) || scope.newRow[gidx][key] === null) {
                  validate = false;
                }
              });
              if (!validate) {
                return false;
              }
              scope.structureData.data[gidx].values.push(scope.newRow[gidx]);
            };

            scope.removeRow = function(gidx, idx) {
              scope.structureData.data[gidx].values.splice(idx, 1);
            };
          }
        };
      });
});
