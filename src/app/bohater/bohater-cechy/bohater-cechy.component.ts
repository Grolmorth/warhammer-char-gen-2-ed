import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { Rasa } from '../service/rasa';

@Component({
  selector: 'app-bohater-cechy',
  templateUrl: './bohater-cechy.component.html',
  styleUrls: ['./bohater-cechy.component.css']
})
export class BohaterCechyComponent implements OnInit {



  rasa: Rasa[] = [];



  constructor(private rasyService: BohaterLogikaService) {
  }


  ngOnInit() {
    this.rasyService.getRasy().subscribe(items => this.rasa = items);

  }

}
