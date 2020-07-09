import { Injectable, Input } from '@angular/core';
import { Rasa } from './rasa';
import { of, Observable } from 'rxjs';

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

}
function getMockRasy() {
  return [
    { title: 'Człowiek', WW: 20, US: 20, K: 20, Odp: 20, Zr: 20, Int: 20, SW: 20, Ogd: 20, Sz: 4 },
    { title: 'Krasnolud', WW: 30, US: 20, K: 20, Odp: 30, Zr: 10, Int: 20, SW: 20, Ogd: 10, Sz: 3 },
    { title: 'Elf', WW: 20, US: 30, K: 20, Odp: 20, Zr: 30, Int: 20, SW: 20, Ogd: 20, Sz: 5 },
    { title: 'Niziołek', WW: 10, US: 30, K: 10, Odp: 10, Zr: 30, Int: 20, SW: 20, Ogd: 30, Sz: 4 }
  ];
}
