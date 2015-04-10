var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {
  
  $scope.handle = "";

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  var rulesrequest = new XMLHttpRequest();

  rulesrequest.onreadystatechange = function() {
    $scope.$apply(function() {
      if(rulesrequest.readystate == 4 && rulesrequest.status == 200) {
        $scope.rules = JSON.parse(rulesrequest.responseText);
      }
      
    });
  }

  rulesrequest.open("GET", "http://codepen.io/RandyDavis/pen/Wbqjap.js", true);
  rulesrequest.send();

}]);