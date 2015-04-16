var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'MainController'
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'SecondController'
    });
});

myApp.service('nameService', function() {
  this.name = "John Doe";
  var self = this;
  this.namelength = function() {
    return self.name.length;
  };
});

myApp.controller('MainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
  $scope.name = nameService.name;

  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  });

  $log.log(nameService.name);
  $log.log(nameService.namelength());
}]);

myApp.controller('SecondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
  $scope.num = $routeParams.num || 1;

  $scope.name = nameService.name;

  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  });

}]);