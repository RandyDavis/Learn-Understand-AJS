var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
  
  $scope.handle = "";

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  $http.get('http://codepen.io/RandyDavis/pen/Wbqjap.js')
      .success(function (result) {
        $scope.rules = result;
      })
      .error(function (data, status) {
        console.log(data);
      });

  $scope.newRule = '';
  $scope.addRule = function() {
    $http.post('http://codepen.io/RandyDavis/pen/Wbqjap.js', { newRule: $scope.newRule })
    .success(function (result) {
        $scope.rules = result;
        $scope.newRule = '';
    })
    .error(function (data, status) {
      console.log(data);
    });
  };

}]);