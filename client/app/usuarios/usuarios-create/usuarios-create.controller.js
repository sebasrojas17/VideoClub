'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService, $state, ciudadesService) {
    this.usuariosService = usuariosService;
    this.$state = $state;
    this.ciudadesService = ciudadesService;
    this.showValidaDocumento = false;
    this.usuario = {
      numDocumento:null,
      ciudad: {
        id: null
      }
    }
  }

  createUser(){
  	this.usuariosService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
        this.$state.go('usuarios-list');
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }

  querySearch(searchText){
    console.log(searchText);
    return this.ciudadesService.query({nombre:searchText}).$promise
    .then(response => {
      console.log("REST",response);
      return response;
    })
    .catch(err => {
      console.log("ERROR",err);
    })
}
    selectedItemChange(item){
      console.log("ITEM",item);
      if(item != undefined){
        this.usuario.ciudad.id = item.id;
        console.log(this.usuario);
    }
  }

  validarNumDocumento(){
    this.usuariosService.query({numDocumento:this.usuario.numDocumento}).$promise
    .then(response => {
      console.log("Valida",response);
      if(response.length == 0 || this.usuario.numDocumento == undefined){
        this.showValidaDocumento = false;
      }else{
        this.showValidaDocumento = true;
      }

      console.log();
    })
    .catch(err => {
      console.log("No existe",err);
    })
  }
}
UsuariosCreateComponent.$inject = ['usuariosService','$state','ciudadesService'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
