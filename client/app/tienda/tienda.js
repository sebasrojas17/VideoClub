'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tienda', {
        url: '/tienda',
        template: '<tienda></tienda>'
      });
  });
