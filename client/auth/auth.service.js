'use strict';

function AuthService($auth,$state, localStorageService){
    var Auth = {
        login:login,
        isAuthenticated:isAuthenticated,
        logout:logout,
        isAdmin:isAdmin,
        getRoles:getRoles
    };

    function login(usuario){
        $auth.login(usuario)
        .then(response => {
          $state.go("main");
          localStorageService.setData('idUsuarioLogueado')
            console.log("Login ok",response);

            $state.go('main');
        })
        .catch(err => {
            console.log("Error de login");
            $state.go('login');
        });
    }

    function logout(){
      if(Auth.isAuthenticated()){
        $auth.logout()
        .then(response => {
          $state.go("main");
          console.log("Salida ok");
        })
      }

    }
    function isAuthenticated(){
      if($auth.isAuthenticated()){
        return true;
      }else{
        return false;
      }
    }
/* Toma todos los roles que tenga el usuario que inicia sesion */
function getRoles(){
  if(Auth.isAuthenticated()){
    return $auth.getPayload().roles

  }else{
    return false;
  }
}
/* Toma todos los roles que tenga el usuario que inicia sesion */
function getIdUser(){
  if(Auth.isAuthenticated()){
    return $auth.getPayload().sub

  }else{
    return false;
  }
}

/*Roles De Admin*/

function isAdmin(){
  if(Auth.isAuthenticated()){
    if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
      return true;
    }else{
      return false;
    }
  }else{
    return false;

  }
}

    return Auth;
}
angular.module('videoClubApp')
  .factory('AuthService',AuthService);
