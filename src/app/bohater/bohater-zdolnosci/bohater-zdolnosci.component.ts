import { Component, OnInit } from '@angular/core';
import { BohaterOgolne } from '../service/bohaterOgolne';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-bohater-zdolnosci',
  templateUrl: './bohater-zdolnosci.component.html',
  styleUrls: ['./bohater-zdolnosci.component.css']
})
export class BohaterZdolnosciComponent implements OnInit {


  zdolnosciProfesji: BohaterOgolne;
  zdolnosciRasy: BohaterOgolne;


  public constructor(public logika: BohaterLogikaService, public share: SharedService) { }

  ngOnInit() {

    this.zdolnosciProfesji = this.share.schematRozwojuProfesja;
    this.zdolnosciRasy = this.share.poczatkoweStatystykiRasowe;
  }
  zdolnosc(element, index, array) {
    return (element === []);
  }

  onWyborZdolnosciProfesja(schemat, [i]) {
    this.share.schematRozwojuProfesja.zdolnosci.push(schemat);
    this.share.schematRozwojuProfesja.wyborZdolnosciProfesji[i] = [];
    this.share.zdolnosciDoCechyPoczatkowych(schemat[0].zdolnosc, false);
    let m = 0;
    for (let n = 0; n < this.share.schematRozwojuProfesja.wyborZdolnosciProfesji.length; n++) {
      const passed = this.share.schematRozwojuProfesja.wyborZdolnosciProfesji[n].every(this.zdolnosc);
      if (passed === true) {
        m = m + 1;
        if (m === this.share.schematRozwojuProfesja.wyborZdolnosciProfesji.length) {
          this.share.wyborZdolnosciProdesjaDisabler = false;
        }
      }
    }
    this.share.exportAbler();
  }
  onWyborZdolnosciRasa(schemat, [i]) {
    this.share.poczatkoweStatystykiRasowe.zdolnosci.push(schemat);
    this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[i] = [];
    this.share.zdolnosciDoCechyPoczatkowych(schemat[0].zdolnosc, true);
    let m = 0;
    for (let n = 0; n < this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy.length; n++) {
      const passed = this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[n].every(this.zdolnosc);
      if (passed === true) {
        m = m + 1;
        if (m === this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy.length) {
          this.share.wyborZdolnosciRasaDisabler = false;
        }
      }
    }
    this.share.exportAbler();

  }
}
