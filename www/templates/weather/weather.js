angular.module('weatherornot.weather', [])
  .controller('WeatherCtrl', function (settings, $scope, $stateParams, weather, $ionicLoading) {
    $scope.city = $stateParams.city;
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

    $ionicLoading.show({
      template: '<img src="http://i.imgur.com/EeE1Lsp.gif"><h1>Loading...</h1>'
    });

    weather
      .getWeather($stateParams.lat, $stateParams.lng)
      .success(function (data) {
        setTimeout(function () {
          $scope.current = data.currently;
          $ionicLoading.hide();
        }, 500);
      });
  })

.factory('weather', function (settings, $http) {
  var API_URL = '/api/forecast/';
  return {
    getWeather: function (lat, lng) {
      var url = API_URL + lat + ',' + lng + '?units=';
      if (settings.scale === 'C') {
        url += 'si';
      } else {
        url += 'us';
      }
      return $http.get(url);
    }

  };
});


/*
what we want
- the default is fahrenheit
- if user selects celsius, we need to append ?units=si to the end of the api call.
- if the user selects kelvin, we need something like
function convertToKelvin (temp) {
  (temp + 459.67) x (5 / 9);
}


*/
