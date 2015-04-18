var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'MainCtrl'
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'SecondCtrl'
    });
});

myApp.controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {
  
}]);

myApp.controller('SecondCtrl', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

}]);


myApp.directive('searchResult', [function () {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true
  };
}]);