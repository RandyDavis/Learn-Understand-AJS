var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', function ($scope) {
  $scope.alertClick = function() {
    alert("clicked!");
  };

  $scope.name = "Randy";
}]);