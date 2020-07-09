import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BohaterLogikaService } from './bohater-logika.service';
import { Rasa } from './rasa';
import { AktualneStatystyki } from './aktualneStatystyki';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // aktywna rasa
  private rasa = new BehaviorSubject('');
  // statystyki aktywnej Rasy
  statystykiRasowe: Rasa[] = [];
  // statystyki aktualne rasy i profesji
  public aktualneStatystyki: AktualneStatystyki =
    {
      title: '',
      WW: 0,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 0,
      Int: 0,
      SW: 0,
      Ogd: 0,
      A: 0,
      Zyw: 0,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0
    };

  constructor(private rasyService: BohaterLogikaService) { }

  // funkcja losujaca
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // losowanie zywotnosci dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek
  zywotnosc(n) {
    const a: number = this.randomNumber(1, 10);
    if (n === 0) {
      if (a === 10) {
        return 13;
      }
      else if (a > 6) {
        return 12;
      }
      else if (a > 3) {
        return 11;
      }
      else {
        return 10;
      }
    } else if (n === 1) {
      if (a === 10) {
        return 14;
      }
      else if (a > 6) {
        return 13;
      }
      else if (a > 3) {
        return 12;
      }
      else {
        return 11;
      }
    } else if (n === 2) {
      if (a === 10) {
        return 12;
      }
      else if (a > 6) {
        return 11;
      }
      else if (a > 3) {
        return 10;
      }
      else {
        return 9;
      }
    } else {
      if (a === 10) {
        return 11;
      }
      else if (a > 6) {
        return 10;
      }
      else if (a > 3) {
        return 9;
      }
      else {
        return 8;
      }
    }

  }
  // losowanie przeznaczenia dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek
  przeznaczenie(n) {
    const a: number = this.randomNumber(1, 10);
    if (n === 0) {
      if (a > 4) {
        return 3;
      }
      else {
        return 2;
      }
    } else if (n === 1) {
      if (a > 7) {
        return 3;
      }
      else if (a > 4) {
        return 2;
      }
      else {
        return 1;
      }
    } else if (n === 2) {
      if (a > 4) {
        return 2;
      }
      else {
        return 1;
      }
    } else {
      if (a > 7) {
        return 3;
      }

      else {
        return 2;
      }
    }

  }
  // zmiana rasy i losowanie statystyk poczatkowych
  changeRasa(rasa: string) {
    // pobranie poczatkowych statystyk rasowych
    this.rasyService.getRasy().subscribe(items => this.statystykiRasowe = items);
    // przypisanie nazwy rasy do aktualnych statystyk
    this.aktualneStatystyki.title = rasa;
    // losowanie statystyk poczatkowych dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek
    for (let n = 0; n < 4; n++) {
      if (this.statystykiRasowe[n].title === rasa) {

        this.aktualneStatystyki.WW = this.statystykiRasowe[n].WW + this.randomNumber(2, 40);
        this.aktualneStatystyki.US = this.statystykiRasowe[n].US + this.randomNumber(2, 40);
        this.aktualneStatystyki.K = this.statystykiRasowe[n].K + this.randomNumber(2, 40);
        this.aktualneStatystyki.Odp = this.statystykiRasowe[n].Odp + this.randomNumber(2, 40);
        this.aktualneStatystyki.Zr = this.statystykiRasowe[n].Zr + this.randomNumber(2, 40);
        this.aktualneStatystyki.Int = this.statystykiRasowe[n].Int + this.randomNumber(2, 40);
        this.aktualneStatystyki.SW = this.statystykiRasowe[n].SW + this.randomNumber(2, 40);
        this.aktualneStatystyki.Ogd = this.statystykiRasowe[n].Ogd + this.randomNumber(2, 40);
        this.aktualneStatystyki.A = 1;
        this.aktualneStatystyki.Zyw = this.zywotnosc(n);
        this.aktualneStatystyki.S = Math.floor(this.aktualneStatystyki.K / 10);
        this.aktualneStatystyki.Wt = Math.floor(this.aktualneStatystyki.Odp / 10);
        this.aktualneStatystyki.Sz = this.statystykiRasowe[n].Sz;
        this.aktualneStatystyki.Mag = 0;
        this.aktualneStatystyki.PO = 0;
        this.aktualneStatystyki.PP = this.przeznaczenie(n);
      }

    }
  }





}
