var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$filter', function ($scope, $filter) {
  
  $scope.handle = "";

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

}]);

