import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artista/:id', component: ArtistaComponent }, // recibiendo como parametro el id
  { path: 'search', component: SearchComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


