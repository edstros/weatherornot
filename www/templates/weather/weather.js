angular.module('weatherornot.weather', [])
  .controller('WeatherCtrl', function ($scope, $stateParams, weather, $ionicLoading) {
    $scope.city = $stateParams.city;
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

.factory('weather', function ($http) {
  return {
    getWeather: function (lat, lng) {
      return $http.get('/api/forecast/' + lat + ',' + lng)
    }
  };
});
