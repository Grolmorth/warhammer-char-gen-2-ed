import { Component, OnInit } from '@angular/core';
import { Rasa } from '../service/rasa';
import { AktualneStatystyki } from '../service/aktualneStatystyki';

import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bohater-bohater',
  templateUrl: './bohater-bohater.component.html',
  styleUrls: ['./bohater-bohater.component.css']
})
export class BohaterBohaterComponent implements OnInit {

  // przypisanie aktywnej rasy do pola typu string
  selectedRasaId: string;
  public data: string = this.selectedRasaId;

  // przypisanie tablic ras z charakterystykami
  rasa: Rasa[] = [];

  constructor(private rasyService: BohaterLogikaService, private share: SharedService) { }

  // pobranie wszystkich ras z serwisu
  ngOnInit() {
    this.rasyService.getRasy().subscribe(items => this.rasa = items);
  }

  // logika przyciusku do zmiany rasy
  nowaRasa() {
    this.share.changeRasa(this.selectedRasaId);
  }




}
