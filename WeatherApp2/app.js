
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

weatherApp2.controller('ForecastCtrl', ['$scope', 'cityService', function ($scope, cityService) {
  $scope.city = cityService.city;
}]);





// DIRECTIVES
