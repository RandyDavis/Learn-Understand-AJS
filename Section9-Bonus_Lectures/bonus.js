var bonusApp = angular.module('bonusApp', []);

bonusApp.controller('parent1Controller', ['$scope', function ($scope) {
  $scope.parent1vm = {};
  $scope.parent1vm.message = 'Parent 1 Message!';

}]);

bonusApp.controller('child1Controller', ['$scope', function ($scope) {
  $scope.child1vm = {};
  $scope.child1vm.message = 'Child 1 Message!';

}]);

bonusApp.controller('parent2Controller', [function () {

  this.message = 'Parent 2 Message!';

}]);

bonusApp.controller('child2Controller', [function () {

  this.message = 'Child 2 Message!';

}]);