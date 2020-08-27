import { ExportPostac } from './exportPostac';

import { Injectable } from '@angular/core';
import { BohaterLogikaService } from './bohater-logika.service';
import { BohaterOgolne } from './bohaterOgolne';
import { Umiejetnosci } from './umiejetnosci';
import { Zdolnosci } from './zdolnosci';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // statystyki aktywnej Rasy
  statystykiRasowe: BohaterOgolne[];
  umiejetnosciRasowe: Umiejetnosci[];
  zdolnosciRasowe: Zdolnosci[];

  exportDisabler = true;
  wyborUmiejetnosciRasaDisabler = true;
  wyborZdolnosciRasaDisabler = true;
  wyborUmiejetnosciProfesjaDisabler = true;
  wyborZdolnosciProdesjaDisabler = true;

  // statystyki początkowe rasy
  public poczatkoweStatystykiRasowe: BohaterOgolne =
    {
      imie: '',
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
      wyborUmiejetnosciRasy: [[]],
      zdolnosci: [],
      wyborZdolnosciRasy: [[]],
      wyposazenie: []
    };
  // rasa bez wyborow do exportu
  public postacDoExportu: ExportPostac =
    {
      imie: '',
      rasatitle: '',
      profesjatitle: '',
      // statystyki rasy
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
      // statystyki profesji
      WW1: 0,
      US1: 0,
      K1: 0,
      Odp1: 0,
      Zr1: 0,
      Int1: 0,
      SW1: 0,
      Ogd1: 0,
      A1: 0,
      Zyw1: 0,
      Sz1: 0,
      Mag1: 0,
      // maxymalne statystyki profesji
      WW2: 0,
      US2: 0,
      K2: 0,
      Odp2: 0,
      Zr2: 0,
      Int2: 0,
      SW2: 0,
      Ogd2: 0,
      A2: 0,
      Zyw2: 0,
      Sz2: 0,
      Mag2: 0,
      // sumowane statystyki
      WW3: 0,
      US3: 0,
      K3: 0,
      Odp3: 0,
      Zr3: 0,
      Int3: 0,
      SW3: 0,
      Ogd3: 0,
      A3: 0,
      Zyw3: 0,
      S3: 0,
      Wt3: 0,
      Sz3: 0,
      Mag3: 0,
      PO3: 0,
      PP3: 0,
      // statystyki ze zdolnosci rasy
      WW4: 0,
      US4: 0,
      K4: 0,
      Odp4: 0,
      Zr4: 0,
      Int4: 0,
      SW4: 0,
      Ogd4: 0,
      A4: 0,
      Zyw4: 0,
      Sz4: 0,

      // statystyki ze zdolnosci profesji
      WW5: 0,
      US5: 0,
      K5: 0,
      Odp5: 0,
      Zr5: 0,
      Int5: 0,
      SW5: 0,
      Ogd5: 0,
      A5: 0,
      Zyw5: 0,
      Sz5: 0,

      umiejetnosciRasowe: [],
      umiejetnosciProfesji: [],

      zdolnosciRasowe: [],
      zdolnosciProfesji: [],

      wyposazenie: []
    };

  // statystyki aktywnej Profesji
  statystkiProfesji: BohaterOgolne[];
  umiejetnosciProfesji: Umiejetnosci[];
  zdolnosciProfesji: Zdolnosci[];
  // statystyki wykupionego schematu rozwoju
  public wykupionyRozwoj: BohaterOgolne =
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
      PP: 0,
    };
  // statystyki początkowe profesji
  public schematRozwojuProfesja: BohaterOgolne =
    {
      rasatitle: '',
      profesjatitle: '',
      doswiadczenie: 0,
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
      wyborZdolnosciProfesji: [[]],
      wyposazenie: []

    };

  // suma statystyk rasowych i klasowych
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
  // punkty statystyk ze zdolnosci
  public zdolnosciStatystykiRasowe: BohaterOgolne = {
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
  public zdolnosciStatystykiProfesji: BohaterOgolne = {
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
  // ścieżka do db
  public dbPath = '/postacie/';
  postacRef: AngularFirestoreCollection<BohaterOgolne> = null;

  constructor(public db: AngularFirestore, private logika: BohaterLogikaService, public authService: AuthService) {
    this.postacRef = db.collection(this.dbPath);
  }
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
    this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy = [[]];
    this.poczatkoweStatystykiRasowe.zdolnosci = [];
    this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy = [[]];
    this.poczatkoweStatystykiRasowe.wyposazenie = [];
    this.zdolnosciStatystykiRasowe.WW = 0;
    this.zdolnosciStatystykiRasowe.US = 0;
    this.zdolnosciStatystykiRasowe.K = 0;
    this.zdolnosciStatystykiRasowe.Odp = 0;
    this.zdolnosciStatystykiRasowe.Zr = 0;
    this.zdolnosciStatystykiRasowe.Int = 0;
    this.zdolnosciStatystykiRasowe.SW = 0;
    this.zdolnosciStatystykiRasowe.Ogd = 0;
    this.zdolnosciStatystykiRasowe.Zyw = 0;
    this.zdolnosciStatystykiRasowe.Sz = 0;
    this.wyborUmiejetnosciRasaDisabler = true;
    this.wyborZdolnosciRasaDisabler = true;
    console.log('zresetowano statystyki dla', this.poczatkoweStatystykiRasowe.rasatitle);
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
    this.wykupionyRozwoj.WW = 0;
    this.wykupionyRozwoj.US = 0;
    this.wykupionyRozwoj.K = 0;
    this.wykupionyRozwoj.Odp = 0;
    this.wykupionyRozwoj.Zr = 0;
    this.wykupionyRozwoj.Int = 0;
    this.wykupionyRozwoj.SW = 0;
    this.wykupionyRozwoj.Ogd = 0;
    this.wykupionyRozwoj.A = 0;
    this.wykupionyRozwoj.Zyw = 0;
    this.wykupionyRozwoj.Sz = 0;
    this.wykupionyRozwoj.Mag = 0;
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
    this.zdolnosciStatystykiProfesji.WW = 0;
    this.zdolnosciStatystykiProfesji.US = 0;
    this.zdolnosciStatystykiProfesji.K = 0;
    this.zdolnosciStatystykiProfesji.Odp = 0;
    this.zdolnosciStatystykiProfesji.Zr = 0;
    this.zdolnosciStatystykiProfesji.Int = 0;
    this.zdolnosciStatystykiProfesji.SW = 0;
    this.zdolnosciStatystykiProfesji.Ogd = 0;
    this.zdolnosciStatystykiProfesji.Zyw = 0;
    this.zdolnosciStatystykiProfesji.Sz = 0;
    this.schematRozwojuProfesja.umiejetnosci = [];
    this.schematRozwojuProfesja.wyborUmiejetnosciProfesji = [[]];
    this.schematRozwojuProfesja.zdolnosci = [];
    this.schematRozwojuProfesja.wyborZdolnosciProfesji = [[]];
    this.wyborZdolnosciProdesjaDisabler = true;
    this.wyborUmiejetnosciProfesjaDisabler = true;
    // resetowanie +10 +20 z umiejetnosci rasy
    for (let n = 0; n < this.poczatkoweStatystykiRasowe.umiejetnosci.length; n++) {
      if (this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc10 === true) {
        this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc10 = false;
        if (this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc20 === true) {
          this.poczatkoweStatystykiRasowe.umiejetnosci[n][0].umiejetnosc20 = false;
        }
      }
    }
    if (this.schematRozwojuProfesja.profesjatitle !== '') {
      console.log('zresetowano statystyki dla', this.schematRozwojuProfesja.profesjatitle);
    }
    this.schematRozwojuProfesja.profesjatitle = '';
  }
  // przypisanie imienia
  changeImie(string) {
    this.poczatkoweStatystykiRasowe.imie = string;

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
    // przypisanie nazwy rasy do aktualnych statystyk
    this.poczatkoweStatystykiRasowe.rasatitle = rasa;

    // losowanie statystyk poczatkowych dla ras n=0 - czlowiek n=1 - krasnolud n=2 - elf n=3 - niziolek
    for (let n = 0; n < 4; n++) {
      if (this.statystykiRasowe[n].rasatitle === this.poczatkoweStatystykiRasowe.rasatitle) {
        this.poczatkoweStatystykiRasowe.WW = this.statystykiRasowe[n].WW + this.randomNumber(1, 10) + this.randomNumber(1, 10);
        this.poczatkoweStatystykiRasowe.US = this.statystykiRasowe[n].US + this.randomNumber(1, 10) + this.randomNumber(1, 10);
        this.poczatkoweStatystykiRasowe.K = this.statystykiRasowe[n].K + this.randomNumber(1, 10) + this.randomNumber(1, 10);
        this.poczatkoweStatystykiRasowe.Odp = this.statystykiRasowe[n].Odp + this.randomNumber(1, 10) + this.randomNumber(1, 10);
        this.poczatkoweStatystykiRasowe.Zr = this.statystykiRasowe[n].Zr + this.randomNumber(1, 10) + this.randomNumber(1, 10);
        this.poczatkoweStatystykiRasowe.Int = this.statystykiRasowe[n].Int + this.randomNumber(1, 10) + this.randomNumber(1, 10);
        this.poczatkoweStatystykiRasowe.SW = this.statystykiRasowe[n].SW + this.randomNumber(1, 10) + this.randomNumber(1, 10);
        this.poczatkoweStatystykiRasowe.Ogd = this.statystykiRasowe[n].Ogd + this.randomNumber(1, 10) + this.randomNumber(1, 10);
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
        // dodanie umiejetnosci do wyboru

        if (this.statystykiRasowe[n].wyborUmiejetnosciRasy !== undefined) {
          for (let m = 0; m < this.statystykiRasowe[n].wyborUmiejetnosciRasy.length; m++) {
            // zainicjalizowanie pustej tablicy jezeli nieistnieje
            if (!this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[m]) {
              this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[m] = [];
            }
            for (let p = 0; p < this.statystykiRasowe[n].wyborUmiejetnosciRasy[m].length; p++) {
              this.logika.getUmiejetnosci(this.statystykiRasowe[n].wyborUmiejetnosciRasy[m][p])
                .subscribe(items => this.umiejetnosciProfesji = items);
              this.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[m][p] = this.umiejetnosciProfesji;
            }
          }
        }
        // pozwolenie na eksport gdy brak umiejetnosci do wybory
        else {
          this.wyborUmiejetnosciRasaDisabler = false;

        }
        // dodanie listy zdolnosci rasowych

        for (let m = 0; m < this.statystykiRasowe[n].zdolnosci.length; m++) {
          this.logika.getZdolnosc(this.statystykiRasowe[n].zdolnosci[m]).subscribe(items => this.zdolnosciRasowe = items);
          this.poczatkoweStatystykiRasowe.zdolnosci[m] = this.zdolnosciRasowe;
          this.zdolnosciDoCechyPoczatkowych(this.poczatkoweStatystykiRasowe.zdolnosci[m][0].zdolnosc, true);
        }
        // dodanie zdolnosci do wyboru
        if (this.statystykiRasowe[n].wyborZdolnosciRasy !== undefined) {
          for (let m = 0; m < this.statystykiRasowe[n].wyborZdolnosciRasy.length; m++) {
            // zainicjalizowanie pustej tablicy jezeli nieistnieje
            if (!this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[m]) {
              this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[m] = [];
            }
            for (let p = 0; p < this.statystykiRasowe[n].wyborZdolnosciRasy[m].length; p++) {
              this.logika.getZdolnosc(this.statystykiRasowe[n].wyborZdolnosciRasy[m][p])
                .subscribe(items => this.zdolnosciRasowe = items);
              this.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[m][p] = this.zdolnosciRasowe;

            }
          }
          console.log('pobrano zdolnosci do wyboru dla', rasa);
        }
        // pozwolenie na eksport gdy brak umiejetnosci do wybory
        else {
          this.wyborZdolnosciRasaDisabler = false;

          this.exportAbler();
        }
      }
    }
  }
  // zmiana profesji dodanie schematu rozwoju statystyk
  changeProfesja(profesja: string) {
    this.logika.getProfesja(profesja).subscribe(items => this.statystkiProfesji = items);
    this.schematRozwojuProfesja.profesjatitle = profesja;
    this.poczatkoweStatystykiRasowe.profesjatitle = profesja;
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
    this.schematRozwojuProfesja.doswiadczenie = 100;

    // dodanie umiejetnosci do listy umiejetnosci profesji
    for (let n = 0; n < this.statystkiProfesji[0].umiejetnosci.length; n++) {
      this.logika.getUmiejetnosci(this.statystkiProfesji[0].umiejetnosci[n]).subscribe(items => this.umiejetnosciProfesji = items);
      // sprawdzanie czy istnieje taka sama umiejetnosc rasy, jezeli tak dodanie specjjalizacji +10
      for (let m = 0; m < this.poczatkoweStatystykiRasowe.umiejetnosci.length; m++) {
        if (this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc === this.umiejetnosciProfesji[0].umiejetnosc) {
          if (this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc10 === true) {
            this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc20 = true;
          }
          this.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc10 = true;
        }
      }
      this.schematRozwojuProfesja.umiejetnosci.push(this.umiejetnosciProfesji);

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
          this.schematRozwojuProfesja.wyborUmiejetnosciProfesji[n][p] = this.umiejetnosciProfesji;
        }
      }

    }
    // pozwolenie na eksport gdy brak umiejetnosci do wybory
    else {
      this.wyborUmiejetnosciProfesjaDisabler = false;

    }
    this.schematRozwojuProfesja.opis = this.statystkiProfesji[0].opis;

    // dodanie listy zdolnosci profesji
    if (this.statystkiProfesji[0].zdolnosci !== undefined) {
      for (let m = 0; m < this.statystkiProfesji[0].zdolnosci.length; m++) {
        this.logika.getZdolnosc(this.statystkiProfesji[0].zdolnosci[m]).subscribe(items => this.zdolnosciProfesji = items);
        this.schematRozwojuProfesja.zdolnosci[m] = this.zdolnosciProfesji;
      }
    }
    // dodanie zdolnosci profesji do wyboru
    if (this.statystkiProfesji[0].wyborZdolnosciProfesji !== undefined) {
      for (let m = 0; m < this.statystkiProfesji[0].wyborZdolnosciProfesji.length; m++) {
        // zainicjalizowanie pustej tablicy jezeli nieistnieje
        if (!this.schematRozwojuProfesja.wyborZdolnosciProfesji[m]) {
          this.schematRozwojuProfesja.wyborZdolnosciProfesji[m] = [];
        }
        for (let p = 0; p < this.statystkiProfesji[0].wyborZdolnosciProfesji[m].length; p++) {
          this.logika.getZdolnosc(this.statystkiProfesji[0].wyborZdolnosciProfesji[m][p])
            .subscribe(items => this.zdolnosciProfesji = items);
          this.schematRozwojuProfesja.wyborZdolnosciProfesji[m][p] = this.zdolnosciProfesji;
        }
      }
    }
    // pozwolenie na eksport gdy brak umiejetnosci do wybory
    else {
      this.wyborZdolnosciProdesjaDisabler = false;
      this.exportAbler();
    }

  }
  // sumowanie aktualnych statystyk
  changeAktualne() {
    this.sumowaneStatystyki.WW = this.poczatkoweStatystykiRasowe.WW + this.zdolnosciStatystykiRasowe.WW + this.zdolnosciStatystykiProfesji.WW + this.wykupionyRozwoj.WW;
    this.sumowaneStatystyki.US = this.poczatkoweStatystykiRasowe.US + this.zdolnosciStatystykiRasowe.US + this.zdolnosciStatystykiProfesji.US + this.wykupionyRozwoj.US;
    this.sumowaneStatystyki.K = this.poczatkoweStatystykiRasowe.K + this.zdolnosciStatystykiRasowe.K + this.zdolnosciStatystykiProfesji.K + this.wykupionyRozwoj.K;
    this.sumowaneStatystyki.Odp = this.poczatkoweStatystykiRasowe.Odp + this.zdolnosciStatystykiRasowe.Odp + this.zdolnosciStatystykiProfesji.Odp + this.wykupionyRozwoj.Odp;
    this.sumowaneStatystyki.Zr = this.poczatkoweStatystykiRasowe.Zr + this.zdolnosciStatystykiRasowe.Zr + this.zdolnosciStatystykiProfesji.Zr + this.wykupionyRozwoj.Zr;
    this.sumowaneStatystyki.Int = this.poczatkoweStatystykiRasowe.Int + this.zdolnosciStatystykiRasowe.Int + this.zdolnosciStatystykiProfesji.Int + this.wykupionyRozwoj.Int;
    this.sumowaneStatystyki.SW = this.poczatkoweStatystykiRasowe.SW + this.zdolnosciStatystykiRasowe.SW + this.zdolnosciStatystykiProfesji.SW + this.wykupionyRozwoj.SW;
    this.sumowaneStatystyki.Ogd = this.poczatkoweStatystykiRasowe.Ogd + this.zdolnosciStatystykiRasowe.Ogd + this.zdolnosciStatystykiProfesji.Ogd + this.wykupionyRozwoj.Ogd;
    this.sumowaneStatystyki.A = this.poczatkoweStatystykiRasowe.A + this.wykupionyRozwoj.A;
    this.sumowaneStatystyki.Zyw = this.poczatkoweStatystykiRasowe.Zyw + this.zdolnosciStatystykiRasowe.Zyw + this.zdolnosciStatystykiProfesji.Zyw + this.wykupionyRozwoj.Zyw;
    this.sumowaneStatystyki.S = Math.floor((this.poczatkoweStatystykiRasowe.K + this.zdolnosciStatystykiRasowe.K + this.zdolnosciStatystykiProfesji.K) / 10);
    this.sumowaneStatystyki.Wt = Math.floor((this.poczatkoweStatystykiRasowe.Odp + this.zdolnosciStatystykiRasowe.Odp + this.zdolnosciStatystykiProfesji.Odp) / 10);
    this.sumowaneStatystyki.Sz = this.poczatkoweStatystykiRasowe.Sz + this.zdolnosciStatystykiRasowe.Sz + this.zdolnosciStatystykiProfesji.Sz + this.wykupionyRozwoj.Sz;
    this.sumowaneStatystyki.Mag = this.poczatkoweStatystykiRasowe.Mag + this.wykupionyRozwoj.Mag;
    this.sumowaneStatystyki.PO = this.poczatkoweStatystykiRasowe.PO;
    this.sumowaneStatystyki.PP = this.poczatkoweStatystykiRasowe.PP;
  }
  // zdolnosci, które powodują zmiane cech poczatkowych, rasa=true - zdolnosci rasy, rasa=false - zdolnosci profesji, dwie po to, żeby można było resetować pojedynczo
  zdolnosciDoCechyPoczatkowych(zdolnosc, rasa) {
    if (rasa === true) {
      if (zdolnosc === "Bardzo silny") {
        this.zdolnosciStatystykiRasowe.K = this.zdolnosciStatystykiRasowe.K + 5;
      }
      else if (zdolnosc === "Urodzony wojownik") {
        this.zdolnosciStatystykiRasowe.WW = this.zdolnosciStatystykiRasowe.WW + 5;
      }
      else if (zdolnosc === "Błyskotliwość") {
        this.zdolnosciStatystykiRasowe.Int = this.zdolnosciStatystykiRasowe.Int + 5;
      }
      else if (zdolnosc === "Charyzmatyczny") {
        this.zdolnosciStatystykiRasowe.Ogd = this.zdolnosciStatystykiRasowe.Ogd + 5;
      }
      else if (zdolnosc === "Niezwykle odporny") {
        this.zdolnosciStatystykiRasowe.Odp = this.zdolnosciStatystykiRasowe.Odp + 5;
      }
      else if (zdolnosc === "Opanowanie") {
        this.zdolnosciStatystykiRasowe.SW = this.zdolnosciStatystykiRasowe.SW + 5;
      }
      else if (zdolnosc === "Strzelec wyborowy") {
        this.zdolnosciStatystykiRasowe.US = this.zdolnosciStatystykiRasowe.US + 5;
      }
      else if (zdolnosc === "Szybki refleks") {
        this.zdolnosciStatystykiRasowe.Zr = this.zdolnosciStatystykiRasowe.Zr + 5;
      }
      else if (zdolnosc === "Twardziel") {
        this.zdolnosciStatystykiRasowe.Zyw = this.zdolnosciStatystykiRasowe.Zyw + 1;
      }
      else if (zdolnosc === "Bardzo szybki") {
        this.zdolnosciStatystykiRasowe.Sz = this.zdolnosciStatystykiRasowe.Sz + 1;
      }
    }
    if (rasa === false) {
      if (zdolnosc === "Bardzo silny") {
        this.zdolnosciStatystykiProfesji.K = this.zdolnosciStatystykiProfesji.K + 5;
      }
      else if (zdolnosc === "Urodzony wojownik") {
        this.zdolnosciStatystykiProfesji.WW = this.zdolnosciStatystykiProfesji.WW + 5;
      }
      else if (zdolnosc === "Błyskotliwość") {
        this.zdolnosciStatystykiProfesji.Int = this.zdolnosciStatystykiProfesji.Int + 5;
      }
      else if (zdolnosc === "Charyzmatyczny") {
        this.zdolnosciStatystykiProfesji.Ogd = this.zdolnosciStatystykiProfesji.Ogd + 5;
      }
      else if (zdolnosc === "Niezwykle odporny") {
        this.zdolnosciStatystykiProfesji.Odp = this.zdolnosciStatystykiProfesji.Odp + 5;
      }
      else if (zdolnosc === "Opanowanie") {
        this.zdolnosciStatystykiProfesji.SW = this.zdolnosciStatystykiProfesji.SW + 5;
      }
      else if (zdolnosc === "Strzelec wyborowy") {
        this.zdolnosciStatystykiProfesji.US = this.zdolnosciStatystykiProfesji.US + 5;
      }
      else if (zdolnosc === "Szybki refleks") {
        this.zdolnosciStatystykiProfesji.Zr = this.zdolnosciStatystykiProfesji.Zr + 5;
      }
      else if (zdolnosc === "Twardziel") {
        this.zdolnosciStatystykiProfesji.Zyw = this.zdolnosciStatystykiProfesji.Zyw + 1;
      }
      else if (zdolnosc === "Bardzo szybki") {
        this.zdolnosciStatystykiProfesji.Sz = this.zdolnosciStatystykiProfesji.Sz + 1;
      }
    }
    this.changeAktualne();
  }
  async exportPostaci() {
    this.postacDoExportu.imie = this.poczatkoweStatystykiRasowe.imie;
    this.postacDoExportu.rasatitle = this.poczatkoweStatystykiRasowe.rasatitle;
    this.postacDoExportu.profesjatitle = this.schematRozwojuProfesja.profesjatitle;
    this.postacDoExportu.opis = this.schematRozwojuProfesja.opis;
    // statystyki rasy
    this.postacDoExportu.WW = this.poczatkoweStatystykiRasowe.WW;
    this.postacDoExportu.US = this.poczatkoweStatystykiRasowe.US;
    this.postacDoExportu.K = this.poczatkoweStatystykiRasowe.K;
    this.postacDoExportu.Odp = this.poczatkoweStatystykiRasowe.Odp;
    this.postacDoExportu.Zr = this.poczatkoweStatystykiRasowe.Zr;
    this.postacDoExportu.Int = this.poczatkoweStatystykiRasowe.Int;
    this.postacDoExportu.SW = this.poczatkoweStatystykiRasowe.SW;
    this.postacDoExportu.Ogd = this.poczatkoweStatystykiRasowe.Ogd;
    this.postacDoExportu.A = this.poczatkoweStatystykiRasowe.A;
    this.postacDoExportu.Zyw = this.poczatkoweStatystykiRasowe.Zyw;
    this.postacDoExportu.S = this.poczatkoweStatystykiRasowe.S;
    this.postacDoExportu.Wt = this.poczatkoweStatystykiRasowe.Wt;
    this.postacDoExportu.Sz = this.poczatkoweStatystykiRasowe.Sz;
    this.postacDoExportu.Mag = this.poczatkoweStatystykiRasowe.Mag;
    this.postacDoExportu.PO = this.poczatkoweStatystykiRasowe.PO;
    this.postacDoExportu.PP = this.poczatkoweStatystykiRasowe.PP;
    // statystyki profesji wykupione
    this.postacDoExportu.WW1 = this.wykupionyRozwoj.WW;
    this.postacDoExportu.US1 = this.wykupionyRozwoj.US;
    this.postacDoExportu.K1 = this.wykupionyRozwoj.K;
    this.postacDoExportu.Odp1 = this.wykupionyRozwoj.Odp;
    this.postacDoExportu.Zr1 = this.wykupionyRozwoj.Zr;
    this.postacDoExportu.Int1 = this.wykupionyRozwoj.Int;
    this.postacDoExportu.SW1 = this.wykupionyRozwoj.SW;
    this.postacDoExportu.Ogd1 = this.wykupionyRozwoj.Ogd;
    this.postacDoExportu.A1 = this.wykupionyRozwoj.A;
    this.postacDoExportu.Zyw1 = this.wykupionyRozwoj.Zyw;
    this.postacDoExportu.Sz1 = this.wykupionyRozwoj.Sz;
    this.postacDoExportu.Mag1 = this.wykupionyRozwoj.Mag;
    // maxymalne statystyki profesji
    this.postacDoExportu.WW2 = this.schematRozwojuProfesja.WW;
    this.postacDoExportu.US2 = this.schematRozwojuProfesja.US;
    this.postacDoExportu.K2 = this.schematRozwojuProfesja.K;
    this.postacDoExportu.Odp2 = this.schematRozwojuProfesja.Odp;
    this.postacDoExportu.Zr2 = this.schematRozwojuProfesja.Zr;
    this.postacDoExportu.Int2 = this.schematRozwojuProfesja.Int;
    this.postacDoExportu.SW2 = this.schematRozwojuProfesja.SW;
    this.postacDoExportu.Ogd2 = this.schematRozwojuProfesja.Ogd;
    this.postacDoExportu.A2 = this.schematRozwojuProfesja.A;
    this.postacDoExportu.Zyw2 = this.schematRozwojuProfesja.Zyw;
    this.postacDoExportu.Sz2 = this.schematRozwojuProfesja.Sz;
    this.postacDoExportu.Mag2 = this.schematRozwojuProfesja.Mag;
    // sumowane statystyki
    this.postacDoExportu.WW3 = this.sumowaneStatystyki.WW;
    this.postacDoExportu.US3 = this.sumowaneStatystyki.US;
    this.postacDoExportu.K3 = this.sumowaneStatystyki.K;
    this.postacDoExportu.Odp3 = this.sumowaneStatystyki.Odp;
    this.postacDoExportu.Zr3 = this.sumowaneStatystyki.Zr;
    this.postacDoExportu.Int3 = this.sumowaneStatystyki.Int;
    this.postacDoExportu.SW3 = this.sumowaneStatystyki.SW;
    this.postacDoExportu.Ogd3 = this.sumowaneStatystyki.Ogd;
    this.postacDoExportu.A3 = this.sumowaneStatystyki.A;
    this.postacDoExportu.Zyw3 = this.sumowaneStatystyki.Zyw;
    this.postacDoExportu.S3 = this.sumowaneStatystyki.S;
    this.postacDoExportu.Wt3 = this.sumowaneStatystyki.Wt;
    this.postacDoExportu.Sz3 = this.sumowaneStatystyki.Sz;
    this.postacDoExportu.Mag3 = this.sumowaneStatystyki.Mag;
    this.postacDoExportu.PO3 = this.sumowaneStatystyki.PO;
    this.postacDoExportu.PP3 = this.sumowaneStatystyki.PP;
    // statystyki ze zdolnosci rasy
    this.postacDoExportu.WW4 = this.zdolnosciStatystykiRasowe.WW;
    this.postacDoExportu.US4 = this.zdolnosciStatystykiRasowe.US;
    this.postacDoExportu.K4 = this.zdolnosciStatystykiRasowe.K;
    this.postacDoExportu.Odp4 = this.zdolnosciStatystykiRasowe.Odp;
    this.postacDoExportu.Zr4 = this.zdolnosciStatystykiRasowe.Zr;
    this.postacDoExportu.Int4 = this.zdolnosciStatystykiRasowe.Int;
    this.postacDoExportu.SW4 = this.zdolnosciStatystykiRasowe.SW;
    this.postacDoExportu.Ogd4 = this.zdolnosciStatystykiRasowe.Ogd;
    this.postacDoExportu.A4 = this.zdolnosciStatystykiRasowe.A;
    this.postacDoExportu.Zyw4 = this.zdolnosciStatystykiRasowe.Zyw;
    this.postacDoExportu.Sz4 = this.zdolnosciStatystykiRasowe.Sz;
    // statystyki ze zdolnosci profesji
    this.postacDoExportu.WW5 = this.zdolnosciStatystykiProfesji.WW;
    this.postacDoExportu.US5 = this.zdolnosciStatystykiProfesji.US;
    this.postacDoExportu.K5 = this.zdolnosciStatystykiProfesji.K;
    this.postacDoExportu.Odp5 = this.zdolnosciStatystykiProfesji.Odp;
    this.postacDoExportu.Zr5 = this.zdolnosciStatystykiProfesji.Zr;
    this.postacDoExportu.Int5 = this.zdolnosciStatystykiProfesji.Int;
    this.postacDoExportu.SW5 = this.zdolnosciStatystykiProfesji.SW;
    this.postacDoExportu.Ogd5 = this.zdolnosciStatystykiProfesji.Ogd;
    this.postacDoExportu.A5 = this.zdolnosciStatystykiProfesji.A;
    this.postacDoExportu.Zyw5 = this.zdolnosciStatystykiProfesji.Zyw;
    this.postacDoExportu.Sz5 = this.zdolnosciStatystykiProfesji.Sz;

    for (let n = 0; n < this.poczatkoweStatystykiRasowe.umiejetnosci.length; n++) {
      this.postacDoExportu.umiejetnosciRasowe[n] = this.poczatkoweStatystykiRasowe.umiejetnosci[n][0];
    }
    for (let n = 0; n < this.schematRozwojuProfesja.umiejetnosci.length; n++) {
      this.postacDoExportu.umiejetnosciProfesji[n] = this.schematRozwojuProfesja.umiejetnosci[n][0];
    }
    for (let n = 0; n < this.poczatkoweStatystykiRasowe.zdolnosci.length; n++) {
      this.postacDoExportu.zdolnosciRasowe[n] = this.poczatkoweStatystykiRasowe.zdolnosci[n][0];
    }
    for (let n = 0; n < this.schematRozwojuProfesja.zdolnosci.length; n++) {
      this.postacDoExportu.zdolnosciProfesji[n] = this.schematRozwojuProfesja.zdolnosci[n][0];
    }

    this.postacDoExportu.doswiadczenie = this.schematRozwojuProfesja.doswiadczenie;
    this.postacDoExportu.kto = (await this.authService.afAuth.currentUser).email;
    this.postacDoExportu.data = new Date().toString();
    this.exportPostac(this.postacDoExportu);
  }

  exportPostac(postac: ExportPostac): void {

    const param = JSON.parse(JSON.stringify(postac));
    this.postacRef.add(param);
  }
  importPostac(): AngularFirestoreCollection<ExportPostac> {
    return this.postacRef;
  }

  exportAbler() {
    if (this.wyborUmiejetnosciRasaDisabler === false && this.wyborUmiejetnosciProfesjaDisabler === false && this.wyborZdolnosciRasaDisabler === false && this.wyborZdolnosciProdesjaDisabler === false) {
      this.exportDisabler = false;
    }
  }
}

