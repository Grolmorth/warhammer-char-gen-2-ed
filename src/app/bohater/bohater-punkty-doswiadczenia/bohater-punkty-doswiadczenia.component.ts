import { Zdolnosci } from './../service/zdolnosci';
import { Umiejetnosci } from './../service/umiejetnosci';
import { BohaterOgolne } from './../service/bohaterOgolne';
import { Component, OnInit } from '@angular/core';
import { BohaterLogikaService } from '../service/bohater-logika.service';
import { SharedService } from '../service/shared.service';


@Component({
  selector: 'app-bohater-punkty-doswiadczenia',
  templateUrl: './bohater-punkty-doswiadczenia.component.html',
  styleUrls: ['./bohater-punkty-doswiadczenia.component.css']
})
export class BohaterPunktyDoswiadczeniaComponent implements OnInit {

  wykupioneCechy: BohaterOgolne;
  submittedButton = false;
  schematRozwoju: BohaterOgolne;
  cechyGlowne = true;
  cechyDrugorzedne = true;
  noweUmiejetnosci = true;
  noweZdolnosci = true;
  public umiejetnosciDoWykupienia: string[] = ['Brzuchomówstwo', 'Charakteryzacja', 'Czytanie i pisanie', 'Czytanie z warg', 'Dowodzenie', 'Gadanina', 'Hazard',
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
  selectedUmiejetnosciId: string;
  selectedZdolnosciId: string;
  public zdolnosciDoWykupienia: string[] = ['Artylerzysta', 'Bardzo silny', 'Bardzo szybki', 'Bijatyka', 'Błyskawiczne przeładowanie'
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
  umiejetnosciDoDodania: Umiejetnosci[];
  zdolnosciDoDodania: Zdolnosci[];

  constructor(public logika: BohaterLogikaService, public share: SharedService) { }



  ngOnInit(): void {
    this.schematRozwoju = this.share.schematRozwojuProfesja;
    this.wykupioneCechy = this.share.wykupionyRozwoj;
  }

  dodajDoswiadczenie() {
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie + 100;
  }
  // cechy główne
  zwiekszenieCechyGlownej() {
    this.submittedButton = true;
    this.cechyGlowne = false;
  }
  cofnijCechyGlowne() {
    this.cechyGlowne = true;
    this.submittedButton = false;
  }
  zwiekszenieWW() {
    this.share.wykupionyRozwoj.WW = this.share.wykupionyRozwoj.WW + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();

  }
  zwiekszenieUS() {
    this.share.wykupionyRozwoj.US = this.share.wykupionyRozwoj.US + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();
  }
  zwiekszenieK() {
    this.share.wykupionyRozwoj.K = this.share.wykupionyRozwoj.K + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();
  }
  zwiekszenieOdp() {
    this.share.wykupionyRozwoj.Odp = this.share.wykupionyRozwoj.Odp + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();
  }
  zwiekszenieZr() {
    this.share.wykupionyRozwoj.Zr = this.share.wykupionyRozwoj.Zr + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();
  }
  zwiekszenieInt() {
    this.share.wykupionyRozwoj.Int = this.share.wykupionyRozwoj.Int + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();
  }
  zwiekszenieSW() {
    this.share.wykupionyRozwoj.SW = this.share.wykupionyRozwoj.SW + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();
  }
  zwiekszenieOgd() {
    this.share.wykupionyRozwoj.Ogd = this.share.wykupionyRozwoj.Ogd + 5;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyGlowne();
  }
  // cechy drugorzedne

  zwiekszenieCechyDrugorzednej() {
    this.submittedButton = true;
    this.cechyDrugorzedne = false;
  }
  cofnijCechyDrugorzedne() {
    this.cechyDrugorzedne = true;
    this.submittedButton = false;
  }
  zwiekszenieA() {
    this.share.wykupionyRozwoj.A = this.share.wykupionyRozwoj.A + 1;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyDrugorzedne();
  }
  zwiekszenieZyw() {
    this.share.wykupionyRozwoj.Zyw = this.share.wykupionyRozwoj.Zyw + 1;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyDrugorzedne();
  }
  zwiekszenieSz() {
    this.share.wykupionyRozwoj.Sz = this.share.wykupionyRozwoj.Sz + 1;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyDrugorzedne();
  }
  zwiekszenieMag() {
    this.share.wykupionyRozwoj.Mag = this.share.wykupionyRozwoj.Mag + 1;
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.share.changeAktualne();
    this.cofnijCechyDrugorzedne();
  }
  // umiejętności
  wykupienieUmiejetnosci() {
    this.submittedButton = true;
    this.noweUmiejetnosci = false;
  }
  cofnijNoweUmiejetnosci() {
    this.noweUmiejetnosci = true;
    this.submittedButton = false;
    this.selectedUmiejetnosciId = null;
  }
  dodajUmiejetnosc(umiejetnosc) {
    this.logika.getUmiejetnosci(umiejetnosc).subscribe(items => this.umiejetnosciDoDodania = items);
    this.share.schematRozwojuProfesja.umiejetnosci.push(this.umiejetnosciDoDodania);
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.cofnijNoweUmiejetnosci();
  }
  // zdolności
  wykupienieZdolnosci() {
    this.submittedButton = true;
    this.noweZdolnosci = false;
  }
  cofnijNoweZdolnosci() {
    this.noweZdolnosci = true;
    this.submittedButton = false;
    this.selectedZdolnosciId = null;
  }
  dodajZdolnosc(zdolnosc) {
    this.logika.getZdolnosc(zdolnosc).subscribe(items => this.zdolnosciDoDodania = items);
    this.share.schematRozwojuProfesja.zdolnosci.push(this.zdolnosciDoDodania);
    this.share.zdolnosciDoCechyPoczatkowych(zdolnosc, false);
    this.share.schematRozwojuProfesja.doswiadczenie = this.share.schematRozwojuProfesja.doswiadczenie - 100;
    this.cofnijNoweZdolnosci();
  }
}
