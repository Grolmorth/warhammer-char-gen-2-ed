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


  onWyborZdolnosciProfesja(schemat, [i]) {
    this.share.schematRozwojuProfesja.zdolnosci.push(schemat);
    this.share.schematRozwojuProfesja.wyborZdolnosciProfesji[i] = [];
    this.share.zdolnosciDoCechyPoczatkowych(schemat[0].zdolnosc, false);
    console.log('dodano zdolnosc', schemat[0].zdolnosc, 'do puli zdolnosci');
  }
  onWyborZdolnosciRasa(schemat, [i]) {
    this.share.poczatkoweStatystykiRasowe.zdolnosci.push(schemat);
    this.share.poczatkoweStatystykiRasowe.wyborZdolnosciRasy[i] = [];
    this.share.zdolnosciDoCechyPoczatkowych(schemat[0].zdolnosc, true);
    console.log('dodano zdolnosc', schemat[0].zdolnosc, 'do puli zdolnosci');
  }
}
