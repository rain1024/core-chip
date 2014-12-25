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
    templateUrl : 'bower_components/core-chip/src/chip-edit-template.html',
    link : function(scope, element, attrs, ngModelCtrl){
      scope.isEdit = _.has(attrs.$attr, "edit")
      console.log(scope.isEdit);
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
