import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // saber que ruta esta activa
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {}; // variable para inicializar el objeto para poder manipularlo
  topTracks: any[] = []; // declaramos un arreglo vacío para la data de los tracks que da la API
  data: boolean; // bandera para poder verificar si la data del item está vacía o ya tiene valor
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.data = false; // data vacía
    this.router.params.subscribe( params => { // recuperar todo lo que hay en la url, en este caso recuperamos el id
      // console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  getArtista(id: string) {
    this.data = false; // data vacía
    this.spotify.busquedaArtista(id).subscribe (artista => {
      console.log(artista);
      this.artista = artista; // asignando el valor del onjeto vacio al otorgado por spotify
      this.data = true; // data con información
    });
  }

  getTopTracks(id: string) {
    this.spotify.obtenerTopCancionesArtista(id).subscribe( topTracks => {
      console.log(topTracks); // imprimiendo lo que manda la API
      this.topTracks = topTracks;
    });
  }
}
