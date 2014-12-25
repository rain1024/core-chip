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
	 <div ng-controller="">
    hihi
	 </div>
	 </file>
	 <file name="script.js">
     var a = 5;
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
    templateUrl : 'bower_components/core-chip/chip-edit-template.html',
    link : function(scope, element, attrs, ngModelCtrl){
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
