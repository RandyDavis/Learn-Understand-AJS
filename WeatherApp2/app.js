
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

    .otherwise({ redirectTo: '/' });
});

// CONTROLLERS
weatherApp2.controller('HomeCtrl', ['$scope', function ($scope) {
  
}]);

weatherApp2.controller('ForecastCtrl', ['$scope', function ($scope) {
  
}]);