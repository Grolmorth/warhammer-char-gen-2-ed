import { Umiejetnosci } from './../bohater/service/umiejetnosci';
import { ExportPostac } from './../bohater/service/exportPostac';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../bohater/service/shared.service';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-import-bohatera',
  templateUrl: './import-bohatera.component.html',
  styleUrls: ['./import-bohatera.component.css']
})
export class ImportBohateraComponent implements OnInit {

  postac: any;
  key = '';
  imie = '';

  constructor(private shared: SharedService, public authService: AuthService) { }

  ngOnInit(): void {
    this.importListyPostaci();
  }
  importujPostac(postac) {
    this.shared.resetStatystyk();
    this.shared.poczatkoweStatystykiRasowe.imie = postac.imie;
    this.shared.poczatkoweStatystykiRasowe.rasatitle = postac.rasatitle;
    this.shared.poczatkoweStatystykiRasowe.profesjatitle = postac.profesjatitle;
    this.shared.schematRozwojuProfesja.profesjatitle = postac.profesjatitle;
    this.shared.schematRozwojuProfesja.opis = postac.opis;


    // statystyki rasy
    this.shared.poczatkoweStatystykiRasowe.WW = postac.WW;
    this.shared.poczatkoweStatystykiRasowe.US = postac.US;
    this.shared.poczatkoweStatystykiRasowe.K = postac.K;
    this.shared.poczatkoweStatystykiRasowe.Odp = postac.Odp;
    this.shared.poczatkoweStatystykiRasowe.Zr = postac.Zr;
    this.shared.poczatkoweStatystykiRasowe.Int = postac.Int;
    this.shared.poczatkoweStatystykiRasowe.SW = postac.SW;
    this.shared.poczatkoweStatystykiRasowe.Ogd = postac.Ogd;
    this.shared.poczatkoweStatystykiRasowe.A = postac.A;
    this.shared.poczatkoweStatystykiRasowe.Zyw = postac.Zyw;
    this.shared.poczatkoweStatystykiRasowe.S = postac.S;
    this.shared.poczatkoweStatystykiRasowe.Wt = postac.Wt;
    this.shared.poczatkoweStatystykiRasowe.Sz = postac.Sz;
    this.shared.poczatkoweStatystykiRasowe.Mag = postac.Mag;
    this.shared.poczatkoweStatystykiRasowe.PO = postac.PO;
    this.shared.poczatkoweStatystykiRasowe.PP = postac.PP;
    // statystyki profesji wykupione
    this.shared.wykupionyRozwoj.WW = postac.WW1;
    this.shared.wykupionyRozwoj.US = postac.US1;
    this.shared.wykupionyRozwoj.K = postac.K1;
    this.shared.wykupionyRozwoj.Odp = postac.Odp1;
    this.shared.wykupionyRozwoj.Zr = postac.Zr1;
    this.shared.wykupionyRozwoj.Int = postac.Int1;
    this.shared.wykupionyRozwoj.SW = postac.SW1;
    this.shared.wykupionyRozwoj.Ogd = postac.Ogd1;
    this.shared.wykupionyRozwoj.A = postac.A1;
    this.shared.wykupionyRozwoj.Zyw = postac.Zyw1;
    this.shared.wykupionyRozwoj.Sz = postac.Sz1;
    this.shared.wykupionyRozwoj.Mag = postac.Mag1;
    // maxymalne statystyki profesji
    this.shared.schematRozwojuProfesja.WW = postac.WW2;
    this.shared.schematRozwojuProfesja.US = postac.US2;
    this.shared.schematRozwojuProfesja.K = postac.K2;
    this.shared.schematRozwojuProfesja.Odp = postac.Odp2;
    this.shared.schematRozwojuProfesja.Zr = postac.Zr2;
    this.shared.schematRozwojuProfesja.Int = postac.Int2;
    this.shared.schematRozwojuProfesja.SW = postac.SW2;
    this.shared.schematRozwojuProfesja.Ogd = postac.Ogd2;
    this.shared.schematRozwojuProfesja.A = postac.A2;
    this.shared.schematRozwojuProfesja.Zyw = postac.Zyw2;
    this.shared.schematRozwojuProfesja.Sz = postac.Sz2;
    this.shared.schematRozwojuProfesja.Mag = postac.Mag2;
    // sumowane statystyki
    this.shared.sumowaneStatystyki.WW = postac.WW3;
    this.shared.sumowaneStatystyki.US = postac.US3;
    this.shared.sumowaneStatystyki.K = postac.K3;
    this.shared.sumowaneStatystyki.Odp = postac.Odp3;
    this.shared.sumowaneStatystyki.Zr = postac.Zr3;
    this.shared.sumowaneStatystyki.Int = postac.Int3;
    this.shared.sumowaneStatystyki.SW = postac.SW3;
    this.shared.sumowaneStatystyki.Ogd = postac.Ogd3;
    this.shared.sumowaneStatystyki.A = postac.A3;
    this.shared.sumowaneStatystyki.Zyw = postac.Zyw3;
    this.shared.sumowaneStatystyki.S = postac.S3;
    this.shared.sumowaneStatystyki.Wt = postac.Wt3;
    this.shared.sumowaneStatystyki.Sz = postac.Sz3;
    this.shared.sumowaneStatystyki.Mag = postac.Mag3;
    this.shared.sumowaneStatystyki.PO = postac.PO3;
    this.shared.sumowaneStatystyki.PP = postac.PP3;
    // statystyki ze zdolnosci rasy
    this.shared.zdolnosciStatystykiRasowe.WW = postac.WW4;
    this.shared.zdolnosciStatystykiRasowe.US = postac.US4;
    this.shared.zdolnosciStatystykiRasowe.K = postac.K4;
    this.shared.zdolnosciStatystykiRasowe.Odp = postac.Odp4;
    this.shared.zdolnosciStatystykiRasowe.Zr = postac.Zr4;
    this.shared.zdolnosciStatystykiRasowe.Int = postac.Int4;
    this.shared.zdolnosciStatystykiRasowe.SW = postac.SW4;
    this.shared.zdolnosciStatystykiRasowe.Ogd = postac.Ogd4;
    this.shared.zdolnosciStatystykiRasowe.A = postac.A4;
    this.shared.zdolnosciStatystykiRasowe.Zyw = postac.Zyw4;
    this.shared.zdolnosciStatystykiRasowe.Sz = postac.Sz4;
    // statystyki ze zdolnosci profesji
    this.shared.zdolnosciStatystykiProfesji.WW = postac.WW5;
    this.shared.zdolnosciStatystykiProfesji.US = postac.US5;
    this.shared.zdolnosciStatystykiProfesji.K = postac.K5;
    this.shared.zdolnosciStatystykiProfesji.Odp = postac.Odp5;
    this.shared.zdolnosciStatystykiProfesji.Zr = postac.Zr5;
    this.shared.zdolnosciStatystykiProfesji.Int = postac.Int5;
    this.shared.zdolnosciStatystykiProfesji.SW = postac.SW5;
    this.shared.zdolnosciStatystykiProfesji.Ogd = postac.Ogd5;
    this.shared.zdolnosciStatystykiProfesji.A = postac.A5;
    this.shared.zdolnosciStatystykiProfesji.Zyw = postac.Zyw5;
    this.shared.zdolnosciStatystykiProfesji.Sz = postac.Sz5;
    this.shared.schematRozwojuProfesja.doswiadczenie = postac.doswiadczenie;
    // znacznik zimportowanej postaci
    this.shared.poczatkoweStatystykiRasowe.importowane = true;

    for (let n = 0; n < postac.umiejetnosciRasowe.length; n++) {
      if (!this.shared.poczatkoweStatystykiRasowe.umiejetnosci[n]) {
        this.shared.poczatkoweStatystykiRasowe.umiejetnosci[n] = [];
      }
      this.shared.poczatkoweStatystykiRasowe.umiejetnosci[n][0] = postac.umiejetnosciRasowe[n];
    }
    for (let n = 0; n < postac.umiejetnosciProfesji.length; n++) {
      if (!this.shared.schematRozwojuProfesja.umiejetnosci[n]) {
        this.shared.schematRozwojuProfesja.umiejetnosci[n] = [];
      }
      this.shared.schematRozwojuProfesja.umiejetnosci[n][0] = postac.umiejetnosciProfesji[n];
    }
    for (let n = 0; n < postac.zdolnosciRasowe.length; n++) {
      if (!this.shared.poczatkoweStatystykiRasowe.zdolnosci[n]) {
        this.shared.poczatkoweStatystykiRasowe.zdolnosci[n] = [];
      }
      this.shared.poczatkoweStatystykiRasowe.zdolnosci[n][0] = postac.zdolnosciRasowe[n];
    }
    for (let n = 0; n < postac.zdolnosciProfesji.length; n++) {
      if (!this.shared.schematRozwojuProfesja.zdolnosci[n]) {
        this.shared.schematRozwojuProfesja.zdolnosci[n] = [];
      }
      this.shared.schematRozwojuProfesja.zdolnosci[n][0] = postac.zdolnosciProfesji[n];
    }
    this.shared.exportDisabler = false;
    this.shared.exportAbler();
  }
  usunPostac(key: string): Promise<void> {
    return this.shared.postacRef.doc(key).delete();
  }
  probaUsun(key, imie) {
    this.key = key;
    this.imie = imie;
  }



  importListyPostaci() {
    this.shared.importPostac().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(postac => {
      this.postac = postac;

      return postac;
    });
  }
}
