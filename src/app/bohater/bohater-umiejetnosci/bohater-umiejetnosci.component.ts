import { Component, OnInit } from '@angular/core';
import { BohaterOgolne } from '../service/bohaterOgolne';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';



@Component({
  selector: 'app-bohater-umiejetnosci',
  templateUrl: './bohater-umiejetnosci.component.html',
  styleUrls: ['./bohater-umiejetnosci.component.css']
})

export class BohaterUmiejetnosciComponent implements OnInit {
  umiejetnosciProfesji: BohaterOgolne;
  umiejetnosciRasy: BohaterOgolne;




  public constructor(public logika: BohaterLogikaService, public share: SharedService) { }



  ngOnInit() {

    this.umiejetnosciProfesji = this.share.schematRozwojuProfesja;
    this.umiejetnosciRasy = this.share.poczatkoweStatystykiRasowe;
  }
  umiejetnosc(element, index, array) {
    return (element === []);
  }
  onWyborUmiejetnosciProfesja(schemat, [i]) {
    // sprawdzanie czy nie istnieje juz taka umiejetnosc rasowa, jezeli tak to +10/+20
    let n = 0;
    for (let m = 0; m < this.share.poczatkoweStatystykiRasowe.umiejetnosci.length; m++) {
      if (this.share.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc === schemat[0].umiejetnosc && n === 0) {
        if (this.share.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc10 === true) {
          this.share.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc20 = true;
          this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[i] = [];
          n = 1;
        }
        this.share.poczatkoweStatystykiRasowe.umiejetnosci[m][0].umiejetnosc10 = true;
        this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[i] = [];
        n = 1;
      }
    }
    if (n === 0) {
      this.share.schematRozwojuProfesja.umiejetnosci.push(schemat);
      this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[i] = [];
      n = 1;
    }

    // eksport disabler gdy nie wybrano umiejetnosci
    let m = 0;
    for (let n = 0; n < this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji.length; n++) {
      const passed = this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji[n].every(this.umiejetnosc);
      if (passed === true) {
        m = m + 1;
        if (m === this.share.schematRozwojuProfesja.wyborUmiejetnosciProfesji.length) {
          this.share.wyborUmiejetnosciProfesjaDisabler = false;
        }
      }
    }
    this.share.exportAbler();
  }
  onWyborUmiejetnosciRasa(schemat, [i]) {
    this.share.poczatkoweStatystykiRasowe.umiejetnosci.push(schemat);
    this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[i] = [];
    let m = 0;
    for (let n = 0; n < this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy.length; n++) {
      const passed = this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy[n].every(this.umiejetnosc);
      if (passed === true) {
        m = m + 1;
        if (m === this.share.poczatkoweStatystykiRasowe.wyborUmiejetnosciRasy.length) {
          this.share.wyborUmiejetnosciRasaDisabler = false;
        }
      }
    }
    this.share.exportAbler();
  }






}
