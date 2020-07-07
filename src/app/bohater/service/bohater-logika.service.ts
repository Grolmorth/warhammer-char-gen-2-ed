import { Injectable } from '@angular/core';
import { Rasa } from './rasa';
import { of, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BohaterLogikaService {

  constructor() { }

  getRasy(): Observable<Rasa[]> {
    const items = getMockRasy();


    return of(items);
  }

  // funkcja losujaca
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // funkcje przypisujace wartosci do tablicy
  WWczlowiek() {
    return (20 + this.randomNumber(2, 40));
  }
  USczlowiek() {
    return (20 + this.randomNumber(2, 40));
  }
  k = 0;
  Kczlowiek() {
    this.k = (20 + this.randomNumber(2, 40));
    return this.k;
  }
  odp = 0;
  Odpczlowiek() {
    this.odp = (20 + this.randomNumber(2, 40));
    return this.odp;
  }
  Zrczlowiek() {
    return (20 + this.randomNumber(2, 40));
  }
  Intczlowiek() {
    return (20 + this.randomNumber(2, 40));
  }
  SWczlowiek() {
    return (20 + this.randomNumber(2, 40));
  }
  Ogdczlowiek() {
    return (20 + this.randomNumber(2, 40));
  }
  Sczlowiek() {
    return (this.k / 10);
  }
  Wtczlowiek() {
    return (this.odp / 10);
  }

  // fukncja losujaca ilosc zywotnosci dla poszczegolnych ras
  zywotnoscCzlowiek() {
    const n: number = this.randomNumber(1, 10);
    if (n === 10) {
      return 13;
    }
    else if (n > 6) {
      return 12;
    }
    else if (n > 3) {
      return 11;
    }
    else {
      return 10;
    }
  }
}
function getMockRasy() {
  return [
    {
      title: 'Człowiek', WW: 20, US: 20, K: 20, Odp: 20, Zr: 20, Int: 20, SW: 20, Ogd: 20,
      A: 1, Zyw: 0, S: 0, Wt: 0, Sz: 4, Mag: 0, PO: 0, PP: 0,
    },
    {
      title: 'Krasnolud', WW: 30, US: 20, K: 20, Odp: 30, Zr: 10, Int: 20, SW: 20, Ogd: 10,
      A: 1, Zyw: 0, S: 0, Wt: 0, Sz: 3, Mag: 0, PO: 0, PP: 0,
    },
    {
      title: 'Elf', WW: 20, US: 30, K: 20, Odp: 20, Zr: 30, Int: 20, SW: 20, Ogd: 20,
      A: 1, Zyw: 0, S: 0, Wt: 0, Sz: 5, Mag: 0, PO: 0, PP: 0,
    },
    {
      title: 'Niziołek', WW: 10, US: 30, K: 10, Odp: 10, Zr: 30, Int: 20, SW: 20, Ogd: 30,
      A: 1, Zyw: 0, S: 0, Wt: 0, Sz: 4, Mag: 0, PO: 0, PP: 0,
    },

  ]
}
