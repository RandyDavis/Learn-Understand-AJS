var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('MainController', function($log, $scope, $filter, $resource) {
  // THE $log SERVICE

  // console.log($scope);
  // console.log($log);
  // $log.log("Hello");
  // $log.info("This is some info");
  // $log.warn("Warning!");
  // $log.debug("Some debug information while writing my code.");
  // $log.error("This is an error.");


  // THE $filter SERVICE 
  // $scope.name = "John";
  // $scope.formattedName = $filter('uppercase')($scope.name);

  // $log.info($scope.name);
  // $log.info($scope.formattedName);


  
  console.log($resource);

});
