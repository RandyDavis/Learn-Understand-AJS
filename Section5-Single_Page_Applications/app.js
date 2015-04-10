var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', function ($scope) {
  
  $scope.name = "Main";

}]);

myApp.controller('SecondController', ['$scope', function ($scope) {
  
  $scope.second = "Second";

}]);