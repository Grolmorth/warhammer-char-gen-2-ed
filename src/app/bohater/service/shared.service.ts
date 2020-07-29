import { Injectable } from '@angular/core';
import { BohaterLogikaService } from './bohater-logika.service';
import { BohaterOgolne } from './bohaterOgolne';
import { Umiejetnosci } from './umiejetnosci';


@Injectable({
  providedIn: 'root'
})
export class SharedService {


  // statystyki aktywnej Rasy
  statystykiRasowe: BohaterOgolne[];
  umiejetnosciRasowe: Umiejetnosci[];
  // statystyki początkowe rasy
  public poczatkoweStatystykiRasowe: BohaterOgolne =
    {
      rasatitle: '',
      profesjatitle: '',
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
      PP: 0,
      umiejetnosci: [],
      wyborUmiejetnosciProfesji: [],
      zdolnosci: [],
      wyposazenie: []
    };

  // statystyki aktywnej Profesji
  statystkiProfesji: BohaterOgolne[];
  umiejetnosciProfesji: Umiejetnosci[];

  // statystyki początkowe profesji
  public schematRozwojuProfesja: BohaterOgolne =
    {
      rasatitle: '',
      profesjatitle: '',
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
      PP: 0,
      umiejetnosci: [],
      wyborUmiejetnosciProfesji: [[]],
      zdolnosci: [],
      wyposazenie: []
    };
  // suma statystyk rasowych i klasowych
  statystykiAktualne: BohaterOgolne[];
  public sumowaneStatystyki: BohaterOgolne =
    {
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


  constructor(private logika: BohaterLogikaService) { }

  resetStatystyk() {
    this.poczatkoweStatystykiRasowe.WW = 0;
    this.poczatkoweStatystykiRasowe.US = 0;
    this.poczatkoweStatystykiRasowe.K = 0;
    this.poczatkoweStatystykiRasowe.Odp = 0;
    this.poczatkoweStatystykiRasowe.Zr = 0;
    this.poczatkoweStatystykiRasowe.Int = 0;
    this.poczatkoweStatystykiRasowe.SW = 0;
    this.poczatkoweStatystykiRasowe.Ogd = 0;
    this.poczatkoweStatystykiRasowe.A = 0;
    this.poczatkoweStatystykiRasowe.Zyw = 0;
    this.poczatkoweStatystykiRasowe.S = 0;
    this.poczatkoweStatystykiRasowe.Wt = 0;
    this.poczatkoweStatystykiRasowe.Sz = 0;
    this.poczatkoweStatystykiRasowe.Mag = 0;
    this.poczatkoweStatystykiRasowe.PO = 0;
    this.poczatkoweStatystykiRasowe.PP = 0;
    this.poczatkoweStatystykiRasowe.umiejetnosci = [];
    this.poczatkoweStatystykiRasowe.zdolnosci = [];
    this.poczatkoweStatystykiRasowe.wyposazenie = [];
    this.resetStatystykProfesja();


  }
  resetStatystykProfesja() {
    this.schematRozwojuProfesja.WW = 0;
    this.schematRozwojuProfesja.US = 0;
    this.schematRozwojuProfesja.K = 0;
    this.schematRozwojuProfesja.Odp = 0;
    this.schematRozwojuProfesja.Zr = 0;
    this.schematRozwojuProfesja.Int = 0;
    this.schematRozwojuProfesja.SW = 0;
    this.schematRozwojuProfesja.Ogd = 0;
    this.schematRozwojuProfesja.A = 0;
    this.schematRozwojuProfesja.Zyw = 0;
    this.schematRozwojuProfesja.S = 0;
    this.schematRozwojuProfesja.Wt = 0;
    this.schematRozwojuProfesja.Sz = 0;
    this.schematRozwojuProfesja.Mag = 0;
    this.schematRozwojuProfesja.PO = 0;
    this.schematRozwojuProfesja.PP = 0;
    this.sumowaneStatystyki.WW = 0;
    this.sumowaneStatystyki.US = 0;
    this.sumowaneStatystyki.K = 0;
    this.sumowaneStatystyki.Odp = 0;
    this.sumowaneStatystyki.Zr = 0;
    this.sumowaneStatystyki.Int = 0;
    this.sumowaneStatystyki.SW = 0;
    this.sumowaneStatystyki.Ogd = 0;
    this.sumowaneStatystyki.A = 0;
    this.sumowaneStatystyki.Zyw = 0;
    this.sumowaneStatystyki.S = 0;
    this.sumowaneStatystyki.Wt = 0;
    this.sumowaneStatystyki.Sz = 0;
    this.sumowaneStatystyki.Mag = 0;
    this.sumowaneStatystyki.PO = 0;
    this.sumowaneStatystyki.PP = 0;
    this.schematRozwojuProfesja.umiejetnosci = [];
    this.schematRozwojuProfesja.wyborUmiejetnosciProfesji = [];
    this.schematRozwojuProfesja.zdolnosci = [];
    console.log('zresetowano statystyki dla', this.schematRozwojuProfesja.profesjatitle);
    this.schematRozwojuProfesja.profesjatitle = '';
  }
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
    this.logika.getListaRasy().subscribe(items => this.statystykiRasowe = items);
    console.log(this.statystykiRasowe[0].rasatitle);
    // przypisanie nazwy rasy do aktualnych statystyk
    this.poczatkoweStatystykiRasowe.rasatitle = rasa;

    // losowanie statystyk poczatkowych dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek
    for (let n = 0; n < 4; n++) {
      if (this.statystykiRasowe[n].rasatitle === this.poczatkoweStatystykiRasowe.rasatitle) {
        this.poczatkoweStatystykiRasowe.WW = this.statystykiRasowe[n].WW + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.US = this.statystykiRasowe[n].US + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.K = this.statystykiRasowe[n].K + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.Odp = this.statystykiRasowe[n].Odp + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.Zr = this.statystykiRasowe[n].Zr + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.Int = this.statystykiRasowe[n].Int + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.SW = this.statystykiRasowe[n].SW + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.Ogd = this.statystykiRasowe[n].Ogd + this.randomNumber(2, 20);
        this.poczatkoweStatystykiRasowe.A = 1;
        this.poczatkoweStatystykiRasowe.Zyw = this.zywotnosc(n);
        this.poczatkoweStatystykiRasowe.S = Math.floor(this.poczatkoweStatystykiRasowe.K / 10);
        this.poczatkoweStatystykiRasowe.Wt = Math.floor(this.poczatkoweStatystykiRasowe.Odp / 10);
        this.poczatkoweStatystykiRasowe.Sz = this.statystykiRasowe[n].Sz;
        this.poczatkoweStatystykiRasowe.Mag = 0;
        this.poczatkoweStatystykiRasowe.PO = 0;
        this.poczatkoweStatystykiRasowe.PP = this.przeznaczenie(n);

        // dodanie listy umiejetnosci rasowych

        for (let m = 0; m < this.statystykiRasowe[n].umiejetnosci.length; m++) {
          this.logika.getUmiejetnosci(this.statystykiRasowe[n].umiejetnosci[m]).subscribe(items => this.umiejetnosciRasowe = items);

          this.poczatkoweStatystykiRasowe.umiejetnosci[m] = this.umiejetnosciRasowe;
        }
        console.log('pobranie listy umiejetnosci rasowych');

      }
    }
  }
  // zmiana profesji dodanie schematu rozwoju statystyk
  changeProfesja(profesja: string) {
    this.logika.getProfesja(profesja).subscribe(items => this.statystkiProfesji = items);
    this.schematRozwojuProfesja.profesjatitle = profesja;
    this.schematRozwojuProfesja.WW = this.statystkiProfesji[0].WW;
    this.schematRozwojuProfesja.US = this.statystkiProfesji[0].US;
    this.schematRozwojuProfesja.K = this.statystkiProfesji[0].K;
    this.schematRozwojuProfesja.Odp = this.statystkiProfesji[0].Odp;
    this.schematRozwojuProfesja.Zr = this.statystkiProfesji[0].Zr;
    this.schematRozwojuProfesja.Int = this.statystkiProfesji[0].Int;
    this.schematRozwojuProfesja.SW = this.statystkiProfesji[0].SW;
    this.schematRozwojuProfesja.Ogd = this.statystkiProfesji[0].Ogd;
    this.schematRozwojuProfesja.A = this.statystkiProfesji[0].A;
    this.schematRozwojuProfesja.Zyw = this.statystkiProfesji[0].Zyw;
    this.schematRozwojuProfesja.S = this.statystkiProfesji[0].S;
    this.schematRozwojuProfesja.Wt = this.statystkiProfesji[0].Wt;
    this.schematRozwojuProfesja.Sz = this.statystkiProfesji[0].Sz;
    this.schematRozwojuProfesja.Mag = this.statystkiProfesji[0].Mag;
    this.schematRozwojuProfesja.PO = this.statystkiProfesji[0].PO;
    this.schematRozwojuProfesja.PP = this.statystkiProfesji[0].PP;



    // dodanie umiejetnosci
    if (this.statystkiProfesji[0].umiejetnosci !== undefined) {
      for (let n = 0; n < this.statystkiProfesji[0].umiejetnosci.length; n++) {
        this.logika.getUmiejetnosci(this.statystkiProfesji[0].umiejetnosci[n]).subscribe(items => this.umiejetnosciProfesji = items);
        this.schematRozwojuProfesja.umiejetnosci[n] = this.umiejetnosciProfesji;

      }
      console.log('pobrano umiejetnosci dla', profesja);
    }
    // dodanie umiejetnosci do wyboru
    if (this.statystkiProfesji[0].wyborUmiejetnosciProfesji !== undefined) {
      for (let n = 0; n < this.statystkiProfesji[0].wyborUmiejetnosciProfesji.length; n++) {
        // zainicjalizowanie pustej tablicy jezeli nieistnieje
        if (!this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[n]) {
          this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[n] = [];
        }
        for (let p = 0; p < this.statystkiProfesji[0].wyborUmiejetnosciProfesji[n].length; p++) {

          this.logika.getUmiejetnosci(this.statystkiProfesji[0].wyborUmiejetnosciProfesji[n][p])
            .subscribe(items => this.umiejetnosciProfesji = items);
          console.log(n, p, this.umiejetnosciProfesji);
          this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[n][p] = this.umiejetnosciProfesji;


        }
      }
      console.log('pobrano umiejetnosci do wyboru dla', profesja);
    }

  }
  // sumowanie aktualnych statystyk
  changeAktualne() {
    this.sumowaneStatystyki.WW = this.poczatkoweStatystykiRasowe.WW + this.schematRozwojuProfesja.WW;
    this.sumowaneStatystyki.US = this.poczatkoweStatystykiRasowe.US + this.schematRozwojuProfesja.US;
    this.sumowaneStatystyki.K = this.poczatkoweStatystykiRasowe.K + this.schematRozwojuProfesja.K;
    this.sumowaneStatystyki.Odp = this.poczatkoweStatystykiRasowe.Odp + this.schematRozwojuProfesja.Odp;
    this.sumowaneStatystyki.Zr = this.poczatkoweStatystykiRasowe.Zr + this.schematRozwojuProfesja.Zr;
    this.sumowaneStatystyki.Int = this.poczatkoweStatystykiRasowe.Int + this.schematRozwojuProfesja.Int;
    this.sumowaneStatystyki.SW = this.poczatkoweStatystykiRasowe.SW + this.schematRozwojuProfesja.SW;
    this.sumowaneStatystyki.Ogd = this.poczatkoweStatystykiRasowe.Ogd + this.schematRozwojuProfesja.Ogd;
    this.sumowaneStatystyki.A = this.poczatkoweStatystykiRasowe.A + this.schematRozwojuProfesja.A;
    this.sumowaneStatystyki.Zyw = this.poczatkoweStatystykiRasowe.Zyw + this.schematRozwojuProfesja.Zyw;
    this.sumowaneStatystyki.S = Math.floor(this.sumowaneStatystyki.K / 10);
    this.sumowaneStatystyki.Wt = Math.floor(this.sumowaneStatystyki.Odp / 10);
    this.sumowaneStatystyki.Sz = this.poczatkoweStatystykiRasowe.Sz + this.schematRozwojuProfesja.Sz;
    this.sumowaneStatystyki.Mag = this.poczatkoweStatystykiRasowe.Mag + this.schematRozwojuProfesja.Mag;
    this.sumowaneStatystyki.PO = this.poczatkoweStatystykiRasowe.PO + this.schematRozwojuProfesja.PO;
    this.sumowaneStatystyki.PP = this.poczatkoweStatystykiRasowe.PP + this.schematRozwojuProfesja.PP;
  }

}
