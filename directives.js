//-----------//
// Directives


weatherApp.directive("weatherResults", function() {
    return {
        restrict: "E",
        templateUrl: 'directives/weatherResults.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});
