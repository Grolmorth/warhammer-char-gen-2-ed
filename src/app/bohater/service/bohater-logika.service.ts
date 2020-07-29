import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { ProfesjaRoll } from './profesjaRoll';
import { BohaterOgolne } from './bohaterOgolne';
import { Umiejetnosci } from './umiejetnosci';


@Injectable({
  providedIn: 'root'
})
export class BohaterLogikaService {

  constructor() { }

  // pobranie listy ras
  getListaRasy(): Observable<BohaterOgolne[]> {
    const items = getMockRasy();
    return of(items);
  }
  // pobieranie listy profesji dla wybranej rasy
  getListaProfesje(rasa): Observable<ProfesjaRoll[]> {
    if (rasa === 'Człowiek') {
      const items = getMockProfesjeCzlowiek();
      return of(items);
    } else if (rasa === 'Krasnolud') {
      const items = getMockProfesjeKrasnolud();
      return of(items);
    } else if (rasa === 'Elf') {
      const items = getMockProfesjeElf();
      return of(items);
    } else if (rasa === 'Niziołek') {
      const items = getMockProfesjeNiziolek();
      return of(items);
    }
    else {
      const items = null;
      return of(items);

    }
  }
  getProfesja(profesja: string): Observable<BohaterOgolne[]> {
    if (profesja === 'Akolita') {
      const items = getAkolita();
      return of(items);
    }
    else if (profesja === 'Banita') {
      const items = getBanita();
      return of(items);
    }
    else if (profesja === 'Berserker z Norski') {
      const items = getberserkerZNorski();
      return of(items);
    }
    else if (profesja === 'Chłop') {
      const items = getChlop();
      return of(items);
    }
    else if (profesja === 'Ciura obozowa') {
      const items = getCiuraObozowa();
      return of(items);
    }
    else if (profesja === 'Cyrkowiec') {
      const items = getCyrkowiec();
      return of(items);
    }
    else if (profesja === 'Cyrulik') {
      const items = getCyrulik();
      return of(items);
    }
    else if (profesja === 'Fanatyk') {
      const items = getFanatyk();
      return of(items);
    }
    else if (profesja === 'Flisak') {
      const items = getFlisak();
      return of(items);
    }
    else if (profesja === 'Giermek') {
      const items = getGiermek();
      return of(items);
    }
    else if (profesja === 'Gladiator') {
      const items = getGladiator();
      return of(items);
    }
    else if (profesja === 'Goniec') {
      const items = getGoniec();
      return of(items);
    }
    else if (profesja === 'Górnik') {
      const items = getGornik();
      return of(items);
    }
    else if (profesja === 'Guślarz') {
      const items = getGuslarz();
      return of(items);
    }
    else if (profesja === 'Hiena cmentarna') {
      const items = getHienaCmentarna();
      return of(items);
    }
    else if (profesja === 'Kanciarz') {
      const items = getKanciarz();
      return of(items);
    }
    else if (profesja === 'Kozak kislevski') {
      const items = getKozakKislevski();
      return of(items);
    }
    else if (profesja === 'Leśnik') {
      const items = getLesnik();
      return of(items);
    }
    else if (profesja === 'Łowca') {
      const items = getLowca();
      return of(items);
    }
    else if (profesja === 'Łowca nagród') {
      const items = getLowcaNagrod();
      return of(items);
    }
    else if (profesja === 'Mieszczanin') {
      const items = getMieszczanin();
      return of(items);
    }
    else if (profesja === 'Mytnik') {
      const items = getMytnik();
      return of(items);
    }
    else if (profesja === 'Najemnik') {
      const items = getNajemnik();
      return of(items);
    }
    else if (profesja === 'Ochotnik') {
      const items = getOchotnik();
      return of(items);
    }
    else if (profesja === 'Ochroniarz') {
      const items = getOchroniarz();
      return of(items);
    }
    else if (profesja === 'Oprych') {
      const items = getOprych();
      return of(items);
    }
    else if (profesja === 'Paź') {
      const items = getPaz();
      return of(items);
    }
    else if (profesja === 'Podżegacz') {
      const items = getPodzegacz();
      return of(items);
    }
    else if (profesja === 'Porywacz Zwłok') {
      const items = getPorywaczZwlok();
      return of(items);
    }
    else if (profesja === 'Posłaniec') {
      const items = getPoslaniec();
      return of(items);
    }
    else if (profesja === 'Przemytnik') {
      const items = getPrzemytnik();
      return of(items);
    }
    else if (profesja === 'Przepatrywacz') {
      const items = getPrzepatrywacz();
      return of(items);
    }
    else if (profesja === 'Przewoźnik') {
      const items = getPrzewoznik();
      return of(items);
    }
    else if (profesja === 'Rybak') {
      const items = getRybak();
      return of(items);
    }
    else if (profesja === 'Rzecznik rodu') {
      const items = getRzecznikRodu();
      return of(items);
    }
    else if (profesja === 'Rzemieślnik') {
      const items = getRzemieslnik();
      return of(items);
    }
    else if (profesja === 'Rzezimieszek') {
      const items = getRzezimieszek();
      return of(items);
    }
    else if (profesja === 'Skryba') {
      const items = getSkryba();
      return of(items);
    }
    else if (profesja === 'Sługa') {
      const items = getSluga();
      return of(items);
    }
    else if (profesja === 'Strażnik') {
      const items = getStraznik();
      return of(items);
    }
    else if (profesja === 'Strażnik dróg') {
      const items = getStraznikDrog();
      return of(items);
    }
    else if (profesja === 'Strażnik pól') {
      const items = getStraznikPol();
      return of(items);
    }
    else if (profesja === 'Strażnik więzienny') {
      const items = getStraznikWiezienny();
      return of(items);
    }
    else if (profesja === 'Szczurołap') {
      const items = getSzczurolap();
      return of(items);
    }
    else if (profesja === 'Szermierz estalijski') {
      const items = getSzermierzEstalijski();
      return of(items);
    }
    else if (profesja === 'Szlachcic') {
      const items = GetSzlachcic();
      return of(items);
    }
    else if (profesja === 'Śmieciarz') {
      const items = getSmieciarz();
      return of(items);
    }
    else if (profesja === 'Tarczownik') {
      const items = getTarczownik();
      return of(items);
    }
    else if (profesja === 'Uczeń czarodzieja') {
      const items = getUczenCzarodzieja();
      return of(items);
    }
    else if (profesja === 'Węglarz') {
      const items = getWeglarz();
      return of(items);
    }
    else if (profesja === 'Włóczykij') {
      const items = getWloczykij();
      return of(items);
    }
    else if (profesja === 'Wojownik klanowy') {
      const items = getWojownikKlanowy();
      return of(items);
    }
    else if (profesja === 'Woźnica') {
      const items = getWoznica();
      return of(items);
    }
    else if (profesja === 'Zabójca trolli') {
      const items = getZabojcaTrolli();
      return of(items);
    }
    else if (profesja === 'Zarządca') {
      const items = getZarzadca();
      return of(items);
    }
    else if (profesja === 'Złodziej') {
      const items = getZlodziej();
      return of(items);
    }
    else if (profesja === 'Żak') {
      const items = getZak();
      return of(items);
    }
    else if (profesja === 'Żeglarz') {
      const items = getZeglarz();
      return of(items);
    }
    else if (profesja === 'Żołnierz') {
      const items = getZolnierz();
      return of(items);
    }
    else if (profesja === 'Żołnierz okrętowy') {
      const items = getZolnierzOkretowy();
      return of(items);
    }
  }
  getUmiejetnosci(umiejetnosc: string): Observable<Umiejetnosci[]> {
    if (umiejetnosc === 'Brzuchomówstwo') {
      const items = getBrzuchomowstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Charakteryzacja') {
      const items = getCharakteryzacja();
      return of(items);
    }
    else if (umiejetnosc === 'Czytanie i pisanie') {
      const items = getCzytanieiPisanie();
      return of(items);
    }
    else if (umiejetnosc === 'Czytanie z warg') {
      const items = getCzytaniezWarg();
      return of(items);
    }
    else if (umiejetnosc === 'Dowodzenie') {
      const items = getDowodzenie();
      return of(items);
    }
    else if (umiejetnosc === 'Gadanina') {
      const items = getGadanina();
      return of(items);
    }
    else if (umiejetnosc === 'Hazard') {
      const items = getHazard();
      return of(items);
    }
    else if (umiejetnosc === 'Hipnoza') {
      const items = getHipnoza();
      return of(items);
    }
    else if (umiejetnosc === 'Jeździectwo') {
      const items = getJezdziectwo();
      return of(items);
    }
    else if (umiejetnosc === 'Język tajemny') {
      const items = getJezykTajemny();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo') {
      const items = getKuglarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Leczenie') {
      const items = getLeczenie();
      return of(items);
    }
    else if (umiejetnosc === 'Mocna głowa') {
      const items = getMocnaGlowa();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka') {
      const items = getNauka();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(astronomia)') {
      const items = getNaukaAstronomia();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(historia)') {
      const items = getNaukaHistoria();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(teologia)') {
      const items = getNaukaTeologia();
      return of(items);
    }
    else if (umiejetnosc === 'Nawigacja') {
      const items = getNawigacja();
      return of(items);
    }
    else if (umiejetnosc === 'Opieka nad zwierzętami') {
      const items = getOpiekaNadZwierzetami();
      return of(items);
    }
    else if (umiejetnosc === 'Oswajanie') {
      const items = getOswajanie();
      return of(items);
    }
    else if (umiejetnosc === 'Otwieranie zamków') {
      const items = getOtwieranieZamkow();
      return of(items);
    }
    else if (umiejetnosc === 'Plotkowanie') {
      const items = getPlotkowanie();
      return of(items);
    }
    else if (umiejetnosc === 'Pływanie') {
      const items = getPlywanie();
      return of(items);
    }
    else if (umiejetnosc === 'Powożenie') {
      const items = getPowozenie();
      return of(items);
    }
    else if (umiejetnosc === 'Przekonywanie') {
      const items = getPrzekonywanie();
      return of(items);
    }
    else if (umiejetnosc === 'Przeszukiwanie') {
      const items = getPrzeszukiwanie();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło') {
      const items = getRzemioslo();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretne znaki') {
      const items = getSekretneZnaki();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretny język') {
      const items = getSekretnyJezyk();
      return of(items);
    }
    else if (umiejetnosc === 'Skradanie się') {
      const items = getSkradanieSie();
      return of(items);
    }
    else if (umiejetnosc === 'Splatanie magii') {
      const items = getSplatanieMagii();
      return of(items);
    }
    else if (umiejetnosc === 'Spostrzegawczość') {
      const items = getSpostrzegawczosc();
      return of(items);
    }
    else if (umiejetnosc === 'Sztuka przetrwania') {
      const items = getSztukaPrzetrwania();
      return of(items);
    }
    else if (umiejetnosc === 'Śledzenie') {
      const items = getSledzenie();
      return of(items);
    }
    else if (umiejetnosc === 'Targowanie') {
      const items = getTargowanie();
      return of(items);
    }
    else if (umiejetnosc === 'Torturowanie') {
      const items = getTorturowanie();
      return of(items);
    }
    else if (umiejetnosc === 'Tresura') {
      const items = getTresura();
      return of(items);
    }
    else if (umiejetnosc === 'Tropienie') {
      const items = getTropienie();
      return of(items);
    }
    else if (umiejetnosc === 'Ukrywanie się') {
      const items = getUkrywanieSie();
      return of(items);
    }
    else if (umiejetnosc === 'Unik') {
      const items = getUnik();
      return of(items);
    }
    else if (umiejetnosc === 'Warzenie trucizn') {
      const items = getWarzenieTrucizn();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(Imperium)') {
      const items = getWiedzaImperium();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(Elfy)') {
      const items = getWiedzaElfy();
      return of(items);
    }
    else if (umiejetnosc === 'Wioślarstwo') {
      const items = getWioślarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Wspinaczka') {
      const items = getWspinaczka();
      return of(items);
    }
    else if (umiejetnosc === 'Wycena') {
      const items = getWycena();
      return of(items);
    }
    else if (umiejetnosc === 'Wykrywanie magii') {
      const items = getWykrywanieMagii();
      return of(items);
    }
    else if (umiejetnosc === 'Zastawianie pułapek') {
      const items = getZastawaniePulapek();
      return of(items);
    }
    else if (umiejetnosc === 'Zastraszanie') {
      const items = getZastraszanie();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(staroświatowy)') {
      const items = getZnajomoscJezykaStaroswiatowy();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(klasyczny)') {
      const items = getZnajomoscJezykaKlasyczny();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(eltharin)') {
      const items = getZnajomoscjezykaEltharin();
      return of(items);
    }

    else if (umiejetnosc === 'Zwinne palce') {
      const items = getZwinnePalce();
      return of(items);
    }
    else if (umiejetnosc === 'Żeglarstwo') {
      const items = getZeglarstwo();
      return of(items);
    }
  }

}

