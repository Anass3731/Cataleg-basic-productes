import { Component } from '@angular/core';

@Component({
  selector: 'app-llista-productes',
  imports: [],
  templateUrl: './llistaProductes.html',
  styleUrl: './llistaProductes.css',
})
export   class LlistaProductes {
  productes = [
    { nom: "Minecraft", preu: 29.99, disponible: true },
    { nom: "GTA V", preu: 19.99, disponible: true },
    { nom: "FIFA 25", preu: 59.99, disponible: false },
    { nom: "The Witcher 3", preu: 39.99, disponible: true },
    { nom: "Red Dead Redemption 2", preu: 49.99, disponible: true },
    { nom: "Elden Ring", preu: 59.99, disponible: false },
    { nom: "Cyberpunk 2077", preu: 44.99, disponible: true },
    { nom: "Call of Duty: Modern Warfare", preu: 69.99, disponible: true },
    { nom: "God of War", preu: 39.99, disponible: false },
    { nom: "Hogwarts Legacy", preu: 49.99, disponible: true },
    { nom: "The Last of Us Part II", preu: 39.99, disponible: true },
    { nom: "Assassin's Creed Valhalla", preu: 29.99, disponible: false },
    { nom: "Resident Evil 4", preu: 49.99, disponible: true },
    { nom: "Spider-Man 2", preu: 69.99, disponible: true },
    { nom: "Forza Horizon 5", preu: 59.99, disponible: false },
    { nom: "Super Mario Odyssey", preu: 49.99, disponible: true },
    { nom: "Zelda: Tears of the Kingdom", preu: 59.99, disponible: true },
    { nom: "Animal Crossing: New Horizons", preu: 54.99, disponible: false },
    { nom: "Pokémon Escarlata", preu: 49.99, disponible: true },
    { nom: "Dark Souls III", preu: 39.99, disponible: true },
    { nom: "Hades", preu: 24.99, disponible: false },
    { nom: "Stardew Valley", preu: 13.99, disponible: true },
    { nom: "Hollow Knight", preu: 14.99, disponible: true },
    { nom: "God of War Ragnarök", preu: 59.99, disponible: false },
    { nom: "Final Fantasy XVI", preu: 69.99, disponible: true },
    { nom: "Resident Evil Village", preu: 34.99, disponible: true },
    { nom: "The Sims 4", preu: 0, disponible: true },
    { nom: "Overwatch 2", preu: 0, disponible: false },
    { nom: "Rocket League", preu: 0, disponible: true },
    { nom: "League of Legends", preu: 0, disponible: true },
  ];
}