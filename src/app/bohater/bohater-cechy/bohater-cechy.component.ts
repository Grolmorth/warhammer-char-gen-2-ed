import { Component, OnInit } from '@angular/core';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';
import { BohaterOgolne } from '../service/bohaterOgolne';


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

  aktualne: BohaterOgolne;


  public constructor(public logika: BohaterLogikaService, public share: SharedService) { }

  ngOnInit() {

    this.poczatkowa = this.share.poczatkoweStatystykiRasowe;
    this.schematRozwoju = this.share.schematRozwojuProfesja;
    this.aktualne = this.share.sumowaneStatystyki;


  }


}