// rasy
function getMockRasy() {
  return [
    { rasatitle: 'Człowiek', WW: 20, US: 20, K: 20, Odp: 20, Zr: 20, Int: 20, SW: 20, Ogd: 20, Sz: 4, umiejetnosci: ['Plotkowanie', 'Wiedza(Imperium)', 'Znajomość języka(staroświatowy)'] },
    { rasatitle: 'Krasnolud', WW: 30, US: 20, K: 20, Odp: 30, Zr: 10, Int: 20, SW: 20, Ogd: 10, Sz: 3, umiejetnosci: ['Znajomość języka(staroświatowy)'] },
    { rasatitle: 'Elf', WW: 20, US: 30, K: 20, Odp: 20, Zr: 30, Int: 20, SW: 20, Ogd: 20, Sz: 5, umiejetnosci: ['Wiedza(Elfy)', 'Znajomość języka(eltharin)', 'Znajomość języka(staroświatowy)'] },
    { rasatitle: 'Niziołek', WW: 10, US: 30, K: 10, Odp: 10, Zr: 30, Int: 20, SW: 20, Ogd: 30, Sz: 4, umiejetnosci: ['Plotkowanie', 'Znajomość języka(staroświatowy)'] }
  ];
}
function getMockProfesjeCzlowiek() {
  return [
    { profesjatitle: 'Akolita', rollmin: 1, rollmax: 2 },
    { profesjatitle: 'Banita', rollmin: 3, rollmax: 4 },
    { profesjatitle: 'Berserker z Norski', rollmin: 5, rollmax: 5 },
    { profesjatitle: 'Chłop', rollmin: 6, rollmax: 7 },
    { profesjatitle: 'Ciura obozowa', rollmin: 8, rollmax: 9 },
    { profesjatitle: 'Cyrkowiec', rollmin: 10, rollmax: 11 },
    { profesjatitle: 'Cyrulik', rollmin: 12, rollmax: 12 },
    { profesjatitle: 'Fanatyk', rollmin: 13, rollmax: 14 },
    { profesjatitle: 'Flisak', rollmin: 15, rollmax: 16 },
    { profesjatitle: 'Giermek', rollmin: 17, rollmax: 18 },
    { profesjatitle: 'Gladiator', rollmin: 19, rollmax: 20 },
    { profesjatitle: 'Górnik', rollmin: 21, rollmax: 22 },
    { profesjatitle: 'Guślarz', rollmin: 23, rollmax: 23 },
    { profesjatitle: 'Hiena cmentarna', rollmin: 24, rollmax: 25 },
    { profesjatitle: 'Kanciarz', rollmin: 26, rollmax: 27 },
    { profesjatitle: 'Kozak kislevski', rollmin: 28, rollmax: 28 },
    { profesjatitle: 'Leśnik', rollmin: 29, rollmax: 30 },
    { profesjatitle: 'Łowca', rollmin: 31, rollmax: 32 },
    { profesjatitle: 'Łowca nagród', rollmin: 33, rollmax: 34 },
    { profesjatitle: 'Mieszczanin', rollmin: 35, rollmax: 36 },
    { profesjatitle: 'Mytnik', rollmin: 37, rollmax: 38 },
    { profesjatitle: 'Najemnik', rollmin: 39, rollmax: 40 },
    { profesjatitle: 'Ochotnik', rollmin: 41, rollmax: 42 },
    { profesjatitle: 'Ochroniarz', rollmin: 43, rollmax: 44 },
    { profesjatitle: 'Oprych', rollmin: 45, rollmax: 46 },
    { profesjatitle: 'Paź', rollmin: 47, rollmax: 48 },
    { profesjatitle: 'Podżegacz', rollmin: 49, rollmax: 50 },
    { profesjatitle: 'Porywacz zwłok', rollmin: 51, rollmax: 52 },
    { profesjatitle: 'Posłaniec', rollmin: 53, rollmax: 54 },
    { profesjatitle: 'Przemytnik', rollmin: 55, rollmax: 56 },
    { profesjatitle: 'Przepatrywacz', rollmin: 57, rollmax: 58 },
    { profesjatitle: 'Przewoźnik', rollmin: 59, rollmax: 59 },
    { profesjatitle: 'Rybak', rollmin: 60, rollmax: 61 },
    { profesjatitle: 'Rzemieślnik', rollmin: 62, rollmax: 63 },
    { profesjatitle: 'Rzezimieszek', rollmin: 64, rollmax: 65 },
    { profesjatitle: 'Skryba', rollmin: 66, rollmax: 67 },
    { profesjatitle: 'Sługa', rollmin: 68, rollmax: 69 },
    { profesjatitle: 'Strażnik', rollmin: 70, rollmax: 71 },
    { profesjatitle: 'Strażnik dróg', rollmin: 72, rollmax: 73 },
    { profesjatitle: 'Strażnik więzienny', rollmin: 74, rollmax: 74 },
    { profesjatitle: 'Szczurołap', rollmin: 75, rollmax: 76 },
    { profesjatitle: 'Szermierz estalijski', rollmin: 77, rollmax: 77 },
    { profesjatitle: 'Szlachcic', rollmin: 78, rollmax: 79 },
    { profesjatitle: 'Śmieciarz', rollmin: 80, rollmax: 81 },
    { profesjatitle: 'Uczeń czarodzieja', rollmin: 82, rollmax: 83 },
    { profesjatitle: 'Węglarz', rollmin: 84, rollmax: 85 },
    { profesjatitle: 'Włóczykij', rollmin: 86, rollmax: 87 },
    { profesjatitle: 'Woźnica', rollmin: 88, rollmax: 89 },
    { profesjatitle: 'Zarządca', rollmin: 90, rollmax: 90 },
    { profesjatitle: 'Złodziej', rollmin: 91, rollmax: 92 },
    { profesjatitle: 'Żak', rollmin: 93, rollmax: 94 },
    { profesjatitle: 'Żeglarz', rollmin: 95, rollmax: 96 },
    { profesjatitle: 'Żołnierz', rollmin: 97, rollmax: 98 },
    { profesjatitle: 'Żołnierz okrętowy', rollmin: 99, rollmax: 100 }
  ];
}
function getMockProfesjeKrasnolud() {
  return [
    { profesjatitle: 'Banita', rollmin: 1, rollmax: 3 },
    { profesjatitle: 'Cyrkowiec', rollmin: 4, rollmax: 6 },
    { profesjatitle: 'Gladiator', rollmin: 7, rollmax: 11 },
    { profesjatitle: 'Goniec', rollmin: 12, rollmax: 16 },
    { profesjatitle: 'Górnik', rollmin: 17, rollmax: 22 },
    { profesjatitle: 'Hiena cmentarna', rollmin: 23, rollmax: 25 },
    { profesjatitle: 'Łowca', rollmin: 26, rollmax: 29 },
    { profesjatitle: 'Mieszczanin', rollmin: 30, rollmax: 33 },
    { profesjatitle: 'Mytnik', rollmin: 34, rollmax: 36 },
    { profesjatitle: 'Najemnik', rollmin: 37, rollmax: 42 },
    { profesjatitle: 'Ochotnik', rollmin: 43, rollmax: 46 },
    { profesjatitle: 'Ochroniarz', rollmin: 47, rollmax: 50 },
    { profesjatitle: 'Podżegacz', rollmin: 51, rollmax: 52 },
    { profesjatitle: 'Przemytnik', rollmin: 53, rollmax: 55 },
    { profesjatitle: 'Rzemieślnik', rollmin: 56, rollmax: 59 },
    { profesjatitle: 'Rzezimieszek', rollmin: 60, rollmax: 63 },
    { profesjatitle: 'Skryba', rollmin: 64, rollmax: 65 },
    { profesjatitle: 'Sługa', rollmin: 66, rollmax: 67 },
    { profesjatitle: 'Strażnik', rollmin: 68, rollmax: 69 },
    { profesjatitle: 'Strażnik więzienny', rollmin: 70, rollmax: 73 },
    { profesjatitle: 'Szczurołap', rollmin: 74, rollmax: 77 },
    { profesjatitle: 'Szlachcic', rollmin: 78, rollmax: 79 },
    { profesjatitle: 'Tarczownik', rollmin: 80, rollmax: 83 },
    { profesjatitle: 'Woźnica', rollmin: 84, rollmax: 85 },
    { profesjatitle: 'Zabójca troli', rollmin: 86, rollmax: 89 },
    { profesjatitle: 'Złodziej', rollmin: 90, rollmax: 92 },
    { profesjatitle: 'Żak', rollmin: 93, rollmax: 94 },
    { profesjatitle: 'Żeglarz', rollmin: 95, rollmax: 95 },
    { profesjatitle: 'Żołnierz', rollmin: 96, rollmax: 99 },
    { profesjatitle: 'Żołnierz okrętowy', rollmin: 100, rollmax: 100 }
  ];
}
function getMockProfesjeElf() {
  return [
    { profesjatitle: 'Banita', rollmin: 1, rollmax: 5 },
    { profesjatitle: 'Cyrkowiec', rollmin: 6, rollmax: 10 },
    { profesjatitle: 'Kanciarz', rollmin: 11, rollmax: 16 },
    { profesjatitle: 'Łowca', rollmin: 17, rollmax: 24 },
    { profesjatitle: 'Najemnik', rollmin: 25, rollmax: 29 },
    { profesjatitle: 'Paź', rollmin: 30, rollmax: 31 },
    { profesjatitle: 'Posłaniec', rollmin: 32, rollmax: 37 },
    { profesjatitle: 'Przepatrywacz', rollmin: 38, rollmax: 43 },
    { profesjatitle: 'Rzecznik rodu', rollmin: 44, rollmax: 50 },
    { profesjatitle: 'Rzemieślnik', rollmin: 51, rollmax: 57 },
    { profesjatitle: 'Skryba', rollmin: 58, rollmax: 63 },
    { profesjatitle: 'Uczeń czarodzieja', rollmin: 64, rollmax: 70 },
    { profesjatitle: 'Włóczykij', rollmin: 71, rollmax: 77 },
    { profesjatitle: 'Wojownik klanowy', rollmin: 78, rollmax: 84 },
    { profesjatitle: 'Złodziej', rollmin: 85, rollmax: 90 },
    { profesjatitle: 'Żak', rollmin: 91, rollmax: 95 },
    { profesjatitle: 'Żeglarz', rollmin: 96, rollmax: 100 },
  ];
}
function getMockProfesjeNiziolek() {
  return [
    { profesjatitle: 'Banita', rollmin: 1, rollmax: 3 },
    { profesjatitle: 'Ciura obozowa', rollmin: 4, rollmax: 5 },
    { profesjatitle: 'Cyrkowiec', rollmin: 6, rollmax: 8 },
    { profesjatitle: 'Cyrulik', rollmin: 9, rollmax: 9 },
    { profesjatitle: 'Hiena cmentarna', rollmin: 10, rollmax: 14 },
    { profesjatitle: 'Kanciarz', rollmin: 15, rollmax: 20 },
    { profesjatitle: 'Łowca', rollmin: 21, rollmax: 25 },
    { profesjatitle: 'Łowca nagród', rollmin: 26, rollmax: 27 },
    { profesjatitle: 'Mieszczanin', rollmin: 28, rollmax: 29 },
    { profesjatitle: 'Mytnik', rollmin: 30, rollmax: 31 },
    { profesjatitle: 'Najemnik', rollmin: 32, rollmax: 35 },
    { profesjatitle: 'Ochotnik', rollmin: 36, rollmax: 40 },
    { profesjatitle: 'Paź', rollmin: 41, rollmax: 42 },
    { profesjatitle: 'Podżegacz', rollmin: 43, rollmax: 45 },
    { profesjatitle: 'Porywacz zwłok', rollmin: 46, rollmax: 48 },
    { profesjatitle: 'Posłaniec', rollmin: 49, rollmax: 53 },
    { profesjatitle: 'Przemytnik', rollmin: 54, rollmax: 56 },
    { profesjatitle: 'Przewoźnik', rollmin: 57, rollmax: 57 },
    { profesjatitle: 'Rybak', rollmin: 58, rollmax: 58 },
    { profesjatitle: 'Rzemieślnik', rollmin: 59, rollmax: 63 },
    { profesjatitle: 'Sługa', rollmin: 64, rollmax: 68 },
    { profesjatitle: 'Strażnik', rollmin: 69, rollmax: 72 },
    { profesjatitle: 'Strażnik dróg', rollmin: 73, rollmax: 74 },
    { profesjatitle: 'Strażnik pól', rollmin: 75, rollmax: 78 },
    { profesjatitle: 'Szczurołap', rollmin: 79, rollmax: 82 },
    { profesjatitle: 'Śmieciarz', rollmin: 83, rollmax: 83 },
    { profesjatitle: 'Węglarz', rollmin: 84, rollmax: 86 },
    { profesjatitle: 'Włóczykij', rollmin: 87, rollmax: 90 },
    { profesjatitle: 'Złodziej', rollmin: 91, rollmax: 96 },
    { profesjatitle: 'Żak', rollmin: 97, rollmax: 98 },
    { profesjatitle: 'Żołnierz', rollmin: 99, rollmax: 100 },
  ];
}
// profesje

