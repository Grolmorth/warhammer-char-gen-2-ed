import { Component, OnInit } from '@angular/core';
import { Rasa } from '../service/rasa';

import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';
import { ProfesjaRoll } from '../service/profesjaRoll';

@Component({
  selector: 'app-bohater-bohater',
  templateUrl: './bohater-bohater.component.html',
  styleUrls: ['./bohater-bohater.component.css']
})
export class BohaterBohaterComponent implements OnInit {

  submittedRasa = false;
  // przypisanie aktywnej rasy do pola typu string
  selectedRasaId: string;
  public data: string = this.selectedRasaId;
  // przypisanie aktywnej rasy do pola typu string
  selectedProfesjaId: string;
  public dataa: string = this.selectedProfesjaId;

  // przypisanie tablic ras z charakterystykami
  rasa: Rasa[] = [];
  profesja: ProfesjaRoll[] = [];

  constructor(private rasyService: BohaterLogikaService, private share: SharedService) { }

  // pobranie wszystkich ras z serwisu
  ngOnInit() {
    this.rasyService.getRasy().subscribe(items => this.rasa = items);
  }

  // logika przyciusku do zmiany rasy
  nowaRasa() {
    this.share.changeRasa(this.selectedRasaId);
    // ukrycie i pokazanie elementów html
    this.submittedRasa = true;
    // pobranie listy możliwych profesji
    this.rasyService.getProfesje(this.selectedRasaId).subscribe(items => this.profesja = items);

  }




}
