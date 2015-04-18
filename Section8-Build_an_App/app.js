// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


// ROUTES

weatherApp.config (function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'HomeCtrl'
    })

    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'ForecastCtrl'
    });
});

// SERVICES
weatherApp.service('cityService', [function () {
  this.city = "Austin, Tx";
}]);

// CONTROLLERS

weatherApp.controller('HomeCtrl', ['$scope', 'cityService', function ($scope, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('ForecastCtrl', ['$scope', 'cityService', function ($scope, cityService) {
  $scope.city = cityService.city;
}]);