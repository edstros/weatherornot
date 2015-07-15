angular.module('weatherornot.weather', [])
  .controller('WeatherCtrl', function ($scope, $stateParams, $http) {
    $scope.city = $stateParams.city;
    $ionicLoading.show();
    $http.get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.lng).success(function (data) {
      $scope.current = data.currently;
      console.log(data);
      setTimeout($ionicLoading.hide, 1000);
    });
  });
