angular.module('weatherornot.settings', [])
  .controller('SettingsCtrl', function (settings, weather, $scope, $ionicLoading) {
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
      settings.precision = $scope.precision;
    });
  })
  .factory('settings', function () {
    return {
      get scale() {
        return localStorage.getItem('scale') || 'F';
      },
      get precision() {
        return localStorage.getItem('precision') || '1';
      },
      set scale(s) {
        localStorage.setItem('scale', s);
      },
      set precision(p) {
        localStorage.setItem('precision', p);
      }
    };
  })
  .factory('locations', function () {
    return {
      get favorites() {
        var json = localStorage.getItem('favorites');
            return JSON.parse(json);
          },
          set favorites(f) {
            var data = JSON.stringify(f);
            localStorage.setItem('favorites', json);
          },
          addFavorite: function (f) {
          this.favorites = this.favorites.concat(f);
            /*var favorites = this.favorites;
            favorites.push(f);
            this.favorites = favorites;*/

          },
         // removeFavorite: function () {},


/*      favorites: [{
        city: 'Cupertino, CA',
        lat: '37.3175',
        lng: '122.0419'
          }, {
        city: 'Mountain View, CA',
        lat: '37.3894',
        lng: '122.0819'
          }, {
        city: 'Redmond, WA',
        lat: '47.6694',
        lng: '122.1239'
          }, {
        city: 'Nashville, TN',
        lat: '36.1667',
        lng: '86.7833'
          }]*/
    }
  });
