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
