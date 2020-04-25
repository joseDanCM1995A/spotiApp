import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importando el routerModule y poniendolo en imports
import { RouterModule } from '@angular/router';

// importando para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// importando el servicio
import { SpotifyService } from './services/spotify.service';

// importar rutas
import { ROUTES } from './app.routes';
import { ValidarImagenPipe } from './pipes/validar-imagen.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    ValidarImagenPipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    // dentro de forRoot lleva como parámetro la clase de las rutas
    // mandando como 2do parámetro que queremos usar hash
    RouterModule.forRoot(ROUTES, {useHash: true}),
    // todo lo que lleve MODULE va en imports
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
