var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope) {
  $scope.name = "Randy";
  $scope.occupation = "Web Developer";
  $scope.getName = function() {
    return ("Randy");
  };
  $scope.getName();
  console.log($scope);
});