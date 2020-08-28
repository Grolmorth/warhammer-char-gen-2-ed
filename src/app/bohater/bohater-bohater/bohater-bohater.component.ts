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

  imieId: String;
  // przypisanie aktywnej rasy do pola typu string
  selectedRasaId: string;
  public data: string = this.selectedRasaId;
  // przypisanie aktywnej profesji do pola typu string
  selectedProfesjaId: string;
  public dataa: string = this.selectedProfesjaId;

  // przypisanie tablic ras z charakterystykami
  cechy: BohaterOgolne[];
  profesjaRoll: ProfesjaRoll[];
  umiejetnosciProfesji: BohaterOgolne;
  aktualne: BohaterOgolne;




  constructor(private logika: BohaterLogikaService, public share: SharedService) { }


  // pobranie wszystkich ras z serwisu
  ngOnInit() {
    this.logika.getListaRasy().subscribe(items => this.cechy = items);
    this.aktualne = this.share.poczatkoweStatystykiRasowe;


  }
  // logika przyciusku do zmiany imienia
  noweImie() {
    this.share.changeImie(this.imieId);
  }
  inneImie() {
    this.share.changeImie('');
  }

  // logika przyciusku do zmiany rasy
  nowaRasa() {
    console.log('zmieniono rase na', this.selectedRasaId);
    this.share.changeRasa(this.selectedRasaId);
    // pobranie listy możliwych profesji
    this.logika.getListaProfesje(this.selectedRasaId).subscribe(items => this.profesjaRoll = items);

  }
  innaRasa() {
    // ukrycie i pokazanie elementów html
    console.log('wycofano rase', this.selectedRasaId, 'ponowne wybieranie rasy');
    this.share.changeRasa(this.selectedRasaId);
    // wyzerowanie statystyk początkowych
    this.share.resetStatystyk();
    // zresetowanie listy profesji
    this.selectedRasaId = null;
    this.selectedProfesjaId = null;
    this.logika.getListaProfesje(this.selectedRasaId).subscribe(items => this.profesjaRoll = items);
    this.share.poczatkoweStatystykiRasowe.rasatitle = '';
    this.share.poczatkoweStatystykiRasowe.profesjatitle = '';

  }

  // logika przyciusku do zmiany profesji
  nowaProfesja() {
    console.log('nowa profesja', this.selectedProfesjaId);
    this.share.changeProfesja(this.selectedProfesjaId);
    this.share.changeAktualne();
    this.umiejetnosciProfesji = this.share.schematRozwojuProfesja;



  }
  innaProfesja() {
    this.share.resetStatystykProfesja();
    this.share.poczatkoweStatystykiRasowe.profesjatitle = '';
  }



}
