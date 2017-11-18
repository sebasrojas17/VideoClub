'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService, NavegateParams, $state) {
    this.usuariosService = usuariosService;
    this.NavegateParams = NavegateParams;
    this.$state = $state;

    this.query = {
      limit:4,
      page:1
    };
  }

  $onInit(){
  	this.usuariosService.query().$promise
  	.then(response => {
  		console.log("USUARIOS OK",response);
      this.usuarios = response;
  	})
  	.catch(err => {
  		console.log("ERROR",err);
  	});


  }
  goUpdateUser(idUser){
    this.NavegateParams.setData('idUsuario', idUser);
    this.$state.go("usuarios-update");
  }


  cambiarEstado(item){
    this.usuariosService.update(item).$promise
    .then(response => {
      alert("Se ha efectuado el cambio de estado");
    })
    .catch(err => {
      alert("Hubo problemas al afectuar el cambio de estado");
    })
  }
}

//UsuariosListComponent.$inject = ['usuariosService'];
angular.module('videoClubApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
