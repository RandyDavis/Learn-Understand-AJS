var myApp = angular.module('myApp', []);

// myApp.controller('MainController', ['$scope', '$log', function($scope, $log) {


//   $log.info($scope);


// }]);


// Minified version of above code
// -must keep order of array items the same to match intended order of the function parameters
myApp.controller("MainController",["$scope","$log",function(o,n){n.info(o)}]);