import { Injectable } from '@angular/core';
import { Rasa } from './rasa';
import { of, Observable } from 'rxjs';
import { ProfesjaRoll } from './profesjaRoll';

@Injectable({
  providedIn: 'root'
})
export class BohaterLogikaService {

  constructor() { }

  // pobranie tabeli ras
  getRasy(): Observable<Rasa[]> {
    const items = getMockRasy();
    return of(items);
  }
  getProfesje(rasa): Observable<ProfesjaRoll[]> {
    if (rasa === 'Człowiek') {
      const items = getMockProfesjeCzlowiek();
      return of(items);
    } else if (rasa === 'Krasnolud') {
      const items = getMockProfesjeKrasnolud();
      return of(items);
    } else if (rasa === 'Elf') {
      const items = getMockProfesjeElf();
      return of(items);
    } else {
      const items = getMockProfesjeNiziolek();
      return of(items);
    }



  }
}
function getMockRasy() {
  return [
    { title: 'Człowiek', WW: 20, US: 20, K: 20, Odp: 20, Zr: 20, Int: 20, SW: 20, Ogd: 20, Sz: 4 },
    { title: 'Krasnolud', WW: 30, US: 20, K: 20, Odp: 30, Zr: 10, Int: 20, SW: 20, Ogd: 10, Sz: 3 },
    { title: 'Elf', WW: 20, US: 30, K: 20, Odp: 20, Zr: 30, Int: 20, SW: 20, Ogd: 20, Sz: 5 },
    { title: 'Niziołek', WW: 10, US: 30, K: 10, Odp: 10, Zr: 30, Int: 20, SW: 20, Ogd: 30, Sz: 4 }
  ];
}
function getMockProfesjeCzlowiek() {
  return [
    { title: 'Akolita', rollmin: 1, rollmax: 2 },
    { title: 'Banita', rollmin: 3, rollmax: 4 },
    { title: 'Berserker z Norski', rollmin: 5, rollmax: 5 },
    { title: 'Chłop', rollmin: 6, rollmax: 7 },
    { title: 'Ciura obozowa', rollmin: 8, rollmax: 9 },
    { title: 'Cyrkowiec', rollmin: 10, rollmax: 11 },
    { title: 'Cyrulik', rollmin: 12, rollmax: 12 },
    { title: 'Fanatyk', rollmin: 13, rollmax: 14 },
    { title: 'Flisak', rollmin: 15, rollmax: 16 },
    { title: 'Giermek', rollmin: 17, rollmax: 18 },
    { title: 'Gladiator', rollmin: 19, rollmax: 20 },
    { title: 'Górnik', rollmin: 21, rollmax: 22 },
    { title: 'Guślarz', rollmin: 23, rollmax: 23 },
    { title: 'Hiena cmentarna', rollmin: 24, rollmax: 25 },
    { title: 'Kanciarz', rollmin: 26, rollmax: 27 },
    { title: 'Kozak kislevski', rollmin: 28, rollmax: 28 },
    { title: 'Leśnik', rollmin: 29, rollmax: 30 },
    { title: 'Łowca', rollmin: 31, rollmax: 32 },
    { title: 'Łowca nagród', rollmin: 33, rollmax: 34 },
    { title: 'Mieszczanin', rollmin: 35, rollmax: 36 },
    { title: 'Mytnik', rollmin: 37, rollmax: 38 },
    { title: 'Najemnik', rollmin: 39, rollmax: 40 },
    { title: 'Ochotnik', rollmin: 41, rollmax: 42 },
    { title: 'Ochroniarz', rollmin: 43, rollmax: 44 },
    { title: 'Oprych', rollmin: 45, rollmax: 46 },
    { title: 'Paź', rollmin: 47, rollmax: 48 },
    { title: 'Podżegacz', rollmin: 49, rollmax: 50 },
    { title: 'Porywacz zwłok', rollmin: 51, rollmax: 52 },
    { title: 'Posłaniec', rollmin: 53, rollmax: 54 },
    { title: 'Przemytnik', rollmin: 55, rollmax: 56 },
    { title: 'Przepatrywacz', rollmin: 57, rollmax: 58 },
    { title: 'Przewoźnik', rollmin: 59, rollmax: 59 },
    { title: 'Rybak', rollmin: 60, rollmax: 61 },
    { title: 'Rzemieślnik', rollmin: 62, rollmax: 63 },
    { title: 'Rzezimieszek', rollmin: 64, rollmax: 65 },
    { title: 'Skryba', rollmin: 66, rollmax: 67 },
    { title: 'Sługa', rollmin: 68, rollmax: 69 },
    { title: 'Strażnik', rollmin: 70, rollmax: 71 },
    { title: 'Strażnik dróg', rollmin: 72, rollmax: 73 },
    { title: 'Strażnik więzienny', rollmin: 74, rollmax: 74 },
    { title: 'Szczurołap', rollmin: 75, rollmax: 76 },
    { title: 'Szermierz estalijski', rollmin: 77, rollmax: 77 },
    { title: 'Szlachcic', rollmin: 78, rollmax: 79 },
    { title: 'Śmieciarz', rollmin: 80, rollmax: 81 },
    { title: 'Uczeń czarodzieja', rollmin: 82, rollmax: 83 },
    { title: 'Węglarz', rollmin: 84, rollmax: 85 },
    { title: 'Włóczykij', rollmin: 86, rollmax: 87 },
    { title: 'Woźnica', rollmin: 88, rollmax: 89 },
    { title: 'Zarządca', rollmin: 90, rollmax: 90 },
    { title: 'Złodziej', rollmin: 91, rollmax: 92 },
    { title: 'Żak', rollmin: 93, rollmax: 94 },
    { title: 'Żeglarz', rollmin: 95, rollmax: 96 },
    { title: 'Żołnierz', rollmin: 97, rollmax: 98 },
    { title: 'Żołnierz okrętowy', rollmin: 99, rollmax: 100 }
  ];
}
function getMockProfesjeKrasnolud() {
  return [
    { title: 'Banita', rollmin: 1, rollmax: 3 },
    { title: 'Cyrkowiec', rollmin: 4, rollmax: 6 },
    { title: 'Gladiator', rollmin: 7, rollmax: 11 },
    { title: 'Goniec', rollmin: 12, rollmax: 16 },
    { title: 'Górnik', rollmin: 17, rollmax: 22 },
    { title: 'Hiena cmentarna', rollmin: 23, rollmax: 25 },
    { title: 'Łowca', rollmin: 26, rollmax: 29 },
    { title: 'Mieszczanin', rollmin: 30, rollmax: 33 },
    { title: 'Mytnik', rollmin: 34, rollmax: 36 },
    { title: 'Najemnik', rollmin: 37, rollmax: 42 },
    { title: 'Ochotnik', rollmin: 43, rollmax: 46 },
    { title: 'Ochroniarz', rollmin: 47, rollmax: 50 },
    { title: 'Podżegacz', rollmin: 51, rollmax: 52 },
    { title: 'Przemytnik', rollmin: 53, rollmax: 55 },
    { title: 'Rzemieślnik', rollmin: 56, rollmax: 59 },
    { title: 'Rzezimieszek', rollmin: 60, rollmax: 63 },
    { title: 'Skryba', rollmin: 64, rollmax: 65 },
    { title: 'Sługa', rollmin: 66, rollmax: 67 },
    { title: 'Strażnik', rollmin: 68, rollmax: 69 },
    { title: 'Strażnik więzienny', rollmin: 70, rollmax: 73 },
    { title: 'Szczurołap', rollmin: 74, rollmax: 77 },
    { title: 'Szlachcic', rollmin: 78, rollmax: 79 },
    { title: 'Tarczownik', rollmin: 80, rollmax: 83 },
    { title: 'Woźnica', rollmin: 84, rollmax: 85 },
    { title: 'Zabójca troli', rollmin: 86, rollmax: 89 },
    { title: 'Złodziej', rollmin: 90, rollmax: 92 },
    { title: 'Żak', rollmin: 93, rollmax: 94 },
    { title: 'Żeglarz', rollmin: 95, rollmax: 95 },
    { title: 'Żołnierz', rollmin: 96, rollmax: 99 },
    { title: 'Żołnierz okrętowy', rollmin: 100, rollmax: 100 }
  ];
}
function getMockProfesjeElf() {
  return [
    { title: 'Banita', rollmin: 1, rollmax: 5 },
    { title: 'Cyrkowiec', rollmin: 6, rollmax: 10 },
    { title: 'Kanciarz', rollmin: 11, rollmax: 16 },
    { title: 'Łowca', rollmin: 17, rollmax: 24 },
    { title: 'Najemnik', rollmin: 25, rollmax: 29 },
    { title: 'Paź', rollmin: 30, rollmax: 31 },
    { title: 'Posłaniec', rollmin: 32, rollmax: 37 },
    { title: 'Przepatrywacz', rollmin: 38, rollmax: 43 },
    { title: 'Rzecznik rodu', rollmin: 44, rollmax: 50 },
    { title: 'Rzemieślnik', rollmin: 51, rollmax: 57 },
    { title: 'Skryba', rollmin: 58, rollmax: 63 },
    { title: 'Uczeń czarodzieja', rollmin: 64, rollmax: 70 },
    { title: 'Włóczykij', rollmin: 71, rollmax: 77 },
    { title: 'Wojownik klanowy', rollmin: 78, rollmax: 84 },
    { title: 'Złodziej', rollmin: 85, rollmax: 90 },
    { title: 'Żak', rollmin: 91, rollmax: 95 },
    { title: 'Żeglarz', rollmin: 96, rollmax: 100 },
  ];
}
function getMockProfesjeNiziolek() {
  return [
    { title: 'Banita', rollmin: 1, rollmax: 3 },
    { title: 'Ciura obozowa', rollmin: 4, rollmax: 5 },
    { title: 'Cyrkowiec', rollmin: 6, rollmax: 8 },
    { title: 'Cyrulik', rollmin: 9, rollmax: 9 },
    { title: 'Hiena cmentarna', rollmin: 10, rollmax: 14 },
    { title: 'Kanciarz', rollmin: 15, rollmax: 20 },
    { title: 'Łowca', rollmin: 21, rollmax: 25 },
    { title: 'Łowca nagród', rollmin: 26, rollmax: 27 },
    { title: 'Mieszczanin', rollmin: 28, rollmax: 29 },
    { title: 'Mytnik', rollmin: 30, rollmax: 31 },
    { title: 'Najemnik', rollmin: 32, rollmax: 35 },
    { title: 'Ochotnik', rollmin: 36, rollmax: 40 },
    { title: 'Paź', rollmin: 41, rollmax: 42 },
    { title: 'Podżegacz', rollmin: 43, rollmax: 45 },
    { title: 'Porywacz zwłok', rollmin: 46, rollmax: 48 },
    { title: 'Posłaniec', rollmin: 49, rollmax: 53 },
    { title: 'Przemytnik', rollmin: 54, rollmax: 56 },
    { title: 'Przewoźnik', rollmin: 57, rollmax: 57 },
    { title: 'Rybak', rollmin: 58, rollmax: 58 },
    { title: 'Rzemieślnik', rollmin: 59, rollmax: 63 },
    { title: 'Sługa', rollmin: 64, rollmax: 68 },
    { title: 'Strażnik', rollmin: 69, rollmax: 72 },
    { title: 'Strażnik dróg', rollmin: 73, rollmax: 74 },
    { title: 'Strażnik pól', rollmin: 75, rollmax: 78 },
    { title: 'Szczurołap', rollmin: 79, rollmax: 82 },
    { title: 'Śmieciarz', rollmin: 83, rollmax: 83 },
    { title: 'Węglarz', rollmin: 84, rollmax: 86 },
    { title: 'Włóczykij', rollmin: 87, rollmax: 90 },
    { title: 'Złodziej', rollmin: 91, rollmax: 96 },
    { title: 'Żak', rollmin: 97, rollmax: 98 },
    { title: 'Żołnierz', rollmin: 99, rollmax: 100 },
  ];
}
