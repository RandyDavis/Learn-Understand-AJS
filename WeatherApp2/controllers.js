// CONTROLLERS

weatherApp2.controller('HomeCtrl', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path("/forecast");
  };

}]);

weatherApp2.controller('ForecastCtrl', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {
  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  // $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
  //   callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

  $scope.weatherResult = weatherService.GetWeather( $scope.city, $scope.days );
  
  $scope.convertToFahrenheit = function(degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  };

  $scope.convertToDate = function(dt) {
    return new Date(dt * 1000);
  };
}]);