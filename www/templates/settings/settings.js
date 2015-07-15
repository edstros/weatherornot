angular.module('weatherornot.settings', [])
  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
   $scope.scale = settings.scale;
    $scope.precision = settings.precision;



    $scope.$watch('scale', function () {
      if ($scope.scale === 'X') {
        $ionicLoading.show({
          template: '<img src="http://media2.giphy.com/media/9jUnLy8gVGUZq/giphy.gif">',
          duration: 1500
        });
      }
      settings.scale = $scope.scale;

    });
    $scope.$watch('precision', function () {
      settings.precision($scope.precision);
    });
  })

  .factory('settings', function () {
    return {
      get scale  () {
        return localStorage.getItem('scale') || 'F';
      },
      get precision() {
        return localStorage.getItem('precision') || '1';
      },
      set scale (s) {
        localStorage.setItem('scale', s);
      },
      set precision (p) {
        localStorage.setItem('precision', p);
      }
    };
  });
