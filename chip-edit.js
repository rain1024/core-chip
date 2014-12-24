core.directive('chipEdit', function(){
  return {
    require : 'ngModel',  
    scope: {
      chips : '=ngModel'
    },
    restrict: 'AE',
    templateUrl : 'chip-edit-template.html',
    link : function(scope, element, attrs, ngModelCtrl){
      scope.add = function(chip){
        alert("add");
        scope.input.push(chip);
        scope.chip = "";
      }
      scope.remove = function(chip){
        scope.input = _.without(scope.input, chip);
      }
    }
  }
});
