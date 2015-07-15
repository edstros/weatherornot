angular.module('weatherornot.settings', [])
  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
   $scope.scale = settings.getScale();
    $scope.precision = settings.getPrecision();



    $scope.$watch('scale', function () {
      if ($scope.scale === 'X') {
        $ionicLoading.show({
          template: '<img src="http://media2.giphy.com/media/9jUnLy8gVGUZq/giphy.gif">',
          duration: 1500
        });
      }
      settings.setScale($scope.scale);

    });
    $scope.$watch('precision', function () {
      settings.setPrecision($scope.precision);
    });
  })

  .factory('settings', function () {
    return {
      getScale: function () {
        return localStorage.getItem('scale') || 'K';
      },
      getPrecision: function () {
        return localStorage.getItem('precision') || '2';
      },
      setScale: function (s) {
        localStorage.setItem('scale', s);
      },
      setPrecision: function (p) {
        localStorage.setItem('precision', p);
      }
    };
  });
