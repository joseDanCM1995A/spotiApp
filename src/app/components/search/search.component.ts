import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
 // declarando nuevo arreglo donde se almacenaran los artista
  artistas: any[] = [];
  // declarano variable para cuando carggue la data
  data: boolean;

   // inyectando el servicio
  constructor( private spotify: SpotifyService) {
   }



  // reciebiendo lo que se escriba en teclado
  buscar(termino: string) {
    console.log(termino);
     // si la data está cargando - no hay data
    this.data = true;
    this.spotify.busquedaArtistas(termino)
    .subscribe((data: any) => {
    // ya no se usa así con el map
    // console.log(data.artists.items);
    // así se usa con el map yq
    console.log(data);
    // ya no es necesaria esta referencia ya que usamos el map en el servicio
    // this.artistas = data.artists.items;
    // utilizamos solo el data ya que ya está la referencia con el map en el servicio
    this.artistas = data;
    // si la data ya se cargó
    this.data = false;
    });
  }

}
