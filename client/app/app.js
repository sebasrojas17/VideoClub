'use strict';

angular.module('videoClubApp', [
 'videoClubApp.constants',
 'ngCookies',
 'ngResource',
 'ngSanitize',
 'ui.router',
 'ui.bootstrap',
 'satellizer',
 'ngMessages',
 'ngMaterial',
 'LocalStorageModule',
 'md.data.table'
  ])

.constant("API","http://10.72.197.247:8080/adsi2017_1261718-master")

.config(function($authProvider,API) {
    $authProvider.loginUrl = API+"/api/auth/login";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix= "VideoClub";

  })
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })

.config(function(localStorageServiceProvider){
  localStorageServiceProvider
  .setPrefix('LSVideoClub')
  .setStorageType('localStorage');
})
