import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validarImagen'
})
export class ValidarImagenPipe implements PipeTransform {

  transform(imagenes: any[]): string {
    // si no es un arreglo regresa la imgn de no encontrada
    if (!imagenes) {
      return '../../assets/img/noimage.png';
      // si el arreglo no está vacío regresa la posicion de la imagen (la posicion 0 indica la dimension que escogimos en la API)
    } else if (imagenes.length > 0) {
      return imagenes[0].url;
    } else { // si está vacio regresa la imagen de no encontrada
      return '../../assets/img/noimage.png';
    }
  }

}
