'use strict';
var app = angular.module('myBookApp', [
            'ui.router',
            'ngStorage',
            'ngCookies'
        ]);
// 525712362247-uvh7aaf07u9gj9mrgmkm79j6s09v9bgc.apps.googleusercontent.com
//  JpMuAC9hMQBkK3b94lauEujW 
app.constant('GOOGLE_API_KEY', 'AIzaSyDwJEIHxvudlfkakSAOvU9n8-jsbZtTtT4');
app.constant('SITEURL', 'http://localhost/mybookstore');

app.config(function ($stateProvider, $urlRouterProvider,$httpProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state( 'public',{
      	url: '',
        views:{
          'app':{
            templateUrl: 'components/layouts/public.html'
          }
        }
      })
      .state( 'public.mybooklist',{
        url: '/',
        views:{
          "container@public":{
            templateUrl: 'components/templates/wishlist/wishlist.html',
            controller:'WishlistController'
          }
        }
      });
      
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
app.run(["$rootScope","SITEURL", function($rootScope,SITEURL) {
  $rootScope.SITEURL = SITEURL;
}]);
