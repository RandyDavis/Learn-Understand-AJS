
//MODULE
var weatherApp2 = angular.module('weatherApp2', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp2.config(function($routeProvider) {
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
    })

    .otherwise({ redirectTo: '/' });
});

// SERVICES
weatherApp2.service('cityService', function() {
  this.city = "Austin, TX";
});




// CONTROLLERS
weatherApp2.controller('HomeCtrl', ['$scope', 'cityService', function ($scope, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });
}]);

weatherApp2.controller('ForecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
    callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFahrenheit = function(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
}]);


// DIRECTIVES
weatherApp2.directive('weatherReport', [function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  };
}]);






