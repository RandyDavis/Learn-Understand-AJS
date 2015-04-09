var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$timeout', function ($scope, $timeout) {
  
  $scope.name = "Randy";

  $timeout(function() {
    $scope.name = 'Everybody';
  }, 3000);
}]);