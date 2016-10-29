(function() {
  angular
    .module('blogApp')
    .directive('colorpicker', function(){
  return {
    require: '?ngModel',
    link: function (scope, elem, attrs, ngModel) {
      elem.spectrum();
      if (!ngModel) return;
      ngModel.$render = function () {
        elem.spectrum('set', ngModel.$viewValue || '#fff');
      };
      elem.on('change', function () {
        scope.$apply(function () {
          ngModel.$setViewValue(elem.val());
        });
      });
    }
  }
});
})();