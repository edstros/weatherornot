angular.module('weatherornot.settings', [])
  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

    $scope.randomScale = function () {
      $ionicLoading.show({
        template: '<img src="http://media2.giphy.com/media/9jUnLy8gVGUZq/giphy.gif">',
        duration: 5000
      });
    };
    $scope.precisionsChanged = function () {
      console.log($scope.precision);

    };
    $scope.$watch('scale', function () {
      console.log($scope.scale);
      localStorage.scale = $scope.scale;
    });
    $scope.$watch('precision', function () {
      console.log($scope.precision);
      localStorage.precision = $scope.precision;
    });
  })

.factory('weather', function ($http) {
  return {
    getWeather: function (lat, long) {
      return $http
        .get('/api/forecast/' + lat + ',' + long)
    }
  };
});
