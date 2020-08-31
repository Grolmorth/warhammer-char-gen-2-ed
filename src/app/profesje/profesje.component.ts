import { BohaterOgolne } from './../bohater/service/bohaterOgolne';
import { Component, OnInit } from '@angular/core';
import { BohaterLogikaService } from '../bohater/service/bohater-logika.service';

@Component({
  selector: 'app-profesje',
  templateUrl: './profesje.component.html',
  styleUrls: ['./profesje.component.css']
})
export class ProfesjeComponent implements OnInit {
  selectedProfesjaId: string = '';
  profesja: BohaterOgolne[];
  public profesje: string[] = ['Akolita', 'Banita', 'Berserker z Norski', 'Chłop', 'Ciura obozowa', 'Cyrkowiec',
    'Cyrulik', 'Fanatyk', 'Flisak', 'Giermek', 'Gladiator', 'Goniec', 'Górnik', 'Guślarz',
    'Hiena cmentarna', 'Kanciarz', 'Kozak kislevski', 'Leśnik', 'Łowca', 'Łowca nagród',
    'Mieszczanin', 'Mytnik', 'Najemnik', 'Ochotnik', 'Ochroniarz', 'Oprych', 'Paź',
    'Podżegacz', 'Porywacz zwłok', 'Posłaniec', 'Przemytnik', 'Przepatrywacz', 'Przewoźnik',
    'Rybak', 'Rzecznik rodu', 'Rzemieślnik', 'Rzezimieszek', 'Skryba', 'Sługa', 'Strażnik', 'Strażnik dróg',
    'Strażnik pól', 'Strażnik więzienny', 'Szczurołap', 'Szermierz estalijski', 'Szlachcic',
    'Śmieciarz', 'Tarczownik', 'Uczeń czarodzieja', 'Węglarz', 'Włóczykij', 'Wojownik klanowy', 'Woźnica',
    'Zabójca trolli', 'Zarządca', 'Złodziej', 'Żak', 'Żeglarz', 'Żołnierz', 'Żołnierz okrętowy'];

  constructor(public db: BohaterLogikaService) { }

  ngOnInit(): void {
  }
  update(selectedProfesjaId) {

    this.db.getProfesja(selectedProfesjaId).subscribe(items => this.profesja = items);

  }
}
