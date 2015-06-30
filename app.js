// Main Module

var weatherApp = angular.module('weatherApp', [
    'ngRoute',
    'ngResource'
]);

//-----------//
// Routing

weatherApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/forcast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
}])

//----------//
// Services

weatherApp.service('cityService', function() {

    this.city = "New York, NY";

})

//-------------//
// Controllers

// -- CONTROLLER :: HOME
weatherApp.controller('homeController', ['$scope', 'cityService',
    function($scope, cityService) {

        $scope.city = cityService.city;

        $scope.$watch('city', function() {
            cityService.city = $scope.city
        })

    }
])

// -- CONTROLLER :: FORECAST
weatherApp.controller('forecastController', ['$scope', 'cityService',
    function($scope, cityService) {

        $scope.city = cityService.city;
    }
])

//-----------//
// Directives
