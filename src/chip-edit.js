/**
 * @ngdoc directive
 * @name core.directive:chipEdit
 *
 * @param {object} ng-model model
 *
 * @requires underscore
 *
 * @function
 *
 * @description
 * create base chip component 
 *
 * @example
<example module="core">
  <file name="index.html">
    <div ng-controller="Controller">
      <h1>Chip Directive</h1>
      <h3>Input</h3>
      {{ input }}
      <hr/>
      <h3>Output</h3>
      <div chip-edit ng-model="input"></div>
    </div>
  </file>
  <file name="script.js">
    angular.module('example', [])
    .controller('Controller', ['$scope', function($scope) {
      $scope.input = ['1', '2', '3'];
    }]);
  </file>
</example>
 */
core.directive('chipEdit', function(){
  return {
    require : 'ngModel',  
    scope: {
      chips : '=ngModel'
    },
    restrict: 'AE',
    template:
      '<div class="chips">' + 
        '<div class="chip-title">Tag: </div>' + 
        '<div class="chip" ng-repeat="chip in chips track by $index">' + 
        '<span class="chip-text">{{ chip }}</span>' +
        '<a ng-show="isEdit" class="chip-remove" ng-click="remove(chip)">x</a>' +
        '</div>' +
        '<input ng-show="isEdit" id="chip-input" ng-model="chip"' +
          'placeholder="add new tag"' + 
          'ng-keyup="$event.keyCode == 13 ? add(chip) : null" />' +
      '</div>',
    link : function(scope, element, attrs, ngModelCtrl){
      scope.isEdit = _.has(attrs.$attr, "edit")
      if(!_.isArray(scope.chips)) scope.chips = [];

      scope.add = function(chip){
        scope.chips.push(chip);
        scope.chip = "";
      }
      scope.remove = function(chip){
        scope.chips = _.without(scope.chips, chip);
      }
    }
  }
});
