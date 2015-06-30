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

//-----------//
// Controllers

weatherApp.controller('homeController', ['$scope', function($scope) {

}])


weatherApp.controller('forecastController', ['$scope', function($scope) {

}])

//-----------//
// Directives

//-----------//
// Services
