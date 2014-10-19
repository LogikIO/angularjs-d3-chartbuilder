/*
 Modular version of the bar chart nvd3-directive
 */
"use strict";

(function() {
  define(['angular', 'angular_modules/nvd3-modules/discreteBarChart/data'], function(angular, data) {
    var module = {
      name: 'Bar Chart',
      slug: 'discreteBarChart',
      data: data
    };

    var template = ['<nvd3 options="dataStore.options" ',
                      'data="dataStore.data" ',
                      'colors="dataStore.colors" ',
                      'events="$root.events" ',
                      'config="{ extended: true }"></nvd3>'].join('');

    angular.module('chartbuilder.nvd3.discreteBarChart', ['chartbuilderServices', 'chartbuilder.nvd3'])
      /**
       * Add this module's state to ui-router routes
       */
      .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('chartbuilder.' + module.slug, {
          url: '/' + module.slug,
          views: {
            'graph': {
              template: template,
              controller: module.slug + 'Controller'
            }
          }
        });
      }])
      .run(['chartbuilderModuleRegistry', function(chartbuilderModuleRegistry) {
          var moduleOpts = {};
          moduleOpts[module.name] = {
            name: module.name,
            slug: module.slug,
            data: data,
            dataFormat: [{ 'key': 'label', 'type': 'text' }, { 'key': 'value', 'type': 'number' }],
            dataHelp: 'The first column will be the label for the bar, and subsequent columns will be added as data groups. Subsequent columns must be in a numerical format so values can be plotted against the y-axis.',
            template: template,
            meta: {
              title: module.name,
              subtitle: 'Subtitle for a bar chart',
              caption: '1a. Edit a caption for the graph',
            },
            options: {
              chart: {
                type: module.slug,
                height: 600,
                x: 'function:label/value',
                y: 'function:label/value',
                showValues: true,
                forceX: [null, null],
                forceY: [null, null]
              }
            }
          }

          // Add the slug and name definitions to chartbuilder
          angular.extend(chartbuilderModuleRegistry, moduleOpts);
        }
      ])
      .controller(module.slug + 'Controller', [
        '$scope',
        'chartbuilderData',
        'chartbuilderModuleRegistry',
        function($scope, chartbuilderData, chartbuilderModuleRegistry) {
          // Localize the datastore for the view
          $scope.dataStore = chartbuilderData;

          // Initialize the data -- store sample data and set structure
          chartbuilderData.init(chartbuilderModuleRegistry[module.name]);
        }
      ]);
  });
})();
