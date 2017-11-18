'use strict';

class NavbarController {
  //start-non-standard

  constructor(AuthService){
    this.AuthService = AuthService;
  }





}

angular.module('videoClubApp')
  .component('navbar',{
    templateUrl:'components/navbar/navbar.html',
    controller:NavbarController,
    controllerAs:'vm'
  });
