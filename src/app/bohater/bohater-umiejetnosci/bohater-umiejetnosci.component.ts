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

}
