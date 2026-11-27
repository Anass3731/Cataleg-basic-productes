import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { LlistaProductes } from './components/llistaProductes/llistaProductes';
import { Menu } from './components/menu/menu';
import { Pagina404 } from './components/pagina404/pagina404';



export const routes: Routes = [
 
  { path: ' ', component: Inicio }, 
 
  { path: 'llistaProductes', component: LlistaProductes}, 
 
  { path: 'menu', component: Menu }, 
 
  { path: '**', component: Pagina404 } 
];