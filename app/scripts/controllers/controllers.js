define(['angular', 'services', 'rgbcolor', 'StackBlur', 'canvg', 'angular-color-picker'], function(angular) {
  'use strict';

  /* Controllers */

  angular.module('chartbuilderControllers', ['chartbuilderServices', 'colorpicker.module'])
    .controller('headerCtrl', [
      '$scope',
      '$location',
      function($scope, $location) {
        $scope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };
      }
    ])
    .controller('Chartbuilder', [
      '$scope',
      '$location',
      '$state',
      '$http',
      '$filter',
      '$stateParams',
      'chartbuilderModuleRegistry',
      'chartbuilderData',
      'chartbuilderSelectedModule',
      'chartbuilderUtils',
      function($scope, $location, $state, $http, $filter, $stateParams, chartbuilderModuleRegistry, chartbuilderData, chartbuilderSelectedModule, chartbuilderUtils) {
        $scope.modules = chartbuilderModuleRegistry;
        $scope.selectedChartType = chartbuilderSelectedModule;
        $scope.chartbuilderData = chartbuilderData;

        $scope.changeChartType = function(type) {
          if (angular.isUndefined(type) || type === '') {
            return false;
          }
          $state.go('chartbuilder.' + type);
        };

        $scope.showSampleData = function() {
          chartbuilderData.showSampleData();
        };

        $scope.resetData = function() {
          chartbuilderData.resetData();
        };

        $scope.addGroup = function() {
          if (!$scope.newDataGroup) {
            return false;
          }
          chartbuilderData.addGroup($scope.newDataGroup);
          $scope.newDataGroup = '';
        };

        $scope.getAdvancedOptions = function() {
          if (!$scope.optionsLoaded) {
            $scope.nodeOptions.refresh();
            $scope.optionsLoaded = true;
          }
        };

        $scope.addColor = function() {
          $scope.chartbuilderData.colors.push('#FFFFFF');
        };

        $scope.saveImage = function() {

          // Set up elements and svg
          var chartElement = document.getElementById('chart'),
            svg = chartElement.getElementsByTagName('svg')[0],
            svg_xml = (new XMLSerializer).serializeToString(svg),
            canvas = document.getElementById('canvas');

          // SVG -> Canvas
          canvg('canvas', svg_xml);

          // Canvas -> file
          var a = document.createElement('a');
          a.download = "image.png";
          a.href = canvas.toDataURL('image/png');
          document.body.appendChild(a);
          a.click();

        }

        $scope.svgToString = function() {

          // Set up elements and svg
          var chartElement = document.getElementById('chart'),
            svg = chartElement.getElementsByTagName('svg')[0],
            svg_xml = (new XMLSerializer).serializeToString(svg);

          // Bind svg string to textarea
          $scope.exportedSVG = svg_xml;

        }

      }]);
});
