import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BohaterLogikaService } from '../bohater/service/bohater-logika.service';
import { Umiejetnosci } from '../bohater/service/umiejetnosci';

@Component({
  selector: 'app-umiejetnosci',
  templateUrl: './umiejetnosci.component.html',
  styleUrls: ['./umiejetnosci.component.css']
})
export class UmiejetnosciComponent implements OnInit {
  public umiejetnosci: string[] = ['Brzuchomówstwo', 'Charakteryzacja', 'Czytanie i pisanie', 'Czytanie z warg', 'Dowodzenie', 'Gadanina', 'Hazard',
    'Hipnoza', 'Jeździectwo', 'Język tajemny(magiczny)', 'Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)',
    'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)',
    'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)',
    'Kuglarstwo(żonglerka)', 'Leczenie', 'Mocna głowa', 'Nauka(alchemia)', 'Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(demonologia)',
    'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)',
    'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)', 'Nawigacja',
    'Opieka nad zwierzętami', 'Oswajanie', 'Otwieranie zamków', 'Plotkowanie', 'Pływanie', 'Powożenie', 'Przekonywanie',
    'Przeszukiwanie', 'Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)',
    'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)',
    'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)',
    'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)',
    'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)',
    'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)',
    'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)', 'Sekretne znaki(łowców)', 'Sekretne znaki(rycerzy zakonnych)',
    'Sekretne znaki(złodziei)', 'Sekretne znaki(zwiadowców)', 'Sekretny język(bitewny)', 'Sekretny język(gildii)',
    'Sekretny język(łowców)', 'Sekretny język(złodziejski)', 'Skradanie się', 'Splatanie magii', 'Spostrzegawczość', 'Sztuka przetrwania',
    'Śledzenie', 'Targowanie', 'Torturowanie', 'Tresura', 'Tropienie', 'Ukrywanie się', 'Unik', 'Warzenie trucizn',
    'Wiedza(bretonia)', 'Wiedza(estalia)', 'Wiedza(imperium)', 'Wiedza(jałowa kraina)', 'Wiedza(kislev)',
    'Wiedza(księstwa graniczne)', 'Wiedza(norska)', 'Wiedza(tilea)', 'Wiedza(elfy)', 'Wiedza(krasnoludy)',
    'Wiedza(niziołki)', 'Wiedza(ogry)', 'Wioślarstwo', 'Wspinaczka', 'Wycena', 'Wykrywanie magii',
    'Zastawianie pułapek', 'Zastraszanie', 'Znajomość języka(bretoński)', 'Znajomość języka(eltharin)',
    'Znajomość języka(estalijski)', 'Znajomość języka(khazalid)', 'Znajomość języka(kislevski)', 'Znajomość języka(norski)',
    'Znajomość języka(tileański)', 'Znajomość języka(klasyczny)', 'Znajomość języka(staroświatowy)',
    'Znajomość języka(niziołków)', 'Zwinne palce', 'Żeglarstwo'];
  selectedUmiejetnosciId: string = '';
  umiejetnosc: Umiejetnosci[];
  constructor(public db: BohaterLogikaService) { }

  ngOnInit(): void {
  }
  update(selectedUmiejetnosciId) {

    this.db.getUmiejetnosci(selectedUmiejetnosciId).subscribe(items => this.umiejetnosc = items);
  }

}
