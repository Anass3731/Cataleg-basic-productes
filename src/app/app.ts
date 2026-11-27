import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  template: `
    <h1>Botiga tecnològica</h1>
    <app-menu />
    <main>
      <router-outlet />
    </main>
  `,
})
export class App {}