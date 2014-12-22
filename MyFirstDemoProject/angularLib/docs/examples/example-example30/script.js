  angular.module('form-example2', []).directive('contenteditable', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        // Partials -> model
        elm.on('blur', function() {
          scope.$apply(function() {
            ctrl.$setViewValue(elm.html());
          });
        });

        // model -> Partials
        ctrl.$render = function() {
          elm.html(ctrl.$viewValue);
        };

        // load init value from DOM
        ctrl.$setViewValue(elm.html());
      }
    };
  });