import { Component, OnInit } from '@angular/core';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';
import { BohaterOgolne } from '../service/bohaterOgolne';

@Component({
  selector: 'app-bohater-punkty-doswiadczenia',
  templateUrl: './bohater-punkty-doswiadczenia.component.html',
  styleUrls: ['./bohater-punkty-doswiadczenia.component.css']
})
export class BohaterPunktyDoswiadczeniaComponent implements OnInit {

  doswiadczenie: Number = 100;
  wykupioneCechy: BohaterOgolne;

  constructor(public logika: BohaterLogikaService, public share: SharedService) { }



  ngOnInit(): void {
  }

}
