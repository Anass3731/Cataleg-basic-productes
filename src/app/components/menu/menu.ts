import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  imports: [ RouterLink, RouterLinkActive],
  template: `
    <header>
      <nav>
        <a routerLink="/" routerLinkActive="activo"
           [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
        <a routerLink="/nosaltres" routerLinkActive="activo">Nosotros</a>
        <a routerLink="/llistaProductes" routerLinkActive="activo">Llista Productos</a>
      </nav>
    </header>
 
  `,
})
export class Menu {}