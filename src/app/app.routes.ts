import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { LlistaProductes } from './components/llistaProductes/llistaProductes';
import { Pagina404 } from './components/pagina404/pagina404';
import { Nosaltres } from './components/nosaltres/nosaltres';


export const routes: Routes = [
 
  { path: '', component: Inicio }, 
 
  { path: 'llistaProductes', component: LlistaProductes},

  { path: 'nosaltres', component: Nosaltres}, 
 
  { path: '**', component: Pagina404 } 
];