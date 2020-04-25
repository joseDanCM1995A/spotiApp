// ejemplo para hacer peticiones http a una api
// import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
// // import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styles: []
// })
// export class HomeComponent implements OnInit {

//   // /declarando un array donde se van a almacenar los paises de la peticion
//   // paises: any[] = [];
// // declarando una variable de tipo http para pader manipular dicho servicio
//   constructor( /*private http: HttpClient*/ ) {
//     //  // haciendo la peticion
//     // this.http.get('https://restcountries.eu/rest/v2/lang/es')
//     // // recibiendo la información y mostrandola a través de la variable paisesResp de tipo any
//     // .subscribe((paisesResp: any) => {
//     //   // poniendo la data de la api recibida en el array definido localmente
//     //   this.paises = paisesResp;
//     //   console.log(paisesResp);
//     // });

//   }

// ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  nuevosLanzamientos: any[] = [];

  // declaramos una variable para destacar cuando no hay data y cuando ya hay data
  data: boolean; // declarando la vriable para verificar la data del item
  error: boolean; // declarando la variable para el error
  tipoError: string; // para guardar el tipo de error
  constructor( private spotify: SpotifyService) {
    // falso si no hay data
    this.data = true;
    this.error = false; // inicializando el error en falso

    this.spotify.obtenerNuevosLanzamientos()
    .subscribe((lanzamientos: any) => {
      // accediendo directamente a los items
      // console.log (lanzamientos.albums.items);
      console.log (lanzamientos);
      // ya no es necesario hacer esta referencia gracias al uso de map en el servicio
      // this.nuevosLanzamientos = lanzamientos.albums.items;
      this.nuevosLanzamientos = lanzamientos;
      // verdadero si ya hay data
      this.data = false;
    }, (errorApp) => {
      this.data = false; // desactivando el loading para que no salga
      this.error = true; // en dado caso de que se genere un error
      this.tipoError = errorApp.error.error.message;
    });
  }
}
