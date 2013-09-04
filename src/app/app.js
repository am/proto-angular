
angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | wuaki' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location) {

})

;


angular.module('moviesServices', ['ngResource'])

.factory('Movies', function($resource) {
  return $resource('https://uk-qa-api.wuaki.tv/:content.json?displayed_on_frontpage=1&device=web', {}, {
    query: {method:'GET', params:{content:'lists'}, isArray:true}
  });
});

