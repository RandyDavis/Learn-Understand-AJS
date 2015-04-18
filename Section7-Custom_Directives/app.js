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
  $scope.people = [
    {
      name: 'John Doe',
      address: '555 Main St.',
      city: 'New York',
      state: 'NY',
      zip: '11111'
    },
    {
      name: 'Janet Doe',
      address: '345 Westover Ln.',
      city: 'Buffalo',
      state: 'NY',
      zip: '13211'
    },
    {
      name: 'Connor Mij',
      address: '75 Dill St.',
      city: 'Miami',
      state: 'FL',
      zip: '12119'
    }
  ];

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
    },
    compile: function(elem, attrs) {
      console.log('Compiling...');
      // elem.removeAttr('class');
      console.log(elem);

      return {
        // pre: function(scope, elements, attrs) {
        //   console.log('Pre-linking...');
        //   console.log(elements);
        // },  // ANGULAR JS says to avoid pre-link as it's not safe

        post: function(scope, elements, attrs) {
          console.log('Post-linking...');

          console.log(scope);

          if(scope.personObject.name == 'Janet Doe') {
            elements.removeAttr('class');
          }
          console.log(elements);
        }
      };
    }
  };
}]);








