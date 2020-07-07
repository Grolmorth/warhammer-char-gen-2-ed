import { Component, OnInit, Input, Output, EventEmitter, OnChanges, forwardRef } from '@angular/core';
import { Rasa } from '../service/rasa';

import { BohaterLogikaService } from '../service/bohater-logika.service';




@Component({
  selector: 'app-bohater-bohater',
  templateUrl: './bohater-bohater.component.html',
  styleUrls: ['./bohater-bohater.component.css']
})
export class BohaterBohaterComponent implements OnInit {


  rasa: Rasa[] = [];
  selectedRasaId: string;


  constructor(private rasyService: BohaterLogikaService) {
  }

  ngOnInit() {
    this.rasyService.getRasy().subscribe(items => this.rasa = items);
  }

}