function getAkolita() {
  return [
    {
      title: 'Akolita',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 5,
      Zr: 0,
      Int: 10,
      SW: 10,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
      umiejetnosci: ['Czytanie i pisanie',
        'Leczenie',
        'Nauka(teologia)',
        'Przekonywanie',
        'Spostrzegawczość',
        'Znajomość języka(klasyczny)',
        'Znajomość języka(staroświatowy)'
      ],
      wyborUmiejetnosciProfesji: [['Nauka(astronomia)', 'Nauka(historia)'], ['Przekonywanie',
        'Leczenie']],

      zdolnosci: [
        'bardzo silny albo szybki refleks', 'charyzmatyczny albo urodzony wojownik', 'przemawianie'
      ],
      wyposazenie: [
        'szaty kapłańskie', 'symbol boga'
      ]


    }
  ];
}
function getBanita() {
  return [
    {
      title: 'Banita',
      opis: 'blelbe',
      WW: 10,
      US: 10,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 5,
      SW: 0,
      Ogd: 0,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getberserkerZNorski() {
  return [
    {
      title: 'Berserker z Norski',
      opis: 'blelbe',
      WW: 15,
      US: 0,
      K: 10,
      Odp: 10,
      Zr: 0,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getChlop() {
  return [
    {
      title: 'Chłop',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 5,
      Odp: 10,
      Zr: 5,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getCiuraObozowa() {
  return [
    {
      title: 'Ciura Obozowa',
      opis: 'blelbe',
      WW: 0,
      US: 0,
      K: 0,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getCyrkowiec() {
  return [
    {
      title: 'Cyrkowiec',
      opis: 'blelbe',
      WW: 5,
      US: 10,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 0,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getCyrulik() {
  return [
    {
      title: 'Cyrulik',
      opis: 'blelbe',
      WW: 5,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 10,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getFanatyk() {
  return [
    {
      title: 'Fanatyk',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 5,
      Odp: 10,
      Zr: 0,
      Int: 0,
      SW: 10,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getFlisak() {
  return [
    {
      title: 'Flisak',
      opis: 'blelbe',
      WW: 10,
      US: 5,
      K: 5,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 0,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getGiermek() {
  return [
    {
      title: 'Giermek',
      opis: 'blelbe',
      WW: 10,
      US: 5,
      K: 5,
      Odp: 5,
      Zr: 5,
      Int: 0,
      SW: 0,
      Ogd: 5,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getGladiator() {
  return [
    {
      title: 'Gladiator',
      opis: 'blelbe',
      WW: 15,
      US: 0,
      K: 0,
      Odp: 10,
      Zr: 10,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getGoniec() {
  return [
    {
      title: 'Goniec',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 1,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getGornik() {
  return [
    {
      title: 'Górnik',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 10,
      Odp: 5,
      Zr: 0,
      Int: 5,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getGuslarz() {
  return [
    {
      title: 'Guślarz',
      opis: 'blelbe',
      WW: 0,
      US: 0,
      K: 0,
      Odp: 5,
      Zr: 5,
      Int: 5,
      SW: 10,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 1,
      PO: 0,
      PP: 0,
    }
  ];
}
function getHienaCmentarna() {
  return [
    {
      title: 'Hiena Cmentarna',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 10,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getKanciarz() {
  return [
    {
      title: 'Kanciarz',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 5,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getKozakKislevski() {
  return [
    {
      title: 'Koza kislevski',
      opis: 'blelbe',
      WW: 10,
      US: 10,
      K: 0,
      Odp: 10,
      Zr: 0,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getLesnik() {
  return [
    {
      title: 'Leśnik',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 10,
      Odp: 0,
      Zr: 5,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 3,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getLowca() {
  return [
    {
      title: 'Łowca',
      opis: 'blelbe',
      WW: 0,
      US: 15,
      K: 0,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 0,
      Ogd: 0,
      A: 0,
      Zyw: 3,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getLowcaNagrod() {
  return [
    {
      title: 'Łowca Nagród',
      opis: 'blelbe',
      WW: 5,
      US: 10,
      K: 5,
      Odp: 0,
      Zr: 10,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getMieszczanin() {
  return [
    {
      title: 'Mieszczanin',
      opis: 'blelbe',
      WW: 5,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 5,
      Int: 10,
      SW: 5,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getMytnik() {
  return [
    {
      title: 'Mytnik',
      opis: 'blelbe',
      WW: 10,
      US: 5,
      K: 5,
      Odp: 10,
      Zr: 5,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getNajemnik() {
  return [
    {
      title: 'Najemnik',
      opis: 'blelbe',
      WW: 10,
      US: 10,
      K: 5,
      Odp: 5,
      Zr: 5,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getOchotnik() {
  return [
    {
      title: 'Ochotnik',
      opis: 'blelbe',
      WW: 10,
      US: 5,
      K: 5,
      Odp: 5,
      Zr: 10,
      Int: 0,
      SW: 0,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getOchroniarz() {
  return [
    {
      title: 'Ochroniarz',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 5,
      Int: 0,
      SW: 0,
      Ogd: 0,
      A: 1,
      Zyw: 3,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getOprych() {
  return [
    {
      title: 'Oprych',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 0,
      Int: 0,
      SW: 5,
      Ogd: 5,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getPaz() {
  return [
    {
      title: 'Paź',
      opis: 'blelbe',
      WW: 0,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getPodzegacz() {
  return [
    {
      title: 'Podżegacz',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 0,
      Zr: 5,
      Int: 10,
      SW: 0,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getPorywaczZwlok() {
  return [
    {
      title: 'Porywacz Zwłok',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 5,
      Odp: 0,
      Zr: 10,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getPoslaniec() {
  return [
    {
      title: 'Posłaniec',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getPrzemytnik() {
  return [
    {
      title: 'Przemytnik',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 0,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getPrzepatrywacz() {
  return [
    {
      title: 'Przepatrywacz',
      opis: 'blelbe',
      WW: 5,
      US: 10,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getPrzewoznik() {
  return [
    {
      title: 'Przewoźnik',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 10,
      Odp: 5,
      Zr: 5,
      Int: 5,
      SW: 0,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getRybak() {
  return [
    {
      title: 'Rybak',
      opis: 'blelbe',
      WW: 0,
      US: 5,
      K: 10,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 0,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getRzecznikRodu() {
  return [
    {
      title: 'Rzecznik rodu',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 0,
      Zr: 5,
      Int: 10,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getRzemieslnik() {
  return [
    {
      title: '',
      opis: 'blelbe',
      WW: 0,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getRzezimieszek() {
  return [
    {
      title: 'Rzezimieszek',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 10,
      Odp: 0,
      Zr: 10,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getSkryba() {
  return [
    {
      title: 'Skryba',
      opis: 'blelbe',
      WW: 0,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 10,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getSluga() {
  return [
    {
      title: 'Sługa',
      opis: 'blelbe',
      WW: 5,
      US: 0,
      K: 5,
      Odp: 0,
      Zr: 10,
      Int: 5,
      SW: 10,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getStraznik() {
  return [
    {
      title: 'Strażnik',
      opis: 'blelbe',
      WW: 10,
      US: 5,
      K: 5,
      Odp: 0,
      Zr: 5,
      Int: 10,
      SW: 0,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getStraznikDrog() {
  return [
    {
      title: 'Strażnik Dróg',
      opis: 'blelbe',
      WW: 10,
      US: 10,
      K: 5,
      Odp: 0,
      Zr: 10,
      Int: 5,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getStraznikPol() {
  return [
    {
      title: 'Strażnik pól',
      opis: 'blelbe',
      WW: 5,
      US: 10,
      K: 0,
      Odp: 5,
      Zr: 10,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getStraznikWiezienny() {
  return [
    {
      title: 'Strażnik więzienny',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 10,
      Odp: 10,
      Zr: 0,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 3,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getSzczurolap() {
  return [
    {
      title: 'Szczurołap',
      opis: 'blelbe',
      WW: 5,
      US: 10,
      K: 0,
      Odp: 5,
      Zr: 10,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getSzermierzEstalijski() {
  return [
    {
      title: 'Szermierz estalijski',
      opis: 'blelbe',
      WW: 15,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 10,
      Int: 5,
      SW: 0,
      Ogd: 0,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function GetSzlachcic() {
  return [
    {
      title: 'Szlachcic',
      opis: 'blelbe',
      WW: 10,
      US: 5,
      K: 0,
      Odp: 0,
      Zr: 5,
      Int: 5,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getSmieciarz() {
  return [
    {
      title: 'Śmieciarz',
      opis: 'blelbe',
      WW: 5,
      US: 0,
      K: 5,
      Odp: 10,
      Zr: 5,
      Int: 0,
      SW: 5,
      Ogd: 5,
      A: 0,
      Zyw: 5,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getTarczownik() {
  return [
    {
      title: 'Tarczownik',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 10,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getUczenCzarodzieja() {
  return [
    {
      title: 'Uczeń Czarodzieja',
      opis: 'blelbe',
      WW: 0,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 5,
      Int: 10,
      SW: 15,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 1,
      PO: 0,
      PP: 0,
    }
  ];
}
function getWeglarz() {
  return [
    {
      title: 'Węglarz',
      opis: 'blelbe',
      WW: 5,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 5,
      Int: 5,
      SW: 5,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getWloczykij() {
  return [
    {
      title: 'Włóczykij',
      opis: 'blelbe',
      WW: 5,
      US: 10,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 5,
      SW: 0,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getWojownikKlanowy() {
  return [
    {
      title: 'Wojownik Klanowy',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 5,
      Ogd: 0,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getWoznica() {
  return [
    {
      title: 'Woźnica',
      opis: 'blelbe',
      WW: 5,
      US: 10,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 0,
      SW: 5,
      Ogd: 5,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getZabojcaTrolli() {
  return [
    {
      title: 'Zabójca trolli',
      opis: 'blelbe',
      WW: 10,
      US: 0,
      K: 5,
      Odp: 5,
      Zr: 5,
      Int: 0,
      SW: 10,
      Ogd: 0,
      A: 1,
      Zyw: 3,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getZarzadca() {
  return [
    {
      title: 'Zarządca',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 5,
      Odp: 0,
      Zr: 0,
      Int: 10,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getZlodziej() {
  return [
    {
      title: 'Złodziej',
      opis: 'blelbe',
      WW: 5,
      US: 5,
      K: 0,
      Odp: 0,
      Zr: 15,
      Int: 5,
      SW: 0,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getZak() {
  return [
    {
      title: 'Żak',
      opis: 'blelbe',
      WW: 0,
      US: 0,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 10,
      SW: 5,
      Ogd: 10,
      A: 0,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getZeglarz() {
  return [
    {
      title: 'Żeglarz',
      opis: 'blelbe',
      WW: 10,
      US: 5,
      K: 10,
      Odp: 0,
      Zr: 10,
      Int: 0,
      SW: 0,
      Ogd: 0,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getZolnierz() {
  return [
    {
      title: 'Żołnierz',
      opis: 'blelbe',
      WW: 10,
      US: 10,
      K: 0,
      Odp: 0,
      Zr: 10,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 1,
      Zyw: 2,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}
function getZolnierzOkretowy() {
  return [
    {
      title: 'Żołnierz okrętowy',
      opis: 'blelbe',
      WW: 10,
      US: 10,
      K: 10,
      Odp: 0,
      Zr: 5,
      Int: 0,
      SW: 5,
      Ogd: 0,
      A: 1,
      Zyw: 3,
      S: 0,
      Wt: 0,
      Sz: 0,
      Mag: 0,
      PO: 0,
      PP: 0,
    }
  ];
}

// umiejętności
function getBrzuchomowstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Brzuchomówstwo',
      cecha: 'Ogłada',
      opis: 'Bohater potrafi mówić bez otwierania ust. Osoby uważnie obcerwujące Bohatera korzystające z tej umiejętności mogą wykonywać test spostrzegawczości przeciwko testowi brzuchomówstwa BG, żeby wykryć sztuczkę Bohatera.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getCharakteryzacja() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Charakteryzacja',
      cecha: 'Ogłada',
      opis: 'opis charakteryzacji',
      zdolnoscipokrewne: 'naśladowca.'
    }
  ]
}
function getCzytanieiPisanie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Czytanie i Pisanie',
      cecha: 'Inteligencja',
      opis: 'opis czytania i pisania',
      zdolnoscipokrewne: 'poliglota.'
    }
  ]
}
function getCzytaniezWarg() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Czytanie z warg',
      cecha: 'Inteligencja',
      opis: 'opis czytania z warg',
      zdolnoscipokrewne: 'bystry wzrok.'
    }
  ]
}
function getDowodzenie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Dowodzenie',
      cecha: 'Ogłada',
      opis: 'opis dowodzenia',
      zdolnoscipokrewne: 'brak'
    }
  ]
}
function getGadanina() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'gadanina',
      cecha: 'Ogłada',
      opis: 'opis ogłady',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getHazard() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Hazard',
      cecha: 'Inteligencja',
      opis: 'opis hazardu',
      zdolnoscipokrewne: 'geniusz arytmetyczny.'
    }
  ]
}
function getHipnoza() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Hipnoza',
      cecha: 'Siła Woli',
      opis: 'opis siły woli',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getJezdziectwo() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Jeździectwo',
      cecha: 'Zręczność',
      opis: 'opis jezdziectwa',
      zdolnoscipokrewne: 'woltyżerka.'
    }
  ]
}
function getJezykTajemny() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Język Tajemny',
      cecha: 'Inteligencja',
      opis: 'opis jezyk tajemny',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getKuglarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo',
      cecha: 'Ogłada',
      opis: 'opis kuglarstwa',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getLeczenie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Leczenie',
      cecha: 'Inteligencja',
      opis: 'opis leczenia',
      zdolnoscipokrewne: 'chirurgia.'
    }
  ]
}
function getMocnaGlowa() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Mocna Głowa',
      cecha: 'Zręczność',
      opis: 'opis mocnej glowy',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNauka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka',
      cecha: 'Inteligencja',
      opis: 'opis jezdziectwa',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaAstronomia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(astronomia)',
      cecha: 'Inteligencja',
      opis: 'opis jezdziectwa',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaHistoria() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(historia)',
      cecha: 'Inteligencja',
      opis: 'opis jezdziectwa',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaTeologia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(teologia)',
      cecha: 'Inteligencja',
      opis: 'opis jezdziectwa',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNawigacja() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nawigacja',
      cecha: 'Inteligencja',
      opis: 'opis nawigacji',
      zdolnoscipokrewne: 'geniusz arytmetyczny, wyczucie kierunku.'
    }
  ]
}
function getOpiekaNadZwierzetami() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Opieka Nad Zwierzętami',
      cecha: 'Inteligencja',
      opis: 'opis opieki',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getOswajanie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Oswajanie',
      cecha: 'Ogłada',
      opis: 'opis oswajania',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getOtwieranieZamkow() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Otwieranie Zamków',
      cecha: 'Zręczność',
      opis: 'opis otwierania zamkow  ',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getPlotkowanie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Plotkowanie',
      cecha: 'Ogłada',
      opis: 'opis plotkowania',
      zdolnoscipokrewne: 'etykieta, łotrzyk.'
    }
  ]
}
function getPlywanie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Pływanie',
      cecha: 'Krzepa',
      opis: 'opis plywania',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getPowozenie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Powożenie',
      cecha: 'Krzepa',
      opis: 'opis powozenia',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getPrzekonywanie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Przekonywanie',
      cecha: 'Ogłada',
      opis: 'opis przekonywania',
      zdolnoscipokrewne: 'etykieta, intrygant, krasomówstwo, łotrzyk, przemawianie.'
    }
  ]
}
function getPrzeszukiwanie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Przeszukiwanie',
      cecha: 'Inteligencja',
      opis: 'opis przeszukiwania',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getRzemioslo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło',
      cecha: 'różnie.',
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getSekretneZnaki() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretne Znaki',
      cecha: 'Inteligencja',
      opis: 'opis sekretnych znakow',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretnyJezyk() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretny język',
      cecha: 'Inteligencja',
      opis: 'opis sekretny jezyk',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSkradanieSie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Skradanie się',
      cecha: 'Zręczność',
      opis: 'opis skradania',
      zdolnoscipokrewne: 'grotołaz, ulicznik, wędrowiec.'
    }
  ]
}
function getSplatanieMagii() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Splatanie magii',
      cecha: 'Siła Woli',
      opis: 'opis spalatania ',
      zdolnoscipokrewne: 'zmysł magii.'
    }
  ]
}
function getSpostrzegawczosc() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Spostrzegawczość',
      cecha: 'Inteligencja',
      opis: 'opis spostrzegawczosci',
      zdolnoscipokrewne: 'bystry wzrok, czuły słuch, geniusz arytmetyczny.'
    }
  ]
}
function getSztukaPrzetrwania() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Sztuka Przetrwania',
      cecha: 'Inteligencja',
      opis: 'opis sztuki przetwrwania',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSledzenie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Śledzenie',
      cecha: 'Zręczność',
      opis: 'opis sledzenia ',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getTargowanie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Targowanie',
      cecha: 'Ogłada',
      opis: 'opis targowania',
      zdolnoscipokrewne: 'żyłka handlowa.'
    }
  ]
}
function getTorturowanie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Torturowanie',
      cecha: 'Ogłada',
      opis: 'opis torturowania',
      zdolnoscipokrewne: 'groźny.'
    }
  ]
}
function getTresura() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Tresura',
      cecha: 'Ogłada',
      opis: 'opis rtesury ',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getTropienie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Tropienie',
      cecha: 'Inteligencja',
      opis: 'opis tropienia',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getUkrywanieSie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Ukrywanie się',
      cecha: 'Zręszność.',
      opis: 'opis ukrywania ',
      zdolnoscipokrewne: 'grotołaz, ulicznik, wędrowiec.'
    }
  ]
}
function getUnik() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Unik',
      cecha: 'Zręczność',
      opis: 'opis uniku',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getWarzenieTrucizn() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Warzenie Trucizn',
      cecha: 'Inteligencja',
      opis: 'opis warzenia ',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getWiedzaImperium() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(Imperium)',
      cecha: 'Inteligencja',
      opis: 'opis wiedzy',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaElfy() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(Elfy)',
      cecha: 'Inteligencja',
      opis: 'opis wiedzy',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWioślarstwo() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Wioślarstwo',
      cecha: 'Krzepa',
      opis: 'opis wioslarstwa ',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getWspinaczka() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Wspinaczka',
      cecha: 'Krzepa',
      opis: 'opis wspinaczki',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getWycena() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Wycena',
      cecha: 'Inteligencja',
      opis: 'opis wyceny',
      zdolnoscipokrewne: 'telent artystyczny, żyłka handlowa.'
    }
  ]
}
function getWykrywanieMagii() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wykrywanie Magii',
      cecha: 'Siła Woli',
      opis: 'opis wykrywania magii',
      zdolnoscipokrewne: 'zmysł magii.'
    }
  ]
}
function getZastawaniePulapek() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Zastawianie Pułapek',
      cecha: 'Zręczność',
      opis: 'opis zxastawainai',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getZastraszanie() {
  return [
    {
      typ: 'Podstawowa',
      umiejetnosc: 'Zastraszanie',
      cecha: 'Krzepa',
      opis: 'opis zastraszania',
      zdolnoscipokrewne: 'groźny.'
    }
  ]
}
function getZnajomoscJezykaStaroswiatowy() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(starowiatowy)',
      cecha: 'Inteligencja',
      opis: 'opis znajomosci jezyka',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscJezykaKlasyczny() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(klasyczny)',
      cecha: 'Inteligencja',
      opis: 'opis znajomosci jezyka',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaEltharin() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(Eltharin)',
      cecha: 'Inteligencja',
      opis: 'opis znajomosci jezyka',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZwinnePalce() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Zwinne palce',
      cecha: 'Zręczność',
      opis: 'opis zwinnych palcow',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getZeglarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Żeglarstwo',
      cecha: 'Zręczność',
      opis: 'opis zeglarstwa',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
