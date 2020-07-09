import { Component, OnInit} from '@angular/core';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { Rasa } from '../service/rasa';
import { SharedService } from '../service/shared.service';
import { AktualneStatystyki } from '../service/aktualneStatystyki';

@Component({
  selector: 'app-bohater-cechy',
  templateUrl: './bohater-cechy.component.html',
  styleUrls: ['./bohater-cechy.component.css']
})

export class BohaterCechyComponent implements OnInit {

  rasa: Rasa[] = [];

  aktualneStatystyki: AktualneStatystyki;
  public constructor(public rasyService: BohaterLogikaService, public share: SharedService) { }

  ngOnInit() {
    this.rasyService.getRasy().subscribe(items => this.rasa = items);
    this.aktualneStatystyki = this.share.aktualneStatystyki;

  }


}


