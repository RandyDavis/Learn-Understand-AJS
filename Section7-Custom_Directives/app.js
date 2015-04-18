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
  $scope.person = {
    name: 'John Doe',
    address: '55 Main St.',
    city: 'New York',
    state: 'NY',
    zip: '11111'
  };

  $scope.formattedAddress = function (person) {
    return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
  };
  
}]);

myApp.controller('SecondCtrl', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

}]);


myApp.directive('searchResult', [function () {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      // personName: "@",  // @ symbol means "text" or 1-way binding
      // personAddress: "@"
      personObject: "=",    // = sign means 2-way binding
      formattedAddressFunction: "&"  // & sign means it is a function
    }
  };
}]);