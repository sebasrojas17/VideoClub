'use strict';
(function(){

class TiendaComponent {
  constructor() {
    this.message = 'Hello';
  }
  $onInit(){
    this.productos = [
      {
        id:1,
        producto:'Balon de Fútbol',
        nombre:'Telstar 18',
        marca:'Adidas',
        tamaño:'Numero 5',
        precio:150000,
        imagen:'../assets/images/telstar.jpg'
      },
      {
        id:2,
        producto:'Guayos de Fútbol',
        nombre:'Nike Mercurial',
        marca:'Nike',
        talla:'38',
        precio:250000,
        imagen:'../assets/images/guayos.jpg'
      },
      {
        id:3,
        producto:'Peto de Entrenamiento',
        marca:'Adidas',
        talla:'L',
        precio:40000,
        imagen:'../assets/images/peto.jpg'
      },
      {
        id:4,
        producto:'Canilleras de Fútbol',
        nombre:'Nike Mercurial',
        marca:'Adidas',
        precio:87000,
        imagen:'../assets/images/canilleras.jpg'
      },
      {
        id:5,
        producto:'Guantes de Fútbol',
        nombre:'Guantes',
        marca:'Puma',
        precio:97000,
        imagen:'../assets/images/guantes.jpg'

      },
      {
        id:6,
        producto:'Medias de Fútbol',
        nombre:'Medias',
        marca:'Nike',
        precio:30000,
        imagen:'../assets/images/medias.jpg'
      }
    ];

this.carrito = [];
this.total = 0;
  }
  agregar(producto){
    console.log('Se agrego');
    this.carrito.push(producto);
    this.total += producto.precio;
  }
}

angular.module('videoClubApp')
  .component('tienda', {
    templateUrl: 'app/tienda/tienda.html',
    controller: TiendaComponent,
    controllerAs: 'vm'
  });

})();
