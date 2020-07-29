import { Component, OnInit } from '@angular/core';

import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';
import { ProfesjaRoll } from '../service/profesjaRoll';
import { BohaterOgolne } from '../service/bohaterOgolne';



@Component({
  selector: 'app-bohater-bohater',
  templateUrl: './bohater-bohater.component.html',
  styleUrls: ['./bohater-bohater.component.css']
})
export class BohaterBohaterComponent implements OnInit {

  submittedRasa = false;
  submittedProfesja = false;
  // przypisanie aktywnej rasy do pola typu string
  selectedRasaId: string;
  public data: string = this.selectedRasaId;
  // przypisanie aktywnej profesji do pola typu string
  selectedProfesjaId: string;
  public dataa: string = this.selectedProfesjaId;

  // przypisanie tablic ras z charakterystykami
  cechy: BohaterOgolne[] = [];
  profesjaRoll: ProfesjaRoll[] = [];

  constructor(private logika: BohaterLogikaService, private share: SharedService) { }

  // pobranie wszystkich ras z serwisu
  ngOnInit() {
    this.logika.getListaRasy().subscribe(items => this.cechy = items);
    console.log('pobrano rasy');
  }

  // logika przyciusku do zmiany rasy
  nowaRasa() {
    this.share.changeRasa(this.selectedRasaId);
    console.log('zmieniono rase na', this.selectedRasaId);
    // ukrycie i pokazanie elementów html
    this.submittedRasa = true;
    // pobranie listy możliwych profesji
    this.logika.getListaProfesje(this.selectedRasaId).subscribe(items => this.profesjaRoll = items);
    console.log('dostępne profesje z rasy:', this.selectedRasaId);

  }
  innaRasa() {
    // ukrycie i pokazanie elementów html
    this.submittedRasa = false;
    console.log('wycofano rase', this.selectedRasaId, 'ponowne wybieranie rasy');
    this.share.changeRasa(this.selectedRasaId);
    // wyzerowanie statystyk początkowych
    this.share.resetStatystyk();
    // zresetowanie listy profesji
    this.selectedRasaId = null;
    this.selectedProfesjaId = null;
    this.logika.getListaProfesje(this.selectedRasaId).subscribe(items => this.profesjaRoll = items);
    this.submittedProfesja = false;

  }

  // logika przyciusku do zmiany profesji
  nowaProfesja() {
    console.log('nowa profesja', this.selectedProfesjaId);
    this.share.changeProfesja(this.selectedProfesjaId);
    this.submittedProfesja = true;
    this.share.changeAktualne();

  }
  innaProfesja() {
    this.submittedProfesja = false;
    this.share.resetStatystykProfesja();

  }



}
