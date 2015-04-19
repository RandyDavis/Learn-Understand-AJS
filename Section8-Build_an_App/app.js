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
    })

    .when('/forecast/:days', {
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

weatherApp.controller('ForecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
  $scope.city = cityService.city;

  $scope.days = $routeParams.days || 2;

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
    callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }
  });

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  $scope.convertToFahrenheit = function(degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  };

  $scope.convertToDate = function(dt){
    return new Date(dt*1000);
  };
}]);













