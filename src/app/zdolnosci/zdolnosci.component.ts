import { Component, OnInit } from '@angular/core';
import { Zdolnosci } from '../bohater/service/zdolnosci';
import { BohaterLogikaService } from '../bohater/service/bohater-logika.service';

@Component({
  selector: 'app-zdolnosci',
  templateUrl: './zdolnosci.component.html',
  styleUrls: ['./zdolnosci.component.css']
})
export class ZdolnosciComponent implements OnInit {
  public zdolnosci: string[] = ['Artylerzysta', 'Bardzo silny', 'Bardzo szybki', 'Bijatyka', 'Błyskawiczne przeładowanie'
    , 'Błyskawiczny blok', 'Błyskotliwość', 'Brawura', 'Broń naturalna', 'Broń specjalna(dwuręczna)', 'Broń specjalna(kawaleryjska)',
    'Broń specjalna(mechaniczna)', 'Broń specjalna(palna)', 'Broń specjalna(parująca)', 'Broń specjalna(rzucana)',
    'Broń specjalna(szermiercza)', 'Broń specjalna(unieruchamiająca)', 'Broń specjalna(korbacz)', 'Broń specjalna(kusza)', 'Broń specjalna(łuk)', 'Broń specjalna(proca)', 'Bystry wzrok', 'Charyzmatyczny', 'Chirurgia',
    'Chodu!', 'Czarnoksięstwo', 'Człowiek-guma', 'Czuły słuch', 'Dotyk mocy', 'Etykieta', 'Geniusz arytmetyczny', 'Grotołaz', 'Groźny', 'Gusła', 'Intrygant', 'Krasnoludzki fach',
    'Krasomówstwo', 'Krzepki', 'Latanie', 'Lewitacja', 'Łotrzyk', 'Magia czarnoksięska', 'Magia kapłańska', 'Magia powrzechna',
    'Magia prosta', 'Magia prosta(gusła)', 'Magia prosta(tajemna)', 'Magia tajemna', 'Medytacja', 'Morderczy atak', 'Morderczy pocisk',
    'Naśladowca', 'Niepokojący', 'Nieustraszony', 'Niezwykle odporny', 'Obieżyświat', 'Oburęczność', 'Odporność na chaos',
    'Odporność na choroby', 'Odporność na magię', 'Odporność na trucizny', 'Odporność psychiczna', 'Odwaga', 'Ogłuszanie',
    'Opanowanie', 'Ożywieniec', 'Pancerz wiary', 'Poliglota', 'Przemawianie', 'Przerażający', 'Rozbrajanie', 'Silny cios',
    'Straszny', 'Strzał mierzony', 'Strzał precyzyjny', 'Strzał przebijający', 'Strzelec wyborowy', 'Szał bojowy', 'Szczęście',
    'Szósty zmysł', 'Szybki refleks', 'Szybkie wyciągnięcie', 'Talent artystyczny', 'Twardziel', 'Ulicznik',
    'Urodzony wojownik', 'Wędrowiec', 'Widzenie w ciemności', 'Woltyżerka', 'Wyczucie kierunku', 'Wykrywanie pułapek',
    'Wyostrzone zmysły', 'Zapasy', 'Zapiekła nienawiść', 'Zmysł magii', 'Żyłka handlowa'];
    selectedZdolnosciId: string = '';
  zdolnosc: Zdolnosci[];
  constructor(public db: BohaterLogikaService) { }

  ngOnInit(): void {
  }
  update(selectedZdolnosciId) {

    this.db.getZdolnosc(selectedZdolnosciId).subscribe(items => this.zdolnosc = items);
  }
}
