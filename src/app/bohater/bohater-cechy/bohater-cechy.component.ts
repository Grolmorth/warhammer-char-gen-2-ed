import { BohaterOgolne } from './../service/bohaterOgolne';
import { Component, OnInit } from '@angular/core';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';



@Component({
  selector: 'app-bohater-cechy',
  templateUrl: './bohater-cechy.component.html',
  styleUrls: ['./bohater-cechy.component.css']
})

export class BohaterCechyComponent implements OnInit {
  // pobranie cech rasowych

  poczatkowa: BohaterOgolne;
  // pobranie cech profesji

  schematRozwoju: BohaterOgolne;
  public mods: string[] = ['Walka Wręcz', 'Umiejętności Strzeleckie', 'Krzepa', 'Odporność', 'Zręczność', 'Inteligencja', 'Siła Woli', 'Ogłada'];
  aktualne: BohaterOgolne;
  zdolnosciStatystykiRasowe: BohaterOgolne;
  zdolnosciStatystykiProfesji: BohaterOgolne;
  wykupionyRzowoj: BohaterOgolne;
  mod: string;
  shalyaAktualne: number;
  shalyaZmiana: number;


  public constructor(public logika: BohaterLogikaService, public share: SharedService) { }

  ngOnInit() {

    this.poczatkowa = this.share.poczatkoweStatystykiRasowe;
    this.schematRozwoju = this.share.schematRozwojuProfesja;
    this.aktualne = this.share.sumowaneStatystyki;
    this.zdolnosciStatystykiRasowe = this.share.zdolnosciStatystykiRasowe;
    this.zdolnosciStatystykiProfesji = this.share.zdolnosciStatystykiProfesji;
    this.wykupionyRzowoj = this.share.wykupionyRozwoj;

  }
  po(mod) {
    if (mod === true) {
      this.share.poczatkoweStatystykiRasowe.PO = this.share.poczatkoweStatystykiRasowe.PO + 1;
    }
    else {
      this.share.poczatkoweStatystykiRasowe.PO = this.share.poczatkoweStatystykiRasowe.PO - 1;
    }
    this.share.changeAktualne();
  }
  pp(mod) {
    if (mod === true) {
      this.share.poczatkoweStatystykiRasowe.PP = this.share.poczatkoweStatystykiRasowe.PP + 1;
    }
    else {
      this.share.poczatkoweStatystykiRasowe.PP = this.share.poczatkoweStatystykiRasowe.PP - 1;
    }
    this.share.changeAktualne();
  }
  shallya(mod) {
    if (this.share.poczatkoweStatystykiRasowe.shallya === true) {
      if (this.poczatkowa.rasatitle === "Człowiek") {
        if (mod === "Walka Wręcz") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
          this.shalyaZmiana = 31;
        }
        if (mod === "Umiejętności Strzeleckie") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
          this.shalyaZmiana = 31;
        }
        if (mod === "Krzepa") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
          this.shalyaZmiana = 31;
        }
        if (mod === "Odporność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
          this.shalyaZmiana = 31;
        }
        if (mod === "Zręczność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
          this.shalyaZmiana = 31;
        }
        if (mod === "Inteligencja") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
          this.shalyaZmiana = 31;
        }
        if (mod === "Siła Woli") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
          this.shalyaZmiana = 31;
        }
        if (mod === "Ogłada") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
          this.shalyaZmiana = 31;
        }
      }
      if (this.poczatkowa.rasatitle === "Krasnolud") {
        if (mod === "Walka Wręcz") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
          this.shalyaZmiana = 41;
        }
        if (mod === "Umiejętności Strzeleckie") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
          this.shalyaZmiana = 31;
        }
        if (mod === "Krzepa") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
          this.shalyaZmiana = 31;
        }
        if (mod === "Odporność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
          this.shalyaZmiana = 41;
        }
        if (mod === "Zręczność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
          this.shalyaZmiana = 21;
        }
        if (mod === "Inteligencja") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
          this.shalyaZmiana = 31;
        }
        if (mod === "Siła Woli") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
          this.shalyaZmiana = 31;
        }
        if (mod === "Ogłada") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
          this.shalyaZmiana = 21;
        }
      }
      if (this.poczatkowa.rasatitle === "Elf") {
        if (mod === "Walka Wręcz") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
          this.shalyaZmiana = 31;
        }
        if (mod === "Umiejętności Strzeleckie") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
          this.shalyaZmiana = 41;
        }
        if (mod === "Krzepa") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
          this.shalyaZmiana = 31;
        }
        if (mod === "Odporność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
          this.shalyaZmiana = 31;
        }
        if (mod === "Zręczność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
          this.shalyaZmiana = 41;
        }
        if (mod === "Inteligencja") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
          this.shalyaZmiana = 31;
        }
        if (mod === "Siła Woli") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
          this.shalyaZmiana = 31;
        }
        if (mod === "Ogłada") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
          this.shalyaZmiana = 31;
        }
      }
      if (this.poczatkowa.rasatitle === "Niziołek") {
        if (mod === "Walka Wręcz") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.WW;
          this.shalyaZmiana = 21;
        }
        if (mod === "Umiejętności Strzeleckie") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.US;
          this.shalyaZmiana = 41;
        }
        if (mod === "Krzepa") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.K;
          this.shalyaZmiana = 21;
        }
        if (mod === "Odporność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Odp;
          this.shalyaZmiana = 21;
        }
        if (mod === "Zręczność") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Zr;
          this.shalyaZmiana = 41;
        }
        if (mod === "Inteligencja") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Int;
          this.shalyaZmiana = 31;
        }
        if (mod === "Siła Woli") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.SW;
          this.shalyaZmiana = 31;
        }
        if (mod === "Ogłada") {
          this.shalyaAktualne = this.share.poczatkoweStatystykiRasowe.Ogd;
          this.shalyaZmiana = 41;
        }
      }
    }
  }
  shallyaConfirm(mod) {

    if (this.poczatkowa.rasatitle === "Człowiek") {
      if (mod === "Walka Wręcz") {
        this.share.poczatkoweStatystykiRasowe.WW = 31;
      }
      if (mod === "Umiejętności Strzeleckie") {
        this.share.poczatkoweStatystykiRasowe.US = 31;
      }
      if (mod === "Krzepa") {
        this.share.poczatkoweStatystykiRasowe.K = 31;
      }
      if (mod === "Odporność") {
        this.share.poczatkoweStatystykiRasowe.Odp = 31;
      }
      if (mod === "Zręczność") {
        this.share.poczatkoweStatystykiRasowe.Zr = 31;
      }
      if (mod === "Inteligencja") {
        this.share.poczatkoweStatystykiRasowe.Int = 31;
      }
      if (mod === "Siła Woli") {
        this.share.poczatkoweStatystykiRasowe.SW = 31;
      }
      if (mod === "Ogłada") {
        this.share.poczatkoweStatystykiRasowe.Ogd = 31;
      }
    }
    if (this.poczatkowa.rasatitle === "Krasnolud") {
      if (mod === "Walka Wręcz") {
        this.share.poczatkoweStatystykiRasowe.WW = 41;
      }
      if (mod === "Umiejętności Strzeleckie") {
        this.share.poczatkoweStatystykiRasowe.US = 31;
      }
      if (mod === "Krzepa") {
        this.share.poczatkoweStatystykiRasowe.K = 31;
      }
      if (mod === "Odporność") {
        this.share.poczatkoweStatystykiRasowe.Odp = 41;
      }
      if (mod === "Zręczność") {
        this.share.poczatkoweStatystykiRasowe.Zr = 21;
      }
      if (mod === "Inteligencja") {
        this.share.poczatkoweStatystykiRasowe.Int = 31;
      }
      if (mod === "Siła Woli") {
        this.share.poczatkoweStatystykiRasowe.SW = 31;
      }
      if (mod === "Ogłada") {
        this.share.poczatkoweStatystykiRasowe.Ogd = 21;
      }
    }
    if (this.poczatkowa.rasatitle === "Elf") {
      if (mod === "Walka Wręcz") {
        this.share.poczatkoweStatystykiRasowe.WW = 31;
      }
      if (mod === "Umiejętności Strzeleckie") {
        this.share.poczatkoweStatystykiRasowe.US = 41;
      }
      if (mod === "Krzepa") {
        this.share.poczatkoweStatystykiRasowe.K = 31;
      }
      if (mod === "Odporność") {
        this.share.poczatkoweStatystykiRasowe.Odp = 31;
      }
      if (mod === "Zręczność") {
        this.share.poczatkoweStatystykiRasowe.Zr = 41;
      }
      if (mod === "Inteligencja") {
        this.share.poczatkoweStatystykiRasowe.Int = 31;
      }
      if (mod === "Siła Woli") {
        this.share.poczatkoweStatystykiRasowe.SW = 31;
      }
      if (mod === "Ogłada") {
        this.share.poczatkoweStatystykiRasowe.Ogd = 31;
      }
    }
    if (this.poczatkowa.rasatitle === "Niziołek") {
      if (mod === "Walka Wręcz") {
        this.share.poczatkoweStatystykiRasowe.WW = 21;
      }
      if (mod === "Umiejętności Strzeleckie") {
        this.share.poczatkoweStatystykiRasowe.US = 41;
      }
      if (mod === "Krzepa") {
        this.share.poczatkoweStatystykiRasowe.K = 21;
      }
      if (mod === "Odporność") {
        this.share.poczatkoweStatystykiRasowe.Odp = 21;
      }
      if (mod === "Zręczność") {
        this.share.poczatkoweStatystykiRasowe.Zr = 41;
      }
      if (mod === "Inteligencja") {
        this.share.poczatkoweStatystykiRasowe.Int = 31;
      }
      if (mod === "Siła Woli") {
        this.share.poczatkoweStatystykiRasowe.SW = 31;
      }
      if (mod === "Ogłada") {
        this.share.poczatkoweStatystykiRasowe.Ogd = 41;
      }
    }
    this.share.changeAktualne();
    this.share.poczatkoweStatystykiRasowe.shallya = false;

  }
}




