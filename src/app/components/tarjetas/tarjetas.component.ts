import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent  {
   // recubiendo el valor de la variable nuevos lanzamientos desde home.component.ts
  @Input() items: any[] = [];
  constructor( private router: Router) { }

  verArtista(item: any) {
  // console.log(item); //imprimiendo todo el item
  let artistaId;

  if (item.type === 'artist') {
    artistaId = item.id; // si la tarjeta es artista, tomar directamente el id
  } else {
    artistaId = item.artists[0].id; // si la tarjeta contiene un album, navega hasta el artita y sustrae el id
  }
  // console.log(artistaId); // imprimiendo el id de la tarjeta seleccionada
  this.router.navigate(['/artista' , artistaId]);

  }

}
