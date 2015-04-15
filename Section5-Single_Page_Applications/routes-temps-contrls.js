var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/third', {
      templateUrl: 'pages/myctrl.html',
      controller: 'myController'
    })

    .when('/last', {
      templateUrl: 'pages/last.html',
      controller: 'LastController'
    });
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';

    $log.main = 'Property from main';
    $log.log($scope);
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num;
    $scope.name = $scope.num;

    
}]);

myApp.controller('myController', ['$scope', '$log', function($scope, $log) {
  $scope.name = 'MyContrlr';
  $log.third = 'Property from third';
  $log.log($scope);
}]);

myApp.controller('LastController', ['$scope', '$log', function($scope, $log) {
  $scope.name = 'LastContrlr';
}]);