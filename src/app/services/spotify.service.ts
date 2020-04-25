import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// importando lo necesario para poder usar map
import { map } from 'rxjs/operators';
@Injectable()
export class SpotifyService {
  nuevosLanzamientos: any[] = [];

  constructor( private http: HttpClient) {
    console.log('el Servicio Spotify está listo');
  }

// funcion para centralizar todo el codigo repetido
  obtenerQuery( query: string){
    // declarando una constante donde se mandará la url general
    const url = `https://api.spotify.com/v1/${ query }`;

    // copiando los headers
       // declarando constante para manejar los headers para poder mandar el token de autorizacion y que nos devuelva la información
    const headers = new HttpHeaders({
        // token de autorización
        // tslint:disable-next-line: max-line-length
        Authorization: 'Bearer BQDGiPKQQrzCyFLaWGWCKXSPpTi2_Gt6lt3411W6otVrAiAXAAAE4dtMBeQ6U5NDXIlONuczPGTgZlYFIC1oUr__fWS1jw4O5TStg3fXUmeIxM-2UG_P6r2ynXCoRTI83Wq2Mm4IACnfMrw9ECsztjXL1hIz694'
       });
    // retornando la funcion
    return this.http.get(url, { headers });
  }

  obtenerNuevosLanzamientos() {
    // // declarando constante para manejar los headers para poder mandar el token de autorizacion y que nos devuelva la información
    // const headers = new HttpHeaders({
    //   // token de autorización
    //   // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length
    //   Authorization: 'Bearer BQDHC_v2cJcgoQK9F6d-CswUqOKXzt90FKQeogAr4fxMk1yumjA6Q3gADSBYDtHs9az7E4uzyTbBTh9VG8te5gtMUaqo0iOieAEMKvtcqBtMv6ca-9WJyJ4-t2IaEelJqNnLlM_x9AlkHPSrFqWwj1vZfGh-Nnc'
    // });
    // haciendo la petición a la API de spotify
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {  headers })
    // manipulando la información cruda a nuestro placer
     // tslint:disable-next-line: no-string-literal
    // .pipe( map (data => data['albums'].items));

    // utilizando la nueva forma centralizada
    return this.obtenerQuery('browse/new-releases')
    // agregamos el pipe para transformar la información
    // tslint:disable-next-line: no-string-literal
    .pipe( map (data => data['albums'].items));
  }

  // nuevo servicio de busqueda
  busquedaArtistas(termino: string) {
    //  // declarando constante para manejar los headers para poder mandar el token de autorizacion y que nos devuelva la información
    //  const headers = new HttpHeaders({
    //   // token de autorización(
    //   // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length
    //   Authorization: 'Bearer BQDHC_v2cJcgoQK9F6d-CswUqOKXzt90FKQeogAr4fxMk1yumjA6Q3gADSBYDtHs9az7E4uzyTbBTh9VG8te5gtMUaqo0iOieAEMKvtcqBtMv6ca-9WJyJ4-t2IaEelJqNnLlM_x9AlkHPSrFqWwj1vZfGh-Nnc'
    // });
    // haciendo la petición a la API de spotify
     return this.obtenerQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
      // tslint:disable-next-line: no-string-literal
     .pipe( map ( data => data['artists'].items));
  }

  busquedaArtista(id: string) {
    return this.obtenerQuery(`artists/${id}`);
    // tslint:disable-next-line: no-string-literal
   // .pipe( map ( data => data['artists'].items));
  }

  obtenerTopCancionesArtista(id: string) {
  return this.obtenerQuery(`artists/${id}/top-tracks?country=us`)
  .pipe( map ( data => data['tracks'])); //el pipe map se usa para cuando es necesario traer cosas especificas del objeto
  }
}
