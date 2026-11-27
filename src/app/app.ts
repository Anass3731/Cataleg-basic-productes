import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template:  `
    <header>
      <nav>
        <a routerLink="/" routerLinkActive="activo"
           [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
        <a routerLink="/menu" routerLinkActive="activo">Menu</a>
        <a routerLink="/llistaProductes" routerLinkActive="activo">llistaProductes</a>
      </nav>
    </header>
 
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
 
}
