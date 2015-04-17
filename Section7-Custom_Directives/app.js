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
    template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
    replace: true
  };
}]);