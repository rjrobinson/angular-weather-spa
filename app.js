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
        .when('/forecast', {
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
        });



    }
])

// -- CONTROLLER :: FORECAST
weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService',
    function($scope, $resource, cityService) {

        $scope.city = cityService.city;

        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        $scope.weatherResult = $scope.weatherAPI.get({
            q: $scope.city,
            cnt: $scope.days
        });
        $scope.convertToFahrenheit = function(degK) {

            return Math.round((1.8 * (degK - 273)) + 32);

        }

        $scope.convertToDate = function(dt) {

            return new Date(dt * 1000);

        };

    }
])

//-----------//
// Directives
