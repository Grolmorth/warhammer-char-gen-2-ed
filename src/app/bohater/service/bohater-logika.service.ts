import { Zdolnosci } from './zdolnosci';
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
    else if (profesja === 'Porywacz zwłok') {
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
    else if (umiejetnosc === 'Język tajemny(magiczny)') {
      const items = getJezykTajemnyMagiczny();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(akrobatyka)') {
      const items = getKuglarstwoAkrobatyka();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(aktorstwo)') {
      const items = getKuglarstwoAktorstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(błaznowanie)') {
      const items = getKuglarstwoBlaznowanie();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(gawędziarstwo)') {
      const items = getKuglarstwoGawedziarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(komedianctwo)') {
      const items = getKuglarstwoKomedianctwo();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(mimika)') {
      const items = getKuglarstwoMimika();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(muzykalność)') {
      const items = getKuglarstwoMuzykalnosc();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(połykanie ognia)') {
      const items = getKuglarstwoPolykanieOgnia();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(śpiew)') {
      const items = getKuglarstwoSpiew();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(taniec)') {
      const items = getKuglarstwoTaniec();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(wróżenie z dłoni)') {
      const items = getKuglarstwoWrozenieZDloni();
      return of(items);
    }
    else if (umiejetnosc === 'Kuglarstwo(żonglerka)') {
      const items = getKuglarstwoZonglerka();
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
    else if (umiejetnosc === 'Nauka(alchemia)') {
      const items = getNaukaAlchemia();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(astronomia)') {
      const items = getNaukaAstronomia();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(anatomia)') {
      const items = getNaukaAnatomia();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(demonologia)') {
      const items = getNaukaDemonologia();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(filozofia)') {
      const items = getNaukaFilozofia();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(historia)') {
      const items = getNaukaHistoria();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(inżynieria)') {
      const items = getNaukaInzynieria();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(magia)') {
      const items = getNaukaMagia();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(genealogia/heraldyka)') {
      const items = getNaukaGenealogiaHeraldyka();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(matematyka)') {
      const items = getNaukaMatematyka();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(nekromancja)') {
      const items = getNaukaNekromancja();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(prawo)') {
      const items = getNaukaPrawo();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(runy)') {
      const items = getNaukaRuny();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(strategia/taktyka)') {
      const items = getNaukaStrategiaTaktyka();
      return of(items);
    }
    else if (umiejetnosc === 'Nauka(sztuka)') {
      const items = getNaukaSztuka();
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
    else if (umiejetnosc === 'Rzemiosło(aptekarstwo)') {
      const items = getRzemiosloAptekarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(bednarstwo)') {
      const items = getRzemiosloBednarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(garbarstwo)') {
      const items = getRzemiosloGarbarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(gotowanie)') {
      const items = getRzemiosloGotowanie();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(górnictwo)') {
      const items = getRzemiosloGornictwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(górnictwo odkrywkowe)') {
      const items = getRzemiosloGornictwoOdkrywkowe();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(handel)') {
      const items = getRzemiosloHandel();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(jubilerstwo)') {
      const items = getRzemiosloJubilerstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(kaligrafia)') {
      const items = getRzemiosloKaligrafia();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(kamieniarstwo)') {
      const items = getRzemiosloKamieniarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(kartografia)') {
      const items = getRzemiosloKartografia();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(kowalstwo)') {
      const items = getRzemiosloKowalstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(krawiectwo)') {
      const items = getRzemiosloKrawiectwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(młynarstwo)') {
      const items = getRzemiosloMlynarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(piwowarstwo)') {
      const items = getRzemiosloPiwowarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(płatnerstwo)') {
      const items = getRzemiosloPlatnerstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(rusznikarstwo)') {
      const items = getRzemiosloRusznikarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(rymarstwo)') {
      const items = getRzemiosloRymarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(szewstwo)') {
      const items = getRzemiosloSzewstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(stolarstwo)') {
      const items = getRzemiosloStolarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(szkutnictwo)') {
      const items = getRzemiosloSzkutnictwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(sztuka)') {
      const items = getRzemiosloSztuka();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(świecarstwo)') {
      const items = getRzemiosloSwiecarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(uprawa ziemi)') {
      const items = getRzemiosloUprawaZiemi();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(wyrób łuków)') {
      const items = getRzemiosloWyrobLukow();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(zielarstwo)') {
      const items = getRzemiosloZielarstwo();
      return of(items);
    }
    else if (umiejetnosc === 'Rzemiosło(złotnictwo)') {
      const items = getRzemiosloZlotnictwo();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretne znaki(łowców)') {
      const items = getSekretneZnakiLowcow();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretne znaki(rycerzy zakonnych)') {
      const items = getSekretneZnakiRycerzyZakonnych();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretne znaki(złodziei)') {
      const items = getSekretneZnakiZlodziei();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretne znaki(zwiadowców)') {
      const items = getSekretneZnakiZwiadowcow();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretny język(bitewny)') {
      const items = getSekretnyJezykBitewny();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretny język(gildii)') {
      const items = getSekretnyJezykGildii();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretny język(łowców)') {
      const items = getSekretnyJezykLowcow();
      return of(items);
    }
    else if (umiejetnosc === 'Sekretny język(złodziejski)') {
      const items = getSekretnyJezykZlodziejski();
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
    else if (umiejetnosc === 'Wiedza(bretonia)') {
      const items = getWiedzaBretonia();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(estalia)') {
      const items = getWiedzaEstalia();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(imperium)') {
      const items = getWiedzaImperium();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(jałowa kraina)') {
      const items = getWiedzaJalowaKraina();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(kislev)') {
      const items = getWiedzaKislev();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(księstwa graniczne)') {
      const items = getWiedzaKsiestwaGraniczne();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(norska)') {
      const items = getWiedzaNorska();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(tilea)') {
      const items = getWiedzaTilea();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(elfy)') {
      const items = getWiedzaElfy();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(krasnoludy)') {
      const items = getWiedzaKrasnoludy();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(niziołki)') {
      const items = getWiedzaNiziolki();
      return of(items);
    }
    else if (umiejetnosc === 'Wiedza(ogry)') {
      const items = getWiedzaOgry();
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
    else if (umiejetnosc === 'Znajomość języka(bretoński)') {
      const items = getZnajomoscJezykaBretonski();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(eltharin)') {
      const items = getZnajomoscjezykaEltharin();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(estalijski)') {
      const items = getZnajomoscjezykaEstalisjki();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(khazalid)') {
      const items = getZnajomoscjezykaKhazaldin();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(kislevski)') {
      const items = getZnajomoscjezykaKislevski();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(norski)') {
      const items = getZnajomoscjezykaNorski();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(tileański)') {
      const items = getZnajomoscjezykaTileanski();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(klasyczny)') {
      const items = getZnajomoscJezykaKlasyczny();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(staroświatowy)') {
      const items = getZnajomoscJezykaStaroswiatowy();
      return of(items);
    }
    else if (umiejetnosc === 'Znajomość języka(niziołków)') {
      const items = getZnajomoscjezykaNiziolkow();
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
  getZdolnosc(zdolnosc: string): Observable<Zdolnosci[]> {
    if (zdolnosc === 'Artylerzysta') {
      const items = getArtylerzysta();
      return of(items);
    }
    else if (zdolnosc === 'Bardzo silny') {
      const items = getBardzoSilny();
      return of(items);
    }
    else if (zdolnosc === 'Bardzo szybki') {
      const items = getBardzoSzybki();
      return of(items);
    }
    else if (zdolnosc === 'Bijatyka') {
      const items = getBijatyka();
      return of(items);
    }
    else if (zdolnosc === 'Błyskawiczne przeładowanie') {
      const items = getBlyskawicznePrzeladowanie();
      return of(items);
    }
    else if (zdolnosc === 'Błyskawiczny blok') {
      const items = getBlyskawicznyBlok();
      return of(items);
    }
    else if (zdolnosc === 'Błyskotliwość') {
      const items = getBlyskotliwosc();
      return of(items);
    }
    else if (zdolnosc === 'Brawura') {
      const items = getBrawura();
      return of(items);
    }
    else if (zdolnosc === 'Broń naturalna') {
      const items = getBronNaturalna();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(dwuręczna)') {
      const items = getBronSpecjalnaDwureczna();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(kawaleryjska)') {
      const items = getBronSpecjalnaKawaleryjska();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(mechaniczna)') {
      const items = getBronSpecjalnaMechaniczna();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(palna)') {
      const items = getBronSpecjalnaPalna();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(parująca)') {
      const items = getBronSpecjalnaParujaca();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(rzucana)') {
      const items = getBronSpecjalnaRzucana();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(szermiercza)') {
      const items = getBronSpecjalnaSzermiercza();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(unieruchamiająca)') {
      const items = getBronSpecjalnaUnieruchamiajaca();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(korbacz)') {
      const items = getBronSpecjalnaKorbacze();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(kusza)') {
      const items = getBronSpecjalnaKusze();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(łuk)') {
      const items = getBronSpecjalnaLuki();
      return of(items);
    }
    else if (zdolnosc === 'Broń specjalna(proca)') {
      const items = getBronSpecjalnaProce();
      return of(items);
    }
    else if (zdolnosc === 'Bystry wzrok') {
      const items = getBystryWzrok();
      return of(items);
    }
    else if (zdolnosc === 'Charyzmatyczny') {
      const items = getCharyzmatyczny();
      return of(items);
    }
    else if (zdolnosc === 'Chirurgia') {
      const items = getChirurgia();
      return of(items);
    }
    else if (zdolnosc === 'Chodu!') {
      const items = getChodu();
      return of(items);
    }
    else if (zdolnosc === 'Czarnoksięstwo') {
      const items = getCzarnoksieswto();
      return of(items);
    }
    else if (zdolnosc === 'Człowiek-guma') {
      const items = getCzlowiekGuma();
      return of(items);
    }
    else if (zdolnosc === 'Czuły słuch') {
      const items = getCzulySluch();
      return of(items);
    }
    else if (zdolnosc === 'Dotyk mocy') {
      const items = getDotykMocy();
      return of(items);
    }
    else if (zdolnosc === 'Etykieta') {
      const items = getEtykieta();
      return of(items);
    }
    else if (zdolnosc === 'Geniusz arytmetyczny') {
      const items = getGeniuszArytmetyczny();
      return of(items);
    }
    else if (zdolnosc === 'Grotołaz') {
      const items = getGrotolaz();
      return of(items);
    }
    else if (zdolnosc === 'Groźny') {
      const items = getGrozny();
      return of(items);
    }
    else if (zdolnosc === 'Gusła') {
      const items = getGusla();
      return of(items);
    }
    else if (zdolnosc === 'Intrygant') {
      const items = getIntrygant();
      return of(items);
    }
    else if (zdolnosc === 'Krasnoludzki fach') {
      const items = getKrasnoludzkiFach();
      return of(items);
    }
    else if (zdolnosc === 'Krasomówstwo') {
      const items = getKrasomowstwo();
      return of(items);
    }
    else if (zdolnosc === 'Krzepki') {
      const items = getKrzepki();
      return of(items);
    }
    else if (zdolnosc === 'Latanie') {
      const items = getLatanie();
      return of(items);
    }
    else if (zdolnosc === 'Lewitacja') {
      const items = getLewitacja();
      return of(items);
    }
    else if (zdolnosc === 'Łotrzyk') {
      const items = getLotrzyk();
      return of(items);
    }
    else if (zdolnosc === 'Magia czarnoksięska') {
      const items = getMagiaCzaroksieska();
      return of(items);
    }
    else if (zdolnosc === 'Magia kapłańska') {
      const items = getMagiaKaplanska();
      return of(items);
    }
    else if (zdolnosc === 'Magia powrzechna') {
      const items = getMagiaPowrzechna();
      return of(items);
    }
    else if (zdolnosc === 'Magia prosta') {
      const items = getMagiaProsta();
      return of(items);
    }
    else if (zdolnosc === 'Magia prosta(gusła)') {
      const items = getMagiaProstaGusla();
      return of(items);
    }
    else if (zdolnosc === 'Magia prosta(tajemna)') {
      const items = getMagiaProstaTajemna();
      return of(items);
    }
    else if (zdolnosc === 'Magia tajemna') {
      const items = getMagiaTajemna();
      return of(items);
    }
    else if (zdolnosc === 'Medytacja') {
      const items = getMedytacja();
      return of(items);
    }
    else if (zdolnosc === 'Morderczy atak') {
      const items = getMorderczyAtak();
      return of(items);
    }
    else if (zdolnosc === 'Morderczy pocisk') {
      const items = getMorderczyPocisk();
      return of(items);
    }
    else if (zdolnosc === 'Naśladowca') {
      const items = getNasladowca();
      return of(items);
    }
    else if (zdolnosc === 'Niepokojący') {
      const items = getNiepokojacy();
      return of(items);
    }
    else if (zdolnosc === 'Nieustraszony') {
      const items = getNieustraszony();
      return of(items);
    }
    else if (zdolnosc === 'Niezwykle odporny') {
      const items = getNiezwykleOdporny();
      return of(items);
    }
    else if (zdolnosc === 'Obieżyświat') {
      const items = getObiezyswiat();
      return of(items);
    }
    else if (zdolnosc === 'Oburęczność') {
      const items = getOburecznosc();
      return of(items);
    }
    else if (zdolnosc === 'Odporność na chaos') {
      const items = getOdpornoscNaChaos();
      return of(items);
    }
    else if (zdolnosc === 'Odporność na choroby') {
      const items = getOdpornoscNaChoroby();
      return of(items);
    }
    else if (zdolnosc === 'Odporność na magię') {
      const items = getOdpornoscNaMagie();
      return of(items);
    }
    else if (zdolnosc === 'Odporność na trucizny') {
      const items = getOdpornoscNaTrucizny();
      return of(items);
    }
    else if (zdolnosc === 'Odporność psychiczna') {
      const items = getOdpornoscPsychiczna();
      return of(items);
    }
    else if (zdolnosc === 'Odwaga') {
      const items = getOdwaga();
      return of(items);
    }
    else if (zdolnosc === 'Ogłuszanie') {
      const items = getOgluszenie();
      return of(items);
    }
    else if (zdolnosc === 'Opanowanie') {
      const items = getOpanowanie();
      return of(items);
    }
    else if (zdolnosc === 'Ożywieniec') {
      const items = getOzywieniec();
      return of(items);
    }
    else if (zdolnosc === 'Pancerz wiary') {
      const items = getPancerzWiary();
      return of(items);
    }
    else if (zdolnosc === 'Poliglota') {
      const items = getPoliglota();
      return of(items);
    }
    else if (zdolnosc === 'Przemawianie') {
      const items = getPrzemawianie();
      return of(items);
    }
    else if (zdolnosc === 'Przerażający') {
      const items = getPrzerazajacy();
      return of(items);
    }
    else if (zdolnosc === 'Rozbrajanie') {
      const items = getRozbrajanie();
      return of(items);
    }
    else if (zdolnosc === 'Silny cios') {
      const items = getSilnyCios();
      return of(items);
    }
    else if (zdolnosc === 'Straszny') {
      const items = getStraszny();
      return of(items);
    }
    else if (zdolnosc === 'Strzał mierzony') {
      const items = getStrzalMierzony();
      return of(items);
    }
    else if (zdolnosc === 'Strzał precyzyjny') {
      const items = getStrzalPrecyzyjny();
      return of(items);
    }
    else if (zdolnosc === 'Strzał przebijający') {
      const items = getStrzalPrzebijajacy();
      return of(items);
    }
    else if (zdolnosc === 'Strzelec wyborowy') {
      const items = getStrzelecWyborowy();
      return of(items);
    }
    else if (zdolnosc === 'Szał bojowy') {
      const items = getSzalBojowy();
      return of(items);
    }
    else if (zdolnosc === 'Szczęście') {
      const items = getSzczescie();
      return of(items);
    }
    else if (zdolnosc === 'Szósty zmysł') {
      const items = getSzostyZmysl();
      return of(items);
    }
    else if (zdolnosc === 'Szybki refleks') {
      const items = getSzybkiRefleks();
      return of(items);
    }
    else if (zdolnosc === 'Szybkie wyciągnięcie') {
      const items = getSzybkieWyciagniecie();
      return of(items);
    }
    else if (zdolnosc === 'Talent artystyczny') {
      const items = getTalentArtystyczny();
      return of(items);
    }
    else if (zdolnosc === 'Twardziel') {
      const items = getTwardziel();
      return of(items);
    }
    else if (zdolnosc === 'Ulicznik') {
      const items = getUlicznik();
      return of(items);
    }
    else if (zdolnosc === 'Urodzony wojownik') {
      const items = getUrodzonyWojownik();
      return of(items);
    }
    else if (zdolnosc === 'Wędrowiec') {
      const items = getWedrowiec();
      return of(items);
    }
    else if (zdolnosc === 'Widzenie w ciemności') {
      const items = getWidzenieWCiemnosci();
      return of(items);
    }
    else if (zdolnosc === 'Woltyżerka') {
      const items = getWoltyzerka();
      return of(items);
    }
    else if (zdolnosc === 'Wyczucie kierunku') {
      const items = getWyczucieKierunku();
      return of(items);
    }
    else if (zdolnosc === 'Wykrywanie pułapek') {
      const items = getWykrywaniePulapek();
      return of(items);
    }
    else if (zdolnosc === 'Wyostrzone zmysły') {
      const items = getWyostrzonezmysly();
      return of(items);
    }
    else if (zdolnosc === 'Zapasy') {
      const items = getZapasy();
      return of(items);
    }
    else if (zdolnosc === 'Zapiekła nienawiść') {
      const items = getZapieklaNienawisc();
      return of(items);
    }
    else if (zdolnosc === 'Zmysł magii') {
      const items = getZmyslMagii();
      return of(items);
    }
    else if (zdolnosc === 'Żyłka handlowa') {
      const items = getZylkaHandlowa();
      return of(items);
    }
    else if (zdolnosc === 'Losowe człowiek') {
      const i = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      if (i < 5) {
        const items = getBardzoSilny();
        return of(items);
      }
      else if (i < 10) {
        const items = getBardzoSzybki();
        return of(items);
      }
      else if (i < 14) {
        const items = getBlyskotliwosc();
        return of(items);
      }
      else if (i < 19) {
        const items = getBystryWzrok();
        return of(items);
      }
      else if (i < 23) {
        const items = getCharyzmatyczny();
        return of(items);
      }
      else if (i < 28) {
        const items = getCzulySluch();
        return of(items);
      }
      else if (i < 32) {
        const items = getGeniuszArytmetyczny();
        return of(items);
      }
      else if (i < 36) {
        const items = getKrzepki();
        return of(items);
      }
      else if (i < 41) {
        const items = getNasladowca();
        return of(items);
      }
      else if (i < 45) {
        const items = getNiezwykleOdporny();
        return of(items);
      }
      else if (i < 50) {
        const items = getOburecznosc();
        return of(items);
      }
      else if (i < 54) {
        const items = getOdpornoscNaChoroby();
        return of(items);
      }
      else if (i < 58) {
        const items = getOdpornoscNaMagie();
        return of(items);
      }
      else if (i < 62) {
        const items = getOdpornoscNaTrucizny();
        return of(items);
      }
      else if (i < 67) {
        const items = getOdpornoscPsychiczna();
        return of(items);
      }
      else if (i < 72) {
        const items = getOpanowanie();
        return of(items);
      }
      else if (i < 76) {
        const items = getStrzelecWyborowy();
        return of(items);
      }
      else if (i < 80) {
        const items = getSzczescie();
        return of(items);
      }
      else if (i < 84) {
        const items = getSzostyZmysl();
        return of(items);
      }
      else if (i < 88) {
        const items = getSzybkiRefleks();
        return of(items);
      }
      else if (i < 92) {
        const items = getTwardziel();
        return of(items);
      }
      else if (i < 96) {
        const items = getUrodzonyWojownik();
        return of(items);
      }
      else {
        const items = getWidzenieWCiemnosci();
        return of(items);
      }

    }
    else if (zdolnosc === 'Losowe niziołek') {
      const i = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      if (i < 5) {
        const items = getBardzoSilny();
        return of(items);
      }
      else if (i < 10) {
        const items = getBardzoSzybki();
        return of(items);
      }
      else if (i < 14) {
        const items = getBlyskotliwosc();
        return of(items);
      }
      else if (i < 19) {
        const items = getBystryWzrok();
        return of(items);
      }
      else if (i < 24) {
        const items = getCharyzmatyczny();
        return of(items);
      }
      else if (i < 29) {
        const items = getCzulySluch();
        return of(items);
      }
      else if (i < 35) {
        const items = getGeniuszArytmetyczny();
        return of(items);
      }
      else if (i < 40) {
        const items = getKrzepki();
        return of(items);
      }
      else if (i < 45) {
        const items = getNasladowca();
        return of(items);
      }
      else if (i < 50) {
        const items = getNiezwykleOdporny();
        return of(items);
      }
      else if (i < 54) {
        const items = getOburecznosc();
        return of(items);
      }
      else if (i < 59) {
        const items = getOdpornoscNaChoroby();
        return of(items);
      }
      else if (i < 63) {
        const items = getOdpornoscNaMagie();
        return of(items);
      }
      else if (i < 65) {
        const items = getOdpornoscNaTrucizny();
        return of(items);
      }
      else if (i < 69) {
        const items = getOdpornoscPsychiczna();
        return of(items);
      }
      else if (i < 74) {
        const items = getOpanowanie();
        return of(items);
      }
      else if (i < 79) {
        const items = getStrzelecWyborowy();
        return of(items);
      }
      else if (i < 83) {
        const items = getSzczescie();
        return of(items);
      }
      else if (i < 88) {
        const items = getSzostyZmysl();
        return of(items);
      }
      else if (i < 93) {
        const items = getSzybkiRefleks();
        return of(items);
      }
      else if (i < 97) {
        const items = getTwardziel();
        return of(items);
      }
      else {
        const items = getUrodzonyWojownik();
        return of(items);
      }


    }
  }

}

// rasy
function getMockRasy() {
  return [
    {
      rasatitle: 'Człowiek', WW: 20, US: 20, K: 20, Odp: 20, Zr: 20, Int: 20, SW: 20, Ogd: 20, Sz: 4,
      umiejetnosci: ['Plotkowanie', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
      zdolnosci: ['Losowe człowiek', 'Losowe człowiek']
    },
    {
      rasatitle: 'Krasnolud', WW: 30, US: 20, K: 20, Odp: 30, Zr: 10, Int: 20, SW: 20, Ogd: 10, Sz: 3,
      umiejetnosci: ['Znajomość języka(khazalid)', 'Wiedza(krasnoludy)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciRasy: [['Rzemiosło(górnictwo)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kowalstwo)']],
      zdolnosci: ['Krasnoludzki fach', 'Krzepki', 'Odporność na magię', 'Odwaga', 'Widzenie w ciemności', 'Zapiekła nienawiść']
    },
    {
      rasatitle: 'Elf', WW: 20, US: 30, K: 20, Odp: 20, Zr: 30, Int: 20, SW: 20, Ogd: 20, Sz: 5,
      umiejetnosci: ['Wiedza(elfy)', 'Znajomość języka(eltharin)', 'Znajomość języka(staroświatowy)'],
      zdolnosci: ['Bystry wzrok', 'Widzenie w ciemności'],
      wyborZdolnosciRasy: [['Broń specjalna(łuk)', 'Zmysł magii'], ['Opanowanie', 'Błyskotliwość']]
    },
    {
      rasatitle: 'Niziołek', WW: 10, US: 30, K: 10, Odp: 10, Zr: 30, Int: 20, SW: 20, Ogd: 30, Sz: 4,
      umiejetnosci: ['Plotkowanie', 'Znajomość języka(staroświatowy)', 'Wiedza(niziołki)', 'Znajomość języka(niziołków)', 'Nauka(genealogia/heraldyka)'],
      wyborUmiejetnosciRasy: [['Rzemiosło(gotowanie)', 'Rzemiosło(uprawa ziemi)']],
      zdolnosci: ['Broń specjalna(proca)', 'Odporność na chaos', 'Widzenie w ciemności', 'Losowe niziołek']
    }
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
    { profesjatitle: 'Zabójca trolli', rollmin: 86, rollmax: 89 },
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
      opis: 'W hierarchii wartości mieszkańców Starego Świata religia spadła na drugie miejsce, ustępując bogactwu, ale wciąż jeszcze wielu młodych ludzi obojga płci znajduje w sobie powołanie do służby bożej. Praca kapłana wymaga poświęcenia i determinacji duchowej. Bycie akolitą to pierwszy krok na drodze ku kapłaństwu. Młodzi duchowni przechodzą surowe ćwiczenia pod opieką starszych kapłanów. Do końca nowicjatu nie mogą nauczać ani wygłaszać kazań. Czas spędzają na studiowaniu świętych ksiąg, czytaniu i przepisywaniu manuskryptów oraz na poznawaniu sztuki wzniosłego przemawiania. Akolici uczą się również walki na wypadek, gdyby trzeba było bronić świątyni. Uwagi: Musisz wybrać boga i Świątynię, którym służy Twój Bohater. Szczegółowy opis rozmaitych religii wyznawanych w Starym Święcie znajdziesz w Rozdziale VIII: Religie i wierzenia. Wybór bóstwa zapewnia dodatkową umiejętność lub zdolność, wymienioną w opisie kultu.',
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
        'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Nauka(astronomia)', 'Nauka(historia)']],
      zdolnosci: ['Przemawianie'],
      wyborZdolnosciProfesji: [['Bardzo silny', 'Szybki refleks'], ['Charyzmatyczny', 'Urodzony wojownik']],
      wyposazenie:'szaty kapłańskie, symbol boga'
    }
  ];
}
function getBanita() {
  return [
    {
      title: 'Banita',
      opis: 'W Imperium kara za przestępstwo wymierzana jest szybko i bez litości. Nic więc dziwnego, że wielu ludzi wybiera ucieczkę przed strażnikami i życie na wygnaniu. W lasach pełno jest grup banitów, którzy nic tylko muszą ukrywać się przed stróżami prawa, ale także walczyć z żyjącymi w lasach potworami i sługami ciemności. Większość banitów to zwykli złodzieje i zbóje napadający na karawany i powozy. Inni próbują występować w obronie chłopów i walczyć o sprawiedliwość, przeciwstawiając się okrutnym rządom lokalnych panów. Banici, którzy napadają na żołnierzy i najemników szlacheckich, mogą liczyć na pomoc chłopów, przeważnie w formie żywności, schronienia i przekazywanych wiadomości. Wyśledzenie ich kryjówek, zazwyczaj ukrytych gdzieś w głębi lasu lub w trudnym, górskim terenie, jest wyjątkowo ciężkim zadaniem dla stróżów prawa. Miejscowi władcy i zarządcy często korzystają z usług łowców nagród, by unieszkodliwiać najbardziej kłopotliwych bandytów.',
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
      umiejetnosci: ['Skradanie się', 'Spostrzegawczość', 'Ukrywanie się', 'Unik', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Wiedza(imperium)'], ['Plotkowanie', 'Sekretne znaki(złodziei)'], ['Powożenie', 'Jeździectwo'], ['Zastawianie pułapek', 'Pływanie']],
      wyborZdolnosciProfesji: [['Strzał mierzony', 'Ogłuszanie'], ['Wędrowiec', 'Łotrzyk']],
      wyposazenie: 'łuk, 10 strzał, lekki pancerz(skórzany kaftan)'
    }
  ];
}
function getberserkerZNorski() {
  return [
    {
      title: 'Berserker z Norski',
      opis: 'Norska to ponura kraina na północ od Imperium, nawiedzana przez śnieżne trolle i pomioty Chaosu. To także kraj twardych i walecznych wojowników. Najsłynniejszymi i jednocześnie najbardziej szalonymi są berserkerzy. Ruszają do walki bez pancerzy, by pokazać przeciwnikowi i swoim towarzyszom, że nie znają strachu. Przed walką doprowadzają się do szalu, gryząc tarcze lub łomocząc w nie mieczami. O ich wyczynach bardowie układają pieśni. O ich odwadze zaświadczają ci z żołnierzy Imperium, którzy przeżyli walkę z berserkerami. Spotykani w Imperium podróżnicy z Norski są wygnańcami, albo też przybyli ujrzeć krainy słabych południowców. Rzadko pozostają w jednym miejscu przez długi czas, gdyż niewielu stróżów prawa lubi mieć pod bokiem groźnego szaleńca. Berserkerzy są często zatrudniani jako najemnicy, głównie ze względu na swoją skuteczność. Idzie ona w parze z ceną, jakiej żądają za swoje usługi.',
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
      umiejetnosci: ['Kuglarstwo(gawędziarstwo)', 'Mocna głowa', 'Pływanie', 'Wiedza(norska)', 'Zastraszanie', 'Znajomość języka(norski)'],
      zdolnosci: ['Broń specjalna(dwuręczna)', 'Groźny', 'Szał bojowy', 'Szybkie wyciągnięcie'],
      wyposazenie: 'broń dwuręczna albo tarcza, lekki pancerz(skórzany kaftan), butelka gorzałki'
    }
  ];
}
function getChlop() {
  return [
    {
      title: 'Chłop',
      opis: 'Chłopi stanowią najliczniejszą część ludności Imperium. Szlachta rządzi, mieszczanie handlują, natomiast chłopi wykonują za nich najcięższą pracę. Uprawiają ziemię, wypasają bydło i zajmują się drobnym rzemiosłem. W czasie wojny walczą i giną za swojego władcę oraz Imperium. Wielu chłopów szuka lepszego życia w miastach, zasilając wciąż rosnącą rzeszę żebraków i biedaków żyjących na skraju śmierci głodowej. Większość chłopów całe życic spędza w swoich wioskach, otoczonych przez dzikie ostępy lub mroczne lasy. Mimo że są zacofani i przesądni, chłopi to prawdziwa sól tej ziemi.',
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
      umiejetnosci: ['Ukrywanie się'],
      wyborUmiejetnosciProfesji:
        [['Hazard', 'Kuglarstwo(taniec)', 'Kuglarstwo(śpiew)'],
        ['Opieka nad zwierzętami', 'Przekonywanie'],
        ['Oswajanie', 'Rzemiosło(gotowanie)'],
        ['Powożenie', 'Rzemiosło(wyrób łuków)'],
        ['Sztuka przetrwania', 'Rzemiosło(uprawa ziemi)'],
        ['Tresura', 'Pływanie'],
        ['Zastawianie pułapek', 'Wioślarstwo'],
        ['Wspinaczka', 'Skradanie się']],
      wyborZdolnosciProfesji: [['Chodu!', 'Broń specjalna(proca)'], ['Twardziel', 'Wędrowiec']],
      wyposazenie: 'proca albo kij, skórzany bukłak'
    }
  ];
}
function getCiuraObozowa() {
  return [
    {
      title: 'Ciura Obozowa',
      opis: 'Liczne wojny z Chaosem, orkami i okolicznymi księstwami powodują, że wojska Imperium prawic zawsze są w polu. Po kraju krążą też kompanie najemników i oddziały ochotników, które przeczesują lasy w poszukiwaniu bandytów. Jednak wojsko rzadko podróżuje bez taborów i służby pomocniczej. Za armiami zawsze ciągnie się kolumna włóczęgów, zwanych ciurami obozowymi. Są wśród nich drobni handlarze opiekujący się taborami, rzemieślnicy próbujący zarobić gotowaniem i drobnymi naprawami, markietanki, a także złodzieje, którzy okradają zwłoki poległych. Traktowani z pogardą przez wyniosłych dowódców armii, ciury obozowe stanowią zaplecze o kluczowym znaczeniu dla oddziałów wojskowych w terenie.',
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
      umiejetnosci: ['Plotkowanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Zwinne palce'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Powożenie'],
      ['Przekonywanie', 'Wycena'],
      ['Rzemiosło(gotowanie)', 'Rzemiosło(handel)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)'],
      ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
      zdolnosci: ['Chodu!'],
      wyborZdolnosciProfesji: [['Odporność na choroby', 'Obieżyświat'], ['Twardziel', 'Charyzmatyczny'], ['Żyłka handlowa', 'Bijatyka']],
      wyposazenie: 'taliznam szczęścia albo narzędzia(rzemieślnika), sakiewka, namiot'
    }
  ];
}
function getCyrkowiec() {
  return [
    {
      title: 'Cyrkowiec',
      opis: 'Cyrkowcy dostarczają rozrywki ludności Imperium. Akrobaci, siłacze, żonglerzy, hipnotyzerzy, woltyżerzy i brzuchomówcy - wszyscy występują dla spragnionej uciechy gawiedzi. Niektórzy robią to dla pieniędzy lub dla sławy i przyjemności, jaką daje zachwyt zgromadzonej publiczności. Inni wybierają życie cyrkowca, za wszelką cenę próbując wyrwać się z biedy. Cyrkowcy dużo podróżują, zazwyczaj w towarzystwie podobnych sobie kuglarzy. Trupy aktorskie dają przedstawienia w każdej wiosce, mieście i porcie. Szczęśliwcy mogą liczyć na wielokrotne występy, co pozwala na spędzenie kilku miesięcy w jednym miejscu. Ci. którym mniej się poszczęściło, podróżują dalej w poszukiwaniu hojniejszej publiczności (lub mniej podejrzliwej gwardii miejskiej). Najlepsi cyrkowcy cieszą się opieką arystokratów i zarabiają ogromne sumy. występując na zamkach i dworach.',
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
      umiejetnosci: ['Przekonywanie', 'Spostrzegawczość', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)'],
      ['Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)'],
      ['Opieka nad zwierzętami', 'Pływanie'], ['Wycena', 'Plotkowanie'], ['Brzuchomówstwo', 'Gadanina', 'Hipnoza', 'Jeździectwo', 'Oswajanie', 'Tresura', 'Wspinaczka', 'Zwinne palce']],
      wyborZdolnosciProfesji: [['Bardzo silny', 'Broń specjalna(rzucana)', 'Człowiek-guma', 'Naśladowca', 'Przemawianie', 'Strzał mierzony', 'Szybki refleks', 'Szybkie wyciągnięcie', 'Woltyżerka', 'Zapasy'], ['Bardzo silny', 'Broń specjalna(rzucana)', 'Człowiek-guma', 'Naśladowca', 'Przemawianie', 'Strzał mierzony', 'Szybki refleks', 'Szybkie wyciągnięcie', 'Woltyżerka', 'Zapasy']],
      wyposazenie: 'lekki pancerz(skórzana kaftan), jeden przedmiot do wyboru spośród: 3 noże do rzucania, 2 topory do rzucania, instrument muzyczny(dowolny), narzędzia(kuglarza), jeden przedmiot do wyboru spośród: kustium cyrkowca(dowolny) albo ubranie dobrej jakości'
    }
  ];
}
function getCyrulik() {
  return [
    {
      title: 'Cyrulik',
      opis: 'Cyrulicy zajmują się leczeniem najbiedniejszych obywateli Imperium. Wykonują zabiegi, często bolesne, które jednak okazują się zaskakująco skuteczne. Chociaż cyrulicy nie są tak wykształceni jak medycy, znają jednak podstawy anatomii. Dorabiają również jako balwierze, strzygąc włosy i brody, ale znani są głównie z prostych zabiegów leczniczych, wśród których dominuje puszczanie krwi, przystawianie pijawek oraz amputacje. Cyrulicy zawsze noszą przy sobie zestaw ostrych noży różnej długości, od niewielkich skalpeli po wielkie piły do cięcia kości. Niektórzy dysponują jeszcze bardziej przerażającymi narzędziami, których używają w najbardziej  znienawidzonej specjalności - wyrywaniu zębów. Większość statków morskich ma na pokładzie cyrulika, który dba o zdrowie żeglarzy. Czysto spotyka się ich również w miastach, szczególnie w biedniejszych dzielnicach.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Leczenie', 'Przekonywanie', 'Rzemiosło(aptekarstwo)', 'Spostrzegawczość', 'Targowanie'],
      wyborUmiejetnosciProfesji: [['Powożenie', 'Pływanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)', 'Znajomość języka(tileański)']],
      zdolnosci: ['Chirurgia'],
      wyborZdolnosciProfesji: [['Charyzmatyczny', 'Niezwykle odporny'], ['Odporność na choroby', 'Błyskotliwość']],
      wyposazenie: 'narzędzia(cyrulika)'
    }
  ];
}
function getFanatyk() {
  return [
    {
      title: 'Fanatyk',
      opis: 'Fanatyk stracił wszystko, co było dla niego cenne. Być może jego rodzinę wymordowali zwierzoludzie albo cala wioska została spalona przez orki. Być może stracił majątek w wyniku intrygi przekupnego kupca albo młody szlachcic uprowadził lub zgwałcił jego córkę. Niezależnie od powodu, fanatyków utrzymuje A przy życiu tylko jedno - religia. Znajdują ukojenie w płomiennych kazaniach kapłanów Ulryka lub Sigmara. Wędrują w podartych łachmanach po całym Imperium, szukając sług zła lub osób skażonych Chaosem. Ukojenie od bólu i odkupienie  win może im zapewnić tylko przelewana w dobrej sprawie krew - zarówno ich własna, jak i wrogów Imperium. Nie są tak dobrze wyszkoleni jak żołnierze, ale rozpala ich żar prawdziwej wiary, a to naprawdę potężny oręż.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Nauka(teologia)', 'Przekonywanie', 'Wiedza(imperium)', 'Zastraszanie'],
      zdolnosci: ['Broń specjalna(korbacz)', 'Przemawianie'],
      wyborZdolnosciProfesji: [['Opanowanie', 'Bardzo silny'], ['Twardziel', 'Charyzmatyczny']],
      wyposazenie:'korbacz, albo morgensztern, lekki pancerz(skórzana kurta), butelka spirytusu lub gorzałki dobrej jakości'}
  ];
}
function getFlisak() {
  return [
    {
      title: 'Flisak',
      opis: 'Rzeki w Imperium są ważnymi szlakami komunikacyjnymi i handlowymi. łączą większość głównych miast w kraju. Transportem rzecznym zajmują się flisacy, wożąc pasażerów i towary po niemal całym Imperium. Niektórzy podróżują nawet do Kisleva. Rzeki, choć bezpieczniejsze od mrocznych leśnych ścieżek, nic są całkowicie wolne od zagrożeń. Wiele szlaków rzecznych przecina dzikie tereny. Flisacy stale muszą mieć się na baczności, chroniąc podróżnych i ładunek przed atakami piratów na wodzie lub rozbójników na lądzie. Doświadczeni flisacy są pomysłowi i odważni. Świetnie radzą sobie z nawigacją i sterowaniem łodzią. Potrafią też sprawnie posługiwać się bronią.',
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
      umiejetnosci: ['Nawigacja', 'Pływanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Wioślarstwo', 'Żeglarstwo'],
      wyborUmiejetnosciProfesji: [['Mocna głowa', 'Plotkowanie'], ['Sekretny język(łowców)', 'Znajomość języka(kislevski)'], ['Wiedza(imperium)', 'Wiedza(kislev)']],
      zdolnosci: ['Obieżyświat', 'Wyczucie kierunku'],
      wyposazenie:'lekki pancerz(skórzana kurta), łódź wiosłowa'
    }
  ];
}
function getGiermek() {
  return [
    {
      title: 'Giermek',
      opis: 'Giermkowie towarzyszą rycerzowi w bitwie i podróży, zdobywając doświadczenie i umiejętności przydatne w walce. Zazwyczaj wywodzą się z rodów szlacheckich, jednak rzadko ich obowiązki wykraczają poza zajęcia godne służących. Zwykle ich jedynym zadaniem jest przynoszenie jadła i napitku swoim opiekunom lub zajmowanie się rumakiem i uprzężą rycerza. Ciężka praca ma nauczyć ich pokory i wytrzymałości na trudy, a także przygotować do bycia rycerzem. Pan giermka ma obowiązek wprawiać go w sztuce wojennej, choć wielu zaniedbuje wykonywania wymaganych ćwiczeń szermierki i taktyki. Synowie wpływowych szlachciców są giermkami zaledwie przez kilka miesięcy, natomiast biedniejsi młodzieńcy muszą czekać cale lata na ceremonię pasowania. Uwagi: Jeśli przy tworzeniu Bohatera Gracza wybierzesz umiejętności wiedza (Bretonia) i znajomość języka (bretoński), Twój Bohater może pochodzić z Bretonii.',
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
      umiejetnosci: ['Jeździectwo', 'Opieka nad zwierzętami', 'Tresura', 'Unik'],
      wyborUmiejetnosciProfesji: [['Nauka(genealogia/heraldyka)', 'Wiedza(bretonia)'], ['Przekonywanie', 'Plotkowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)']],
      zdolnosci: ['Broń specjalna(kawaleryjska)', 'Etykieta', 'Silny cios'],
      wyposazenie: 'lanca, średni pancerz(kaftan kolczy, czepiec kolczy i skórzana kurta), tarcza, koń z siodłem i uprzężą'
    }
  ];
}
function getGladiator() {
  return [
    {
      title: 'Gladiator',
      opis: 'Walki gladiatorów to podobno ulubiona rozrywka ogrów. Możliwe, że brutalne walki na śmierć i życie są jedynym wkładem tej prymitywnej rasy w rozwój kultury Starego Świata. W przeszłości na arenie występowali przestępcy albo jeńcy wojenni. Wypuszczano ich grupą na środek areny otoczonej murem lub wykopanej w dole i rzucano kilka sztuk broni. Wygrywał ostatni pozostały przy życiu. Obecnie, niezależnie od wciąż wykorzystywanych skazańców i niewolników, istnieje też grupa zawodowych gladiatorów, którzy szukają na arenie bogactwa i sławy. Inni walczą jedynie po to. by przeżyć jak najdłużej, wśród wrzasków gawiedzi żądnej ich krwi. Najlepsi gladiatorzy zdobywają pokaźny majątek (z nagród oraz zakładów, jakie towarzyszą każdej walce). Gladiatorzy-niewolnicy mogą dzięki temu wykupić sobie wolność.',
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
      umiejetnosci: ['Unik', 'Zastraszanie'],
      zdolnosci: ['Broń specjalna(parująca)', 'Silny cios'],
      wyborZdolnosciProfesji: [['Bardzo silny', 'Odporność psychiczna'], ['Broń specjalna(dwuręczna)', 'Broń specjalna(korbacz)'], ['Rozbrajanie', 'Zapasy'], ['Szybkie wyciągnięcie', 'Morderczy atak']],
      wyposazenie: 'korbacz albo broń dwuręczna, kastet, średni pancerz(kaftan kolczy i skórzana kurta), tarcza albo puklerz'
    }
  ];
}
function getGoniec() {
  return [
    {
      title: 'Goniec',
      opis: 'Krasnoludzkie twierdze w Górach Krańca Świata łączy skomplikowana sieć podziemnych korytarzy, zwana Undgrin Ankor. Łączność między fortecami zapewniają gońcy. Są to doskonale wyszkoleni młodzi biegacze, którzy doręczają wiadomości zapisane krasnoludzkim pismem runicznym. W ciągu ostatnich kilkuset lat praca gońca stała się jeszcze bardziej niebezpieczna. Muszą unikać wszędobylskich goblinów. Nadkładają drogi, omijając zablokowane korytarze i eksplorując dzikie, podziemne obszary. Często muszą podróżować na powierzchni ziemi. Najsilniejsi i najbardziej wytrzymali gońcy są wykorzystywani do przekazywania wiadomości między fortecami krasnoludów w górach a koloniami w głębi Imperium.',
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

      umiejetnosci: ['Nawigacja', 'Pływanie', 'Sekretne znaki(zwiadowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik'],
      zdolnosci: ['Błyskawiczne przeładowanie', 'Chodu!', 'Wyczucie kierunku'],
      wyborZdolnosciProfesji: [['Bardzo szybki', 'Szósty zmysł'], ['Niezwykle odporny', 'Bardzo silny']],
      wyposazenie: 'kusza i 10 bełtów, lekki pancerz(skórzana kurta), mikstura leczenia, talizman szczęścia'
    }
  ];
}
function getGornik() {
  return [
    {
      title: 'Górnik',
      opis: 'Granice Imperium wyznaczają góry. Na wchodzie ciągnie się grzbiet Gór Krańca Świata, na południu leżą Góry Czarne, a na zachodzie Góry Szare. Pomimo zagrożenie ze strony goblinów i innych podziemnych stworów, ludzie i krasnoludy od niepamiętnych czasów pracowali w górskich kopalniach. Górnicy wydobywają złoto, srebro, kamienie szlachetne, ale przede wszystkim żelazo i rudy różnych metali. Inni poszukują złóż na powierzchni, szczególnie w Górach Środkowych, na granicy między prowincjami Hochland i Ostland. Mimo iż te pokryte lasami góry znajdują się w całości na terenach Imperium, są schronieniem dla trolli, zwierzoludzi i innych plugawych stworzeń. Przeżycie w takich warunkach wymaga nie lada wysiłku i umiejętności.',
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

      umiejetnosci: ['Nawigacja', 'Opieka nad zwierzętami', 'Spostrzegawczość', 'Wspinaczka'
      ],
      wyborUmiejetnosciProfesji: [['Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)'], ['Ukrywanie się', 'Powożenie'], ['Wycena', 'Sztuka przetrwania']],
      zdolnosci: ['Broń specjalna(dwuręczna)', 'Wyczucie kierunku'],
      wyborZdolnosciProfesji: [['Niezwykle odporny', 'Urodzony wojownik']],
      wyposazenie: 'broń dwuręczna(dwuręczny kilof), lekki pancerz(skórzana kurta), kilof, łopata, latarnia sztormowa, olej do latarni'
    }
  ];
}
function getGuslarz() {
  return [
    {
      title: 'Guślarz',
      opis: 'Guślarze potrafią rzucać czary nie mając formalnego wykształcenia w sztukach magicznych. Tworzą zaklęcia, używając instynktu, sztuczek i wykorzystując zakorzenione wśród ludzi przesądy. Choć czasem nie zdają sobie z tego sprawy, za każdym razem, gdy korzystają z magii, ryzykują zwróceniem na siebie uwagi demonów i innych istot nie z tego świata. Z tego powodu stają się celem poszukiwań i prześladowań ze strony łowców czarownic. Niektórzy guślarze decydują się na dołączenie do jednego z Kolegiów Magii. Inni próbują ukrywać swój dziki talent, zamieszkując z dala od ludzkich osad. Zwykle nie jest to najrozsądniejszy wybór.',
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
      umiejetnosci: ['Przeszukiwanie', 'Splatanie magii', 'Spostrzegawczość', 'Wykrywanie magii'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Hipnoza'], ['Opieka nad zwierzętami', 'Targowanie'], ['Oswajanie', 'Rzemiosło(aptekarstwo)'], ['Przekonywanie', 'Zastraszanie']],
      zdolnosci: ['Gusła', 'Magia prosta(gusła)'],
      wyposazenie:'mikstura leczenia, płaszcz z kapturem'
    }
  ];
}
function getHienaCmentarna() {
  return [
    {
      title: 'Hiena Cmentarna',
      opis: 'Mimo pewnych podobieństw do porywaczy zwłok, hieny cmentarne różnią się od nich w zasadniczej kwestii. Bardziej niż trupami interesują się kosztownościami, jakie można znaleźć w grobowcach i kryptach. Mimo iż obecnie rzadko można znaleźć w grobach cenne przedmioty, to jednak istnieje sporo starożytnych nekropolii, które zawierają bezcenne skarby. Hieny cmentarne specjalizują się w odkrywaniu takich miejsc i ich plądrowaniu. Sekretne krypty znajdują się zazwyczaj w niedostępnych miejscach i bywają zabezpieczone pułapkami. Cmentarze w Imperium, uznawane za ziemię poświęconą, strzeżone są przez miejscowych strażników. Wejście na teren nekropolii może więc okazać się bardzo ryzykowne. Groby dostojników i władców mieszczą się w katakumbach świątyń i w miejscach strzeżonych nie tylko przez ludzi. Niewiele hien cmentarnych przeżywa na tyle długo, by uzbierać wielką fortunę.',
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

      umiejetnosci: ['Czytanie i pisanie', 'Zastraszanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Wspinaczka', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Otwieranie zamków', 'Skradanie się'], ['Ukrywanie się', 'Sztuka przetrwania'], ['Wiedza(imperium)', 'Sekretne znaki(złodziei)'], ['Znajomość języka(eltharin)', 'Znajomość języka(khazalid)', 'Znajomość języka(klasyczny)']],
      wyborZdolnosciProfesji: [['Szczęście', 'Szósty zmysł'], ['Wykrywanie pułapek', 'Grotołaz']],
      wyposazenie:'lekki pancerz(skórzana kurta), łom, latarnia, olej do latarni, 10 metrów liny, 2 worki'
    }
  ];
}
function getKanciarz() {
  return [
    {
      title: 'Kanciarz',
      opis: 'Kanciarze kierują się swoistym życiowym mottem: jeśli nie musisz, nie pracuj uczciwie. Sprytem i gładkimi słówkami próbują zdobyć możliwie najwyższą pozycję w hierarchii przestępców. Niektórzy pracują jako przewodnicy po najlepszych oberżach i zamtuzach w mieście. Inni parają się szulerstwem lub fałszerstwami. Kanciarz woli posługiwać się rozumem niż mieczem. Zawsze ma na podorędziu kilka wymyślonych opowiastek i wykrętów. Niektórzy kanciarze działają wyłącznie na dobrze sobie znanym terenie. Inni podróżują od osady do osady, zarabiając na wyrafinowanych szwindlach, a potem błyskawicznie znikają z miasta. Najlepsi kanciarze nie oszukują, tylko tworzą rzeczywistość. Nawet ich ofiary nie wiedzą, że padły ofiarą przekrętu.',
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
      umiejetnosci: ['Gadanina', 'Przekonywanie', 'Spostrzegawczość', 'Wycena', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Hazard', 'Sekretne znaki(złodziei)'], ['Kuglarstwo(aktorstwo)', 'Kuglarstwo(gawędziarstwo)'], ['Plotkowanie', 'Targowanie'], ['Przeszukiwanie', 'Sekretny język(złodziejski)']],
      zdolnosci: ['Przemawianie'],
      wyborZdolnosciProfesji: [['Chodu!', 'Łotrzyk'], ['Szczęście', 'Szósty zmysł']],
      wyposazenie: 'ubranie najlepszej jakości albo zestaw kości do gry albo talia kart, 1k10 zk'
    }
  ];
}
function getKozakKislevski() {
  return [
    {
      title: 'Koza kislevski',
      opis: 'Kozacy należeli do plemienia Ungolów, które zajmowało tereny na północny wschód od imperium. Plemię ze wschodu. zwane Gospodarami, najechało ich ziemie. podbiło lud Ungołów i założyło państwo Kislev. W tej wojnie Kozacy walczyli po stronie Gospodarów jako najemnicy przeciwko pozostałym Ungolom. Ich niezwykły styl walki wywarł spore wrażenie na starszyźnie Gospodarów, Od tamtego czasu regimenty Kozaków służą jako gwardia Carów Kisleva. Obecnie Kozacy nie są już odrębnym plemieniem. Lecz stanowią elitarną jednostkę bojową, tworzoną z najlepszych wojowników pochodzących z całego Kisleva. Uzbrojeni w łuki i dwuręczne topory są niezwykle wszechstronnymi wojownikami na polu bitwy. Wielu Kozaków, zmęczonych nieustanną Wojną w ojczyźnie podróżuje po imperium, wybierając życie najemnika lub poszukiwacza przygód.',
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
      umiejetnosci: ['Mocna głowa', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik', 'Wiedza(kislev)', 'Znajomość języka(kislevski)'],
      wyborUmiejetnosciProfesji: [['Hazard', 'Targowanie']],
      zdolnosci: ['Broń specjalna(dwuręczna)', 'Morderczy atak'],
      wyposazenie: 'łuk i 10 strzał, broń dwuręczna(dwuręczny topór), średni pancerz(kolczuga, skórzana kurta i skórzane nogawice)'
    }
  ];
}
function getLesnik() {
  return [
    {
      title: 'Leśnik',
      opis: 'Leśnicy żyją zwykle w pobliżu wielkich puszcz, zajmując się ścinaniem drzew i łowiectwem dla potrzeb miejscowej ludności. Najbogatsi pracują w pobliżu wielkich posiadłości szlacheckich, zaś najodważniejsi żyją na skraju cywilizowanych obszarów, pomagając zasiedlać dzikie obszary. Leśnicy muszą zmagać się z czyhającymi w lasach bandytami, zwierzoludźmi i dziką zwierzyną. Na podorędziu mają topory, nie zawsze używane tylko do ścinania drzew. Przy tej okazji często dochodzi do zwad z elfami, które nie tolerują, ich zdaniem całkowicie niepotrzebnego, wycinania świętych lasów.',
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
      umiejetnosci: ['Sekretne znaki(łowców)', 'Sekretny język(łowców)', 'Skradanie się', 'Spostrzegawczość', 'Ukrywanie się', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Tropienie', 'Zastawianie pułapek']],
      zdolnosci: ['Broń specjalna(dwuręczna)', 'Wędrowiec'],
      wyborZdolnosciProfesji: [['Bardzo szybki', 'Niezwykle odporny']],
      wyposazenie: 'broń dwuręczna(dwuręczny topór), lekki pancerz(skórzana kurta), odtrutki'
    }
  ];
}
function getLowca() {
  return [
    {
      title: 'Łowca',
      opis: 'Chociaż od powstania Imperium minęła ponad dwa i pół tysiąca lat, niektóre rzeczy pozostają niezmienne. Minio rozwoju wiosek i rolnictwa wielkie obszary wciąż porośnięte są przez lasy pełne dzikiego zwierza. Łowcy, tak jak ich przodkowie przed wiekami, używają tych samych metod, by wytropić zwierzynę i zabić ją celnym strzałem lub złapać w sidła. Podchodzenie zwierzyny wymaga wiele odwagi, szczególnie wobec nieustannego zagrożenia ze strony potworów, jakie zamieszkują leśne ostępy. Łowcy chętnie noszą futrzane płaszcze i czapy. Przy pierwszym spotkaniu mogą wydawać- się nieokrzesani, szczególnie w opinii mieszkańców miast. Łowcy szczycą się jednak swoją niezależnością, więc niespecjalnie przejmują się opinią innych.',
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
      umiejetnosci: ['Sekretne znaki(łowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się'],
      wyborUmiejetnosciProfesji: [['Przeszukiwanie', 'Pływanie'], ['Skradanie się', 'Zastawianie pułapek']],
      zdolnosci: ['Błyskawiczne przeładowanie'],
      wyborZdolnosciProfesji: [['Strzelec wyborowy', 'Wędrowiec'], ['Szybki refleks', 'Niezwykle odporny'], ['Twardziel', 'Broń specjalna(łuk)']],
      wyposazenie: 'długi łuk i 10 strzał, 2 potrzaski albo wnyki na zwierzęta, odtrutki'
    }
  ];
}
function getLowcaNagrod() {
  return [
    {
      title: 'Łowca Nagród',
      opis: 'Łowcy nagród zajmują się tropieniem przestępców  i uciekinierów oraz doprowadzaniem ich przed oblicze sprawiedliwości. Samotny łowca nagród może wejść tam, gdzie nic nie zdziała nawet zbrojny oddział stróży prawa. To czyni ich niezwykle pożytecznymi dla władz i stróżów prawa, choć zazwyczaj bywają traktowani z pogardą. Nagrody są zwykle wyznaczane przez miejscowych władców, gildie kupieckie oraz rady miejskie. Łowcy nagród to zawodowi zabójcy, którzy przywiązują niewielką wagę do ludzkiego życia. Są całkowicie bezwzględni. Używają wszelkich dostępnych metod, by wytropić i jeśli trzeba, zabić przestępcę. Budzą strach wśród biedniejszej części społeczeństwa, gdyż znane są przypadki, gdy łowcy nagród zabijali przygodnie napotkanych chłopów. Następnie przywozili ich ciała, ogłaszając, że są to trupy poszukiwanych przestępców. Pobierali nagrodę i odjeżdżali w swoją stronę.',
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
      umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Śledzenie', 'Tropienie', 'Zastraszanie'],
      zdolnosci: ['Broń specjalna(unieruchamiająca)', 'Wędrowiec'],
      wyborZdolnosciProfesji: [['Strzał mierzony', 'Silny cios'], ['Strzelec wyborowy', 'Ogłuszanie']],
      wyposazenie: 'kusza i 10 bełtów, sieć, lekki pancerz(skórzany kaftan i skórzany hełm), kajdany, 10 metrów liny'
    }
  ];
}
function getMieszczanin() {
  return [
    {
      title: 'Mieszczanin',
      opis: 'Wraz z rozwojem miast pojawiła się nowa klasa obywateli Imperium — mieszczanie. Ich przodkowie byli zwykłymi chłopami, którzy wydobyli się z nędzy i na nowo ułożyli sobie życie w mieście. Następne pokolenie tworzy już społeczność miejską, która rządzi się innymi prawami. Mieszczanie są właścicielami kramów, drobnymi handlarzami, a także świadczą rozliczne usługi na potrzeby ludności miejskiej. Niektórzy zostają kupcami lub urzędnikami miejskimi. Nie są traktowani z pogardą, tak jak chłopstwo, ale również nie cieszą się szacunkiem, takim jak przedstawiciele szlachty. Mimo że zarazy zbierają obfite żniwo wśród obywateli mieszkających w ciasno zabudowanych dzielnicach, to żaden z nich nie chce zamienić życia w mieście na ciężką harówkę na wsi. Dla nich życie w mieście to jedyna szansa, by wybić się ponad nędzny, chłopski stan.',
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
      umiejetnosci: ['Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wycena', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Czytanie i pisanie'], ['Wiedza(imperium)', 'Mocna głowa'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
      zdolnosci: ['Żyłka handlowa'],
      wyborZdolnosciProfesji: [['Błyskotliwość', 'Charyzmatyczny']],
      wyposazenie: 'ubranie dobrej jakości, liczydło, latarnia'
    }
  ];
}
function getMytnik() {
  return [
    {
      title: 'Mytnik',
      opis: 'Praca poborcy podatkowego to niewdzięczny zawód. Na terenach wiejskich w zasadzie oznacza to wyrok śmierci. Mytnicy mieszkają w stanicach przy drodze, pobierając myto od przejeżdżających podróżnych. Pieniądze przeznaczane są głównie na naprawę i utrzymanie dróg w Imperium, ale to nie powstrzymuje ich użytkowników przed znieważaniem, biciem, a czasem nawet zabijaniem mytników. Na domiar złego, stanice poborców stanowią ulubiony cel ataków rozbójników i banitów. Profesja mytnika jest więc bardzo niebezpiecznym zajęciem. Mimo stosunkowo wysokich zarobków, niewielu ludzi pracuje długo w tym zawodzie.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Unik', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
      wyborZdolnosciProfesji: [['Szybki refleks', 'Strzelec wyborowy']],
      wyposazenie: 'kusza i 10 bełtów, średni pancerz(kaftan kolczy i skórzany kaftan), tarcza, zamykana na kłódkę skrzynia, 1k10zk'
    }
  ];
}
function getNajemnik() {
  return [
    {
      title: 'Najemnik',
      opis: 'W Starym Świecie wstrząsanym nieustannie wojnami, zawsze znajdzie się praca dla wojownika, który potrafi władać orężem i kocha brzęk złotych monet. Chociaż imperium Utrzymuje potężną armię, chętnie korzysta z pomocy kompanii najemników. Wynajmują ich także miejscowi władcy i bogaci kupcy. Wśród najemników trafiają się młodzi awanturnicy, ale także zawodowi żołnierze, weterani wielu bitew. Pochodzą z różnych regionów Imperium, ale najsłynniejsi przybywają z Tilei. Wszyscy najemnicy marzą o szybkim zdobyciu majątku, jednak większość dorabia się jedynie bezimiennej mogiły na koniec krótkiego życia. Uwagi: Jeśli w trakcie tworzenia Bohatera Gracza wybierzesz umiejętność wiedza (Tilea) i znajomość języka (tileański), Twój Bohater może pochodzić z Tilei.',
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
      umiejetnosci: ['Sekretny język(bitewny)', 'Unik'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Hazard'], ['Plotkowanie', 'Targowanie'], ['Powożenie', 'Jeździectwo'], ['Spostrzegawczość', 'Przeszukiwanie'], ['Wiedza(bretonia)', 'Wiedza(kislev)', 'Wiedza(tilea)'], ['Znajomość języka(tileański)', 'Pływanie']],
      wyborZdolnosciProfesji: [['Błyskawiczne przeładowanie', 'Silny cios'], ['Rozbrajanie', 'Szybkie wyciągnięcie'], ['Strzał mierzony', 'Ogłuszanie']],
      wyposazenie: 'kusza i 10 bełtów, średni pancerz(kaftan kolczy i skórzana kurta), tarcza, mikstura lecznicza'
    }
  ];
}
function getOchotnik() {
  return [
    {
      title: 'Ochotnik',
      opis: 'Ochotnicy tworzą lokalne oddziały straży miejskiej. Są to głównie chłopi z okolicznych wiosek. Zobowiązują się do służby w armii przez pewien okres w ciągu roku - zazwyczaj siedem dni - w trakcie którego odbywają ćwiczenia wojskowe. Poszczególne drużyny ochotnicze odbywają wspólne Ćwiczenia na wypadek zwołania pospolitego ruszenia. Nawet tak krótki okres służby może zwiększyć szanse przeżycia na przesiąkniętych krwią polach bitew Starego Świata. Dowódcy drużyn ochotniczych są zazwyczaj weteranami wojskowymi albo najemnikami. Niektóre kompanie ochotnicze muszą zapewnić swoim żołnierzom ekwipunek i uzbrojenie, inne są wyposażane przez lokalne władze. Oznacza to, że niektórzy z ochotników pojawiają się na ćwiczeniach w jednolitych mundurach i z bronią, natomiast inni mają  na sobie jedynie zwykle odzienie i łuki myśliwskie.',
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
      umiejetnosci: ['Opieka nad zwierzętami', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik'],
      wyborUmiejetnosciProfesji: [['Hazard', 'Plotkowanie'], ['Powożenie', 'Pływanie'], ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)']],
      zdolnosci: ['Silny cios'],
      wyborZdolnosciProfesji: [['Broń specjalna(dwuręczna)', 'Błyskawiczne przeładowanie']],
      wyposazenie: 'halabarda albo łuk i 10 strzał, lekki pancerz(skórzana kurta i skórzany hełm), mundur'
    }
  ];
}
function getOchroniarz() {
  return [
    {
      title: 'Ochroniarz',
      opis: 'Mieszkańcy Starego świata mawiają, że kupcy z Altdorfu są tak nieuczciwi, że nie ufają nawet samym sobie. Dlatego zatrudniają ochroniarzy, którzy strzegą bezpieczeństwa kupca i jego majątku. Stary Świat nie jest miejscem spokojnym, a wielkie miasta wcale nie są wyjątkiem od tej reguły. Bogaci i wpływowi kupcy zatrudniają więc osobistych ochroniarzy, którzy mają ich chronić przed złodziejami i drobnymi rzezimieszkami, Niektórzy wyglądają na oprychów (od których zresztą niewiele się różnią), ale inni często przywdziewają bogato zdobione liberie z herbem rodowym ich pana. Najbogatsi kupcy i wpływowi urzędnicy miejscy mają czasami tak liczne orszaki ochroniarzy, że przypominają prywatną gwardię.',
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
      umiejetnosci: ['Leczenie', 'Spostrzegawczość', 'Unik', 'Zastraszanie'],
      zdolnosci: ['Bijatyka', 'Broń specjalna(parująca)', 'Broń specjalna(rzucana)', 'Ogłuszanie'],
      wyborZdolnosciProfesji: [['Bardzo silny', 'Niezwykle odporny'], ['Rozbrajanie', 'Szybkie wyciągnięcie']],
      wyposazenie: 'dwa topory albo 3 noże do rzucania, kastety, lekki pancerz(skórzana kurta), puklerz'}
  ];
}
function getOprych() {
  return [
    {
      title: 'Oprych',
      opis: 'W światku przestępczym siła i brutalność oprychów są wysoko cenione. Tego rodzaju zalety przydają się przy odzyskiwaniu długów, uciszaniu zbyt gorliwego podżegacza lub eliminowaniu konkurencji. Kilka solidnych ciosów pałką zazwyczaj wystarcza. by adresat zrozumiał swój błąd, ale trudniejsze przypadki wymagają pełnego asortymentu narzędzi i bardziej brutalnych metod. W takim przypadku najlepszym wyjściem dla delikwenta jest opuszczenie miasta na jakiś czas. Cmentarze jednakże pełne są tych, którzy uwierzyli we własny spryt. Wszystkie gildie złodziei i organizacje przestępcze korzystają z usług zaufanych oprychów.',
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
      umiejetnosci: ['Hazard', 'Mocna głowa', 'Sekretny język(złodziejski)', 'Unik', 'Zastraszanie'],
      zdolnosci: ['Ogłuszanie', 'Rozbrajanie'],
      wyborZdolnosciProfesji: [['Morderczy atak', 'Zapasy'], ['Odporność na trucizny', 'Szybkie wyciągnięcie'], ['Opanowanie', 'Szybki refleks']],
      wyposazenie: 'kastety, średni pancerz(kaftan kolczy i skórzany kaftan)'
    }
  ];
}
function getPaz() {
  return [
    {
      title: 'Paź',
      opis: 'Paź jest osobistym służącym bogatego mieszczanina, kupca lub szlachcica, a czasem też pełni rolę adiutanta wysokiego rangą oficera wojskowego. Do jego obowiązków należy opieka nad odzieniem, uczesaniem i wygodą pana. Gdy pada deszcz paź natychmiast podaje płaszcz i kapelusz. Na uroczysty bal musi dobrać odpowiedni strój. Dobrze wyszkolony paź jest nieocenioną pomocą dla każdego szlachcica, który dba o swój wygląd, W porównaniu do służących ich życie wydaje się rajem, jednakże wielu paziów nienawidzi swoich zadufanych mocodawców. Kobiety, które usługują swoim paniom, nazywa się służkami.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Gadanina', 'Nauka(genealogia/heraldyka)', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)']],
      zdolnosci: ['Etykieta'],
      wyborZdolnosciProfesji: [['Opanowanie', 'Charyzmatyczny'], ['Żyłka handlowa', 'Obieżyświat']],
      wyposazenie: '2 komplety ubrań najlepszej jakości, liberia, perfumy, mieszek'
    }
  ];
}
function getPodzegacz() {
  return [
    {
      title: 'Podżegacz',
      opis: 'Większość obywateli Imperium ma niewiele do powiedzenia w kwestii polityki. Stanowieniem i egzekwowaniem prawa zajmują się Imperator i elektorzy, przy wsparciu rozmaitych świątyń (wśród których najważniejszą rolę pełnią kulty Sigmara i Ulryka). Niemniej jednak w miastach Imperium dość częstym widokiem są różnego rodzaju działacze polityczni. Podżegacze agitują w rozmaitych sprawach, rozdają ulotki, a takie wygłaszają płomienne przemowy i apele, podburzając okoliczną ludność. W większości przypadków są ignorowani przez straż i władze. Jednak bardziej aktywni podżegacze - szczególnie tacy, którym udało się utrafić w czuły punkt niezadowolonych chłopów i mieszczan - mogą być uznani za niebezpiecznych przestępców, winnych zakłócania porządku publicznego. Tacy podżegacze bywają prześladowani przez miejskie straże, oskarżani o herezję przez lokalnych kapłanów lub wydawani w ręce łowców czarownic. Pomimo wielkiego ryzyka podżegacze wciąż działają. Niektórzy naprawdę wierzą w „sprawę”, za którą agitują, chociaż trafiają się też żądni władzy cynicy, równie występni jak ci, przeciw którym się opowiadają. ',
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
      umiejetnosci: ['Czytanie i pisanie', 'Przekonywanie', 'Spostrzegawczość', 'Ukrywanie się', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Nauka(historia)', 'Plotkowanie'], ['Nauka(prawo)', 'Wiedza(imperium)'], ['Znajomość języka(bretoński)', 'Znajomość języka(tileański)']],
      zdolnosci: ['Chodu!', 'Przemawianie'],
      wyborZdolnosciProfesji: [['Opanowanie', 'Bijatyka']],
      wyposazenie: 'lekki pancerz(skórzana kurta), ubranie dobrej jakości, 2k10 ulotek różnej treści'
    }
  ];
}
function getPorywaczZwlok() {
  return [
    {
      title: 'Porywacz zwłok',
      opis: 'Przedstawiciele medycznych i czarodziejskich profesji potrzebują stałych dostaw świeżych zwłok, zarówno dla celów naukowych, jak i dla hardziej mrocznych potrzeb. Zdobycie ich w sposób zgodny z prawem jest trudne, dlatego czarodzieje i medycy muszą korzystać z usług porywaczy zwłok. Jest to niewdzięczna praca, ale dość dobrze płatna. Najlepsze, czyli najświeższe ciała są sprzedawane po bardzo wysokich cenach. Ale ich zdobycie łączy się z ogromnym ryzykiem. Strażnicy, kapłani Morra i łowcy czarownic bacznie pilnują cmentarzy i surowo karzą wszelkich intruzów.',
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
      umiejetnosci: ['Powożenie', 'Przeszukiwanie', 'Sekretne znaki(złodziei)', 'Skradanie się', 'Spostrzegawczość', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie']],
      zdolnosci: ['Chodu!', 'Odporność na choroby'],
      wyborZdolnosciProfesji: [['Łotrzyk', 'Odporność psychiczna']],
      wyposazenie: 'latarnia, olej do latarni, kilof, łopatak, worek'
    }
  ];
}
function getPoslaniec() {
  return [
    {
      title: 'Posłaniec',
      opis: 'Wobec ogromnych odległości jakie dzielą główne miasta i zamki Imperium, konni posłańcy zapewniają najlepszy sposób przekazywania wiadomości. Z ich usług korzysta szlachta, kupcy i dowódcy wojskowi. Nieustraszeni samotnic wyruszają w drogę, wierząc, ze dzięki szybkości konia i własnemu sprytowi uda im się uniknąć zagrożeń. Często korzystają z pomocy strażników dróg, lecz nie wszędzie i nie zawsze jest to możliwe. Choć są jedynie dostarczycielami informacji, zdarza się, że po przekazaniu szczególnie złych wiadomości, nieszczęsnego posłańca spotyka smutny koniec.',
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
      umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Pływanie', 'Sekretne znaki(zwiadowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Wiedza(imperium)', 'Wiedza(jałowa kraina)', 'Plotkowanie']],
      zdolnosci: ['Obieżyświat', 'Wyczucie kierunku'],
      wyposazenie: 'lekki pancerz(skórzana kurta), tarcza, koń z siodłem i uprzężą(albo kuc dla niziołków), tuba do mapy'
    }
  ];
}
function getPrzemytnik() {
  return [
    {
      title: 'Przemytnik',
      opis: 'Działalność handlowa w portach i miastach Starego Świata podlega rozmaitym regulacjom prawnym i podatkowym. Imperialni poborcy podatkowi, mytnicy, miejscowi władcy. gildie rzemieślnicze i kupieckie, a nawet rozbójnicy i gildie złodziejskie - wszyscy próbują zarobić na kupcach. Podatki i tak są wysokie, a jeszcze trzeba płacić haracz piratom lub grasującym po drogach rozbójnikom. W wielkich portach zwłaszcza w Marienburgu, opodatkowane jest prawie wszystko, włącznie z ludźmi, czasem nawet po kilka razy. Nic więc dziwnego, że działalność przemytnicza rozwija się na coraz szerszą skalę. Przemyt towarów i ludzi jest zakazany prawem, ale dla większości mieszkańców imperium nie stanowi to znaczącej przeszkody. W ich opinii prawdziwymi złodziejami są miejscy urzędnicy i poborcy podatkowi.',
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
      umiejetnosci: ['Pływanie', 'Powożenie', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Targowanie', 'Wioślarstwo', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Sekretny język(złodziejski)'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Sekretne znaki(złodziei)']],
      wyborZdolnosciProfesji: [['Żyłka handlowa', 'Łotrzyk']],
      wyposazenie: 'lekki pancerz(skórzana kurta), koń pociągowy i wóz albo łódź wiosłowa, 2 pochodnie'
    }
  ];
}
function getPrzepatrywacz() {
  return [
    {
      title: 'Przepatrywacz',
      opis: 'Przepatrywacze są doświadczonymi przewodnikami, którzy przeszukują teren dla potrzeb podróżujących oddziałów wojskowych i karawan kupieckich. Przez cały czas trwania podróży muszą utrzymywać stan wzmożonej czujności, nasłuchując i wypatrując zasadzek oraz zagrożeń. Ponieważ zazwyczaj działają w pojedynkę, muszą być samowystarczalni opanowani. Przepatrywacze wierzą swojemu instynktowi i samodzielnie podejmują decyzje, gdyż na szlaku nie mają do kogo zwrócić się o pomoc. Większość działa na dobrze im znanym obszarze, w pełni wykorzystując doskonałą orientacje w terenie. Nieliczni zajmują się. przepatrywaniem nieznanych szlaków i badaniem dzikich krain. Ich wynagrodzenie jest zazwyczaj dość wysokie, ale narażają się na duże ryzyko.',
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
      umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie'],
      zdolnosci: ['Broń specjalna(unieruchamiająca)', 'Wyczucie kierunku'],
      wyborZdolnosciProfesji: [['Opanowanie', 'Bardzo silny']],
      wyposazenie: 'łuk i 10 strzał, albo kusza i 10 bełtów, bicz albo arkan, sieć, lekki pancerz(skórzana kurta), tarcza, koń z siodłem i uprzężą, 10 metrów liny'}
  ];
}
function getPrzewoznik() {
  return [
    {
      title: 'Przewoźnik',
      opis: 'W Starym Świecie wiele osiedli leży nad brzegami rzek, przecinające kraj szlaki wodne są tak sama ważne dla handlu i komunikacji, jak drogi na lądzie. Przewoźnicy za drobną opłatą przeprawiają przez rzeki pasażerów i towary. Zazwyczaj korzystają z płaskodennych promów lub barek, które z łatwością przepływają nad mieliznami i mają sporą ładowność. Przewoźnicy którzy działają w mniej cywilizowanych terenach, zawsze trzymają pod ręką nabite garłacze, ze względu na stałe zagrożenie ze strony rozbójników i piratów. Wielu z nich to zwykli naciągacze, którzy zmieniają cenę za przeprawę, zależnie od szacowanej majętności podróżnych i od tego, jak desperacko chcą oni przedostać się na drugi brzeg. Ucieczka przed pościgiem może oznaczać nawet podwójną albo potrójną stawkę. ',
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
      umiejetnosci: ['Pływanie', 'Przekonywanie', 'Spostrzegawczość', 'Targowanie', 'Wiedza(imperium)', 'Wioślarstwo'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Zastraszanie'], ['Wycena', 'Sekretny język(łowców)']],
      zdolnosci: [],
      wyborZdolnosciProfesji: [['Broń specjalna(palna)', 'Bijatyka'], ['Strzelec wyborowy', 'Charyzmatyczny']],
      wyposazenie: 'kusza i 10 bełtów albo garłacz z zapasem amunicji na 10 strzałów, lekki pancerz(skórzany kaftan)'
    }
  ];
}
function getRybak() {
  return [
    {
      title: 'Rybak',
      opis: 'Rybacy utrzymują się z połowów Mieszkają w niewielkich wioskach, głównie na wybrzeżu Nordlandu. skąd wypływają na Morze Szponów w niedużych łodziach, nie zważając na nieustające ryzyko ze strony piratów. Rybacy żyją równie w głębi lądu, w małych osadach nad brzegami rzek. Są to osobnicy z natury samotni i nienależni. Na wodzie decyzja szypra jest ostateczna. Temperament i niezależność rybaków są jednym z powodów, dla których portowe tawerny należą do naprawdę niebezpiecznych miejsc. Uwagi: Jeśli w trakcie tworzenia Bohatera Gracza wybierzesz umiejętność wiedza Jałowa Kraina), Twój Bohater  może pochodzić z okolic wielkiego portu w Marienburgu.',
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
      umiejetnosci: ['Pływanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Wioślarstwo', 'Żeglarstwo'],
      wyborUmiejetnosciProfesji: [['Mocna głowa', 'Targowanie'], ['Nawigacja', 'Rzemiosło(handel)'], ['Wiedza(imperium)', 'Wiedza(jałowa kraina)'], ['Znajomość języka(staroświatowy)', 'Znajomość języka(norski)']],
      wyborZdolnosciProfesji: [['Twardziel', 'Błyskotliwość'], ['Wyczucie kierunku', 'Bijatyka']],
      wyposazenie: 'włócznia, sieć, lina z kotwiczką'
    }
  ];
}
function getRzecznikRodu() {
  return [
    {
      title: 'Rzecznik rodu',
      opis: 'Władcy wielkich elfich rodów kupieckich nie orientują się zbytnio w realiach codziennego życia w Starym Świecie. Z ich punktu widzenia, ludzie żyją i umierają tak szybko, że trudno jest śledzić na bieżąco aktualne wydarzenia i zmiany w polityce Imperium, Jeśli potrzebują jakiejś informacji, zwracają się więc do rzeczników swoich rodów. Są to młode elfy, które reprezentują interesy rodów kupieckich w kontaktach z resztą świata. Zawierają transakcje, podpisują kontrakty i odpowiadają za całokształt kontaktów handlowych z ludźmi, szczególnie w największych ośrodkach handlowych w Altdorfie, Nuln i Marienburgu. Jednak nawet cierpliwość elfów ma swoje granice. Nic zatem dziwnego, że tak wielu rzeczników rezygnuje ze swojego stanowiska i wybiera znacznie ciekawsze życie poszukiwacza przygód.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Plotkowanie', 'Pływanie', 'Przekonywanie', 'Rzemiosło(handel)', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Wiedza(imperium)', 'Wiedza(jałowa kraina)']],
      wyborZdolnosciProfesji: [['Obieżyświat', 'Żyłka handlowa']],
      wyposazenie: 'lekki pancerz(skórzana kurta), 2 komplety ubrań dobrej jakości, przybory do pisania'
    }
  ];
}
function getRzemieslnik() {
  return [
    {
      title: '',
      opis: 'Rzemieślnicy to fachowcy w jednej z wielu dziedzin rzemiosła, jakie znane są w Imperium. W miastach skupiają się w cechy rzemieślnicze, natomiast w wioskach cieszą się monopolem na swoje usługi. Zajmują się produkcją dóbr sprzedawanych przez kupców w całym kraju. Rzemieślnicy stanowią ważne ogniwo w gospodarce Imperium. Spośród różnych dziedzin rzemiosła najważniejsze to:  aptekarstwo, bednarstwo, garbarstwo, gotowanie, górnictwo, handel, jubilerstwo, kaligrafia, kamieniarstwo, kartografia, kowalstwo, krawiectwo, młynarstwo, piwowarstwo, płatnerstwo, rusznikarstwo, rymarstwo, stolarstwo, szkutnictwo, szewstwo, sztuka, świecarstwo, uprawa ziemi, wyrób luków, zielarstwo oraz złotnictwo. Rzemieślnicy zazwyczaj organizują się w cechy i gildie rzemieślnicze, które dziabią samodzielnie w poszczególnych miastach.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Powożenie', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Plotkowanie'],
      ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)'],
      ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)']],
      wyborZdolnosciProfesji: [['Żyłka handlowa', 'Błyskotliwość']],
      wyposazenie: 'lekki pancerz(skórzany kaftan), 1k10 zk'
    }
  ];
}
function getRzezimieszek() {
  return [
    {
      title: 'Rzezimieszek',
      opis: 'Rzezimieszek to zabijaka do wynajęcia. Za odpowiednią cenę może pobić albo nastraszyć każdego, kogo wskaże mu zleceniodawca. W większości przypadków rzezimieszki ukrywają, że zostali wynajęci, wynajdując najbardziej nieprawdopodobne preteksty, by wszcząć bójkę z wyznaczoną ofiarą, Zleceniodawca zazwyczaj dyskretnie obserwuje upokorzenie swojego rywala lub wroga, czerpiąc zadowolenie z jego cierpienia. Poturbowanie kilku mieszczuchów jest stosunkowo tanie. Cena może wzrosnąć w zależności od umiejętności rzezimieszka, a także od wpływów ofiary oraz wymaganego przez zleceniodawcę stopnia w uszkodzenia jej ciała. większość rzezimieszków nie para się zabójstwem, zostawiając to gildii skrytobójców, ale za odpowiednią cenę można zamówić również i taką usługę. Nie trzeba dodawać, że strażnicy uważnie obserwują najbardziej znanych rzezimieszków, którzy z tego powodu zazwyczaj nie pozostają długo w jednym miejscu.',
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
      umiejetnosci: ['Jeździectwo', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie']],
      zdolnosci: ['Bijatyka', 'Morderczy atak', 'Ogłuszanie', 'Silny cios'],
      wyborZdolnosciProfesji: [['Groźny', 'Charyzmatyczny'], ['Rozbrajanie', 'Szybkie wyciągnięcie']],
      wyposazenie: 'średni pancerz(kaftan kolczy i skórzana kurta), tarcza, koń z siodłem i uprzężą'
    }
  ];
}
function getSkryba() {
  return [
    {
      title: 'Skryba',
      opis: 'Znaczna część obywateli Imperium nie potrafi czytać ani pisać. Profesja skryby cieszy się więc dużym poważaniem. Prawie każdy ośrodek władzy, jednostka wojskowa lub zakon religijny potrzebuje znacznej liczby skrybów do prowadzenia ksiąg i rachunków. Istnieją także skrybowie, którzy pracują dla potrzeb zwykłych ludzi, pisząc za nich listy lub odczytując otrzymane wiadomości. Skrybowie są ludźmi wykształconymi i oczytanymi. Wielu z nich decyduje się na bardziej zaszczytną karierę prawnika albo uczonego. Niektórzy, znużeni czytaniem o przygodach innych ludzi, wyruszają na szlak, by zapisać w kronikach ludzkości rozdział o własnych wyczynach. Zazwyczaj znają kilka języków obcych, są zatem doskonałymi towarzyszami dalekich wypraw poza granice imperium.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Rzemiosło(kaligrafia)', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Wiedza(imperium)', 'Znajomość języka(klasyczny)'],
      wyborUmiejetnosciProfesji: [['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)'], ['Wiedza(imperium)', 'Plotkowanie'], ['Znajomość języka(staroświatowy)', 'Znajomość języka(tileański)']],
      zdolnosci: ['Poliglota'],
      wyposazenie: 'nóż, dwie świece woskowe, 5 zapałek, ilustrowana księga, przybory do pisania, wosk do pieczęci'
    }
  ];
}
function getSluga() {
  return [
    {
      title: 'Sługa',
      opis: 'Niewiele osób w Imperium zajmuje niższe miejsce w hierarchii społecznej od sług. Ich praca, choć potrzebna, zazwyczaj jest traktowana z pogardą przez bogatszych ludzi. Dla posługacza, stajennego albo dziewki służebnej. ucieczka od ciężkiego życia wydaje się niemożliwością. Cały dzień, a często tez i noc, spędzają na znojnej pracy. Słudzy znajdują zatrudnienie głównie u szlachciców; karczmarzy i mistrzów gildii. Nieliczni potrafią wywalczyć sobie lepszą pozycję, ale jest to bardzo trudne. Nikt przecież nie zwraca uwagi na stajennego lub dziewkę w karczmie. Wielu służących ucieka więc od gnębiących ich pracodawców, wybierając pozornie łatwiejsze życie na szlaku.',
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
      umiejetnosci: ['Gadanina', 'Plotkowanie', 'Spostrzegawczość', 'Unik'],
      wyborUmiejetnosciProfesji: [['Czytanie i pisanie', 'Zwinne palce'], ['Opieka nad zwierzętami', 'Rzemiosło(gotowanie)'], ['Powożenie', 'Przeszukiwanie'], ['Targowanie', 'Wycena']],
      wyborZdolnosciProfesji: [['Niezwykle odporny', 'Szybki refleks'], ['Czuły słuch', 'Chodu!'], ['Etykieta', 'Twardziel']],
      wyposazenie: 'ubranie dobrej jakości, manierka, krzesiwo i hubka, latarnia sztormowa, olej do latarni'
    }
  ];
}
function getStraznik() {
  return [
    {
      title: 'Strażnik',
      opis: 'Początkowo obowiązek utrzymania porządku w mieście spoczywał na władzach cywilnych, które w tym celu korzystały z oddziałów straży i gwardii miejskiej, jednak gdy poziom korupcji przekroczył wszelkie granice przyzwoitości, Imperator powierzył to zadanie władzom wojskowym. Obecnie obowiązki straży miejskiej pełnią Żołnierze z garnizonów wojskowych. Dzięki temu zmalało łapownictwo, choć w armii również zdarzają się przypadki przekupstwa. Strażnicy są odpowiedzialni za utrzymywanie porządku i przestrzeganie prawa, mogą także aresztować podejrzanych. W mniejszych osadach służą również jako straż pożarna. Dla niektórych żołnierzy służba garnizonowa jest tylko tymczasowym przydziałem. Dla innych to zajęcie na cale życie.',
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
      umiejetnosci: ['Nauka(prawo)', 'Plotkowanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Tropienie', 'Unik', 'Zastraszanie'],
      zdolnosci: ['Ogłuszanie', 'Silny cios'],
      wyborZdolnosciProfesji: [['Opanowanie', 'Błyskotliwość'], ['Rozbrajanie', 'Błyskotliwość']],
      wyposazenie: 'lekki pancerz(skórzana kurta), mudnur, latarnia na drągu, olej do latarni'
    }
  ];
}
function getStraznikDrog() {
  return [
    {
      title: 'Strażnik Dróg',
      opis: 'Imperium wciąż pokrywają rozległe połacie dzikich obszarów. Chociaż miasta i porty łączy sieć dróg szlaków wodnych, to jednak większość ziem porastają gęste lasy, w których kryją się rozbójnicy, zwierzoludzie, mutanci i gobliny, Mimo Ciągłej czujności strażników dróg, nawet zwykła podróż z jednego miasta do drugiego może być niebezpieczną przygodą. Owi konni stróże prawa patrolują drogi i ścieżki leśne na terenie całego Imperium, strzegąc bezpieczeństwa podróżnych i kupieckich karawan. Z uwagi na swoją niewidką liczebność, strażnicy dróg współpracują z miejscowymi ochotnikami i żołnierzami, zwłaszcza gdy napotkają ślady liczniejszego wroga. Jednak w większości przypadków niewielkie grupy strażników dróg muszą samodzielnie eliminować zagrożenia dla komunikacji między miastami imperium.',
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
      umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania'],
      wyborUmiejetnosciProfesji: [['Tropienie', 'Sekretne znaki(zwiadowców)'], ['Wiedza(imperium)', 'Plotkowanie']],
      zdolnosci: ['Broń specjalna(palna)'],
      wyborZdolnosciProfesji: [['Szybkie wyciągnięcie', 'Błyskawiczne przeładowanie']],
      wyposazenie: 'pistolet z 10 kulami i zapasem prochu, średni pancerz(kaftan kolczy i skórzana kurta), tarcza, lekki koń bojowy z siodłem i uprzężą(albo kuc dla niziołka), 10 metrów liny'}
  ];
}
function getStraznikPol() {
  return [
    {
      title: 'Strażnik pól',
      opis: 'Kraina Zgromadzenia jawi się przybyszom jako kraj bezpieczny i spokojny. Jest to zasługa przede wszystkim strażników pól. Niziołki patrolują granice Krainy Zgromadzenia, odpędzającą potwory i niepożądanych intruzów. Są świetnymi zwiadowcami, w pełni wykorzystując znajomość tego obszaru. Preferują atak z zaskoczenia lub z dystansu, by zniwelować przewagę wzrostu przeciwników. Kraina Zgromadzenia graniczy z Sylvanią, więc strażnicy pól mają doświadczenie w walce z ożywieńcami. Salwy kamieni miotanych przez nieustraszonych niziołków przegoniły już niejedną bandę zombi.',
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
      umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się'],
      wyborUmiejetnosciProfesji: [['Nauka(nekromancja)', 'Wiedza(imperium)']],
      wyborZdolnosciProfesji: [['Bardzo szybki', 'Błyskotliwość'], ['Strzał precyzyjny', 'Błyskawiczne przeładowanie'], ['Wędrowiec', 'Szybkie wyciągnięcie']],
      wyposazenie: 'proca z amunicją, kuc z siodłem i uprzężą, latarnia, olej do latarni, łopata'
    }
  ];
}
function getStraznikWiezienny() {
  return [
    {
      title: 'Strażnik więzienny',
      opis: 'Imperium jest krajem, w którym prawo jest respektowane. A to oznacza, miedzy innymi ogromną liczbę więzień. Pomimo wysiłków kapłanów Vereny, bogini sprawiedliwości, do więzień trafiają nie tylko przestępcy, także osoby niewinne. W mniemaniu sędziów lepsza jest nadmierna surowość niż przesadna pobłażliwość. Wiezienia w miastach to brudne, wilgotne lochy, które śmierdzą strachem, krwią i odchodami. Porządek w tych miejscach utrzymują strażnicy więzienni, którzy upokarzają i brutalnie karzą więźniów za wszelkie przejawy nieposłuszeństwa. Obce jest im poczucie sprawiedliwościowi lub uczucie litości i rzadko wysłuchują próśb bądź gróźb więźniów (choć chętnie przyjmują łapówki). Wielu z nich to brutale i sadyści którzy lubują się w zadawaniu cierpienia oddanym pod ich opiekę skazańcom.',
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
      umiejetnosci: ['Dowodzenie', 'Mocna głowa', 'Przeszukiwanie', 'Spostrzegawczość', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Zwinne palce']],
      zdolnosci: ['Broń specjalna(unieruchamiająca)', 'Odporność na choroby', 'Odporność na trucizny', 'Zapasy'],
      wyposazenie: 'jedna broń do wyboru: bolas, sieć albo arkan, butelka podłego wina, manierka'
    }
  ];
}
function getSzczurolap() {
  return [
    {
      title: 'Szczurołap',
      opis: 'Szczurołap to profesja często spotykana w Imperium. Żyją w wioskach, miastach i portach, zajmują się eliminowaniem szczurów, prawdziwej plagi obecnych czasów. Często podróżują od osady do osady, choć większe miasta mają swoje własne drużyny szczurołapów. Polują głównie na szczury, chociaż zwalczają też inne szkodniki. Mieszkający w mieście szczurołap większość czasu spędza w kanałach, brnąc przez ścieki w poszukiwaniu szczurów. To ciężka i śmierdząca robota, ale pomaga zapobiegać wybuchom zarazy.',
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
      umiejetnosci: ['Opieka nad zwierzętami', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Tresura', 'Ukrywanie się', 'Zastawianie pułapek'],
      zdolnosci: ['Broń specjalna(proca)', 'Grotołaz', 'Odporność na choroby', 'Odporność na trucizny'],
      wyposazenie: 'proca z amunicją, 4 pułapki na szczury, drąg z martwymi szczurami(1k10), mały ale zajadły pies'
    }
  ];
}
function getSzermierzEstalijski() {
  return [
    {
      title: 'Szermierz estalijski',
      opis: 'Królestwo Estalii leży na południowy zachód od Imperium. Pustkowia Chaosu są tylko legendą wśród mieszkańców tej słonecznej krainy, która nigdy nie zaznała grozy ataku krwiożerczych bestii, jak stało się to udziałem Imperium Kisleva. Mieszkańcy Estalii mają więc zupełnie inne zainteresowania, od nauki i studiów przyrodniczych, aż po rozboje i zatargi rodowe. Wszyscy Estalijczycy uwielbiają szermierkę. W każdym dużym mieście jest kilka szkól fechtunku, z których każda naucza własnego stylu walki. Większość z nich wywodzi się z nauk Mistrza Figueroa, legendarnego szermierza, który wykorzystał w szermierce najnowsze osiągnięcia nauki oraz znajomości anatomii. Kontynuatorzy jego dzieła podróżują po całym świecie, uczestnicząc w walkach i pojedynkach. Niektórzy, znudzeni własnym krajem, szukają przygód w Bretonii i Tilei. Najodważniejsi podróżują na północ, na ziemie Imperium, by skrzyżować szpady z tamtejszymi szermierzami, a także by ujrzeć kraj, który stoi na pierwszej linii walki z hordami Chaosu.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Nauka(anatomia)', 'Unik', 'Wiedza(estalia)', 'Znajomość języka(estalijski)'],
      zdolnosci: ['Broń specjalna(szermiercza)', 'Silny cios'],
      wyborZdolnosciProfesji: [['Brawura', 'Szybki refleks'], ['Szybkie wyciągnięcie', 'Morderczy atak']],
      wyposazenie: 'szpada albo rapier, ubranie najlepszej jakości, perfumy, mikstura leczenia'
    }
  ];
}
function GetSzlachcic() {
  return [
    {
      title: 'Szlachcic',
      opis: 'Szlachta stanowi najwyższą warstwę społeczną w Imperium. Utrzymuje władze, ustanawia prawa i rządzi prowincjami. Najważniejszymi rodami szlacheckimi są rodziny elektorów, a wśród nich, oczywiście, ród Imperatora. Są także setki innych, bardziej lub mniej znaczących rodzin szlacheckich, które bez przerwy rywalizują ze sobą o władze i bogactwo. Jedni próbują zbić majątek na wojnie, inni zaś parają się polityką lub handlem. Żaden ze szlachciców nie zniży się do wykonywania zwykłej, w ich oczach nikczemnej, pracy. Najbogatsi szlachcice żyją na koszt swego rodu, spędzając dnie na polowaniach, a noce na bankietach, uroczystych balach i zabawach. Jednak młodsi potomkowie rodzin szlacheckich nie mają równie łatwego życia. Zgodnie z prawem, cały majątek dziedziczy najstarszy potomek, więc pozostali sami muszą wywalczyć sobie pozycję w świecie. Czasem oznacza to konieczność zadawania się z pospólstwem i wspólnej podróży z różnego rodzaju poszukiwaczami przygód.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Jeździectwo', 'Przekonywanie', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Gadanina', 'Dowodzenie'], ['Hazard', 'Plotkowanie'], ['Mocna głowa', 'Kuglarstwo(muzykalność)']],
      zdolnosci: ['Etykieta'],
      wyborZdolnosciProfesji: [['Błyskotliwość', 'Broń specjalna(szermiercza)'], ['Broń specjalna(parująca)', 'Intrygant'], ['Szczęście', 'Przemawianie']],
      wyposazenie: 'szpada, lewak, strój szlachecki z herbem rodu, koń z siodłem i uprzężą, 1k10zk, biżuteria o wartości 6k10zk'
    }
  ];
}
function getSmieciarz() {
  return [
    {
      title: 'Śmieciarz',
      opis: 'Śmieciarze są zbieraczami odpadków. Bywają nazywani szmaciarzami lub druciarzami i są częstym widokiem w wielkich miastach Imperium, które wytwarzają najwięcej odpadów. Śmieciarze żyją z tego, co wyrzucają inni. Ciągną swoje wózki przez wioski i miasteczka, zbierając stare kości, szmaty oraz inne odpadki i wywożą je w zamian za kilka pensów lub  trochę jedzenia. Zajmują się też drobnym handlem. To, co jest śmieciem dla bogatego mieszczanina, może być skarbem dla biedaka.',
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
      umiejetnosci: ['Opieka nad zwierzętami', 'Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wiedza(imperium)', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Przekonywanie', 'Plotkowanie']],
      wyborZdolnosciProfesji: [['Opanowanie', 'Łotrzyk'], ['Twardziel', 'Odporność na choroby']],
      wyposazenie: 'wózek, 3 worki'
    }
  ];
}
function getTarczownik() {
  return [
    {
      title: 'Tarczownik',
      opis: 'W ciągu minionych lat wiele krasnoludzkich twierdz padło pod zmasowanymi atakami hord Chaosu i goblinów. Do obrony pozostałych fortec krasnoludy powołały elitarne oddziały wojowników, którzy szkolą się w walce prowadzonej pod ziemią. To właśnie oddziały tarczowników, twardych i zawziętych wojowników powstrzymują napór wrogich armii i zapewniają bezpieczeństwo swoim pobratymcom. W oddziałach tarczowników służą głównie krasnoludy, choć czasem dołączają do nich przedstawiciele innych ras, skuszeni obietnicą żołdu wypłacanego w szczerym złocie. Młode krasnoludy z Imperium często zgłaszają się do służby w oddziałach tarczowników, aby dowieść swego męstwa i wykazać się solidarnością z pobratymcami z górskich twierdz.',
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
      umiejetnosci: ['Nawigacja', 'Spostrzegawczość', 'Śledzenie', 'Unik', 'Wspinaczka'],
      zdolnosci: ['Morderczy atak', 'Ogłuszanie', 'Silny cios', 'Wyczucie kierunku'],
      wyborZdolnosciProfesji: [['Czuły słuch', 'Opanowanie']],
      wyposazenie: 'kusza i 10 bełtów, średni pancerz(kolczuga skórzana kurta i skórzane nogawice), tarcza, 10 metrów liny z kotwiczką, bukłak z wodą'
    }
  ];
}
function getUczenCzarodzieja() {
  return [
    {
      title: 'Uczeń Czarodzieja',
      opis: 'Ludzie obdarzeni talentem magicznym budzą instynktowny niepokój wśród pospólstwa. Nie bez powodu. Potrafią dokonywać rzeczy, które zaprzeczają zdrowemu rozsądkowi, jednak nie jest to dar, który łatwo kontrolować, Magiczna aura takich osób, szczególnie początkujących, przyciąga demony. Aby zapobiec nieszczęściu, czarodzieje wyszukują swoich potencjalnych następców i wysyłają ich naukę do jednego z ośmiu Kolegiów Magi. Tam młodzi uczniowie praktykują magię pod uważnym okiem mistrzów, jednocześnie zastanawiając się nad wyborem Tradycji. Niektórzy z nich służą czarodziejom, którzy odkryli i ich talent. Inni imają się różnych zajęć, by zarobić na czesne w Akademii Magii. Elfy mają, wrodzone zdolności magiczne, wiec nic muszną korzystać z ludzkich organizacji, zamiast tego ucząc się od elfich mistrzów magii. Szczegółowy opis poszczególnych Tradycji Magii znajdziesz w Rozdziale Magia.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Język tajemny(magiczny)', 'Nauka(magia)', 'Przeszukiwanie', 'Splatanie magii', 'Spostrzegawczość', 'Wykrywanie magii', 'Znajomość języka(klasyczny)'],
      zdolnosci: ['Magia prosta(tajemna)'],
      wyborZdolnosciProfesji: [['Błyskotliwość', 'Niezwykle odporny'], ['Zmysł magii', 'Dotyk mocy']],
      wyposazenie: 'kij, plecak, księga wiedzy tajemnej'
    }
  ];
}
function getWeglarz() {
  return [
    {
      title: 'Węglarz',
      opis: 'Węglarzy można spotkać w prawie każdej wiosce Imperium. Zajmują się wypalaniem drewna, uzyskując w ten sposób węgieł drzewny, opał zużywany w czasie długich, zimowych miesięcy. To brudne i niebezpieczne zajęcie, więc węglarze mieszkają zazwyczaj na odludziu. Najlepszym miejscem, ze względu na obfitość drewna, są obrzeża lasów. Bliskość puszczy sprawia, że życie węglarza nie jest zbyt bezpieczne, gdyż odosobnione chaty często padają łupem plugawych leśnych stworów. Węglarze zawsze noszą przy sobie broń, choć zwykle jest to tylko ciężka dębowa pałka lub prosta siekiera.',
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
      umiejetnosci: ['Przeszukiwanie', 'Sekretne znaki(łowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Targowanie', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Powożenie', 'Plotkowanie'], ['Wiedza(imperium)', 'Ukrywanie się']],
      zdolnosci: ['Chodu!'],
      wyborZdolnosciProfesji: [['Błyskotliwość', 'Bardzo silny']],
      wyposazenie: 'broń jednoręczna(topór albo pałka), 3 pochodnie, krzesiwo i hubka'
    }
  ];
}
function getWloczykij() {
  return [
    {
      title: 'Włóczykij',
      opis: 'Włóczykij uwielbia życie na szlaku. Zwyczajny osiadły tryb życia chłopa lub mieszczanina postrzega jako więzienie. Któż chciałby codziennie budzić się w tym samym miejscu i codziennie robić to samo? Dla włóczykija każdy dzień jest nową przygodą na szlaku życia. Czasami podejmuje się prostych prac, by zarobić kilka szylingów, ale rzadko wytrzymuje długo w jednym miejscu. Wkrótce znów rusza na szlak, zwabiony wizją przygody. Mimo iż uwielbiają podróżować, włóczykije zdają sobie sprawy z niebezpieczeństw, jakie czyhają na drodze. Dla wspólnego bezpieczeństwa podróżują więc w większych grupach. W wielu miastach i osadach włóczęgostwo jest traktowane jak przestępstwo.',
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
      umiejetnosci: ['Nawigacja', 'Plotkowanie', 'Skradanie się', 'Sztuka przetrwania'],
      wyborUmiejetnosciProfesji: [['Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Sekretne znaki(łowców)', 'Sekretne znaki(złodziei)'],
      ['Leczenie', 'Spostrzegawczość'], ['Plotkowanie', 'Sekretny język(łowców)', 'Sekretny język(złodziejski)'], ['Targowanie', 'Pływanie'], ['Wiedza(bretonia)', 'Wiedza(estalia)', 'Wiedza(kislev)', 'Wiedza(tilea)']],
      zdolnosci: ['Obieżyświat'],
      wyborZdolnosciProfesji: [['Bardzo szybki', 'Wędrowiec'], ['Strzelec wyborowy', 'Wyczucie kierunku']],
      wyposazenie: 'plecak, prowiant(1 tydzień), namiot, bukłak z wodą'
    }
  ];
}
function getWojownikKlanowy() {
  return [
    {
      title: 'Wojownik Klanowy',
      opis: 'Elfy od wieków zamieszkiwały odosobnione osady w wielkich puszczach Imperium. Wraz z rosnącym zagrożeniem ze strony Chaosu, obszarom tym zaczęła grozić zagłada. W Imperium pozostało już niewiele osad elfów. Największa z nich znajduje się w lesie Laurelorn. W cieniu olbrzymich drzew elfy toczą cichą lecz zażartą wojnę ze zwierzoludźmi i innymi potworami. Niewielkie drużyny wojowników, zwane klanami, walczą w obronie swoich ziem, próbując uchronić przed zniszczeniem ostatnie osady elfów w Imperium. Drużyny składają się ze spokrewnionych ze sobą elfów, które noszą na ubraniach godło swojego klanu. Wojownicy klanowi są świetnie wyszkolonymi łucznikami. Najczęściej atakują z dystansu lub urządzają zasadzki.',
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
      umiejetnosci: ['Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się', 'Unik', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Przeszukiwanie']],
      wyborZdolnosciProfesji: [['Błyskawiczne przeładowanie', 'Urodzony wojownik'], ['Strzelec wyborowy', 'Wędrowiec']],
      wyposazenie: 'elfi łuk i 10 strzał, lekki pancerz(skórzana kurta)'
    }
  ];
}
function getWoznica() {
  return [
    {
      title: 'Woźnica',
      opis: 'Chociaż Imperium jest potężnym krajem z liczną armią, tereny leżące poza zasięgiem cywilizacji nie są bezpieczne. Olbrzymie połacie kraju pozostają dzikie i nigdy nie były zamieszkane. Wioski, miasta i porty łączy gęsta sieć dróg, którymi podróżują powozy imperialnych kompanii przewoźniczych. Kierujący nimi woźnice muszą radzić sobie nie tylko z opłakanym stanem rzadko naprawianych traktów, ale także z częstymi napadami rozbójników, goblinów lub zwierzoludzi. Woźnice ryzykują życiem, by bezpiecznie przewieźć pasażerów  i towary do miejsca przeznaczenia, Każdy dzień jest wyścigiem z czasem, by przed zmierzchem dotrzeć do wioski lub przydrożnej karczmy. Nikt nie chce, by noc zastała go na szlaku, zwłaszcza gdy na niebie świeci księżyc Chaosu.',
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
      umiejetnosci: ['Nawigacja', 'Opieka nad zwierzętami', 'Powożenie', 'Sekretne znaki(łowców)', 'Spostrzegawczość'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Jeździectwo'], ['Plotkowanie', 'Targowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
      zdolnosci: ['Broń specjalna(palna)'],
      wyborZdolnosciProfesji: [['Szybkie wyciągnięcie', 'Obieżyświat']],
      wyposazenie: 'garłacz z zapasem amunicji na 10 strzałów, średni pancerz(kaftan kolczy i skórzana kurta), instrument muzyczny(róg woźnicy)'
    }
  ];
}
function getZabojcaTrolli() {
  return [
    {
      title: 'Zabójca trolli',
      opis: 'Krasnoludy, które zostały wygnane lub okryły się hańba, porzucają swój klan, by szukać śmierci. Polują na najstraszniejsze potwory, aby chwalebną śmiercią w walce zmazać popełnione zbrodnie. Większość dość szybko osiąga swój cel, jednak ci, którym udało się przeżyć, dołączają do niezwykłego bractwa zabójców trolli. Szukają najstraszniejszych przeciwników, a za idealnych wrogów uważane są trolle, gdyż spotkanie z nimi zazwyczaj kończy się śmiercią znacznie niniejszego i słabszego krasnoluda. Zabójcy troilli odróżniają się od innych krasnoludów. Barwią włosy na pomarańczowo, stawiają je i przycinają w czub. Noszą dziwaczne bransolety kolczyki, a ciało pokrywają wymyślnymi tatuażami. Głośno i często rozprawiają o swoich wyczynach, szczególnie przy obfitym jadle i mocnym napitku.',
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
      umiejetnosci: ['Mocna głowa', 'Unik', 'Zastraszanie'],
      zdolnosci: ['Bijatyka', 'Broń specjalna(dwuręczna)', 'Silny cios', 'Twardziel'],
      wyborZdolnosciProfesji: [['Rozbrajanie', 'Szybkie wyciągnięcie'], ['Szybki refleks', 'Niezwykle odporny']],
      wyposazenie: 'broń dwuręczna(topór), lekki pancerz(skórzany kaftan), butelka spirytusu albo gorzałki kiepskiej jakości'
    }
  ];
}
function getZarzadca() {
  return [
    {
      title: 'Zarządca',
      opis: 'Zarządcy opiekują się majątkami arystokratów i wyższej szlachty. Ich głównym zadaniem jest gospodarowanie posiadłością oraz terenami wokół niej, przede wszystkim wioskami i lasami. Wśród podległego im chłopstwa zwykle znani są z niezwykle surowego egzekwowania należności wobec ich pana, głównie podatków i opłat. Obowiązki zarządców sprawiają, że są to osoby niezbyt popularne wśród poddanych, szczególnie w czasie żniw, Jako przedstawiciele ciemiężycieli, znienawidzeni zarządcy zwykle pierwsi padają ofiarą chłopskich niepokojów i buntów.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Jeździectwo', 'Nauka(prawo)', 'Przekonywanie', 'Spostrzegawczość'],
      wyborUmiejetnosciProfesji: [['Dowodzenie', 'Nawigacja'], ['Opieka nad zwierzętami', 'Plotkowanie'], ['Zastraszanie', 'Wiedza(imperium)']],
      zdolnosci: ['Przemawianie'],
      wyborZdolnosciProfesji: [['Etykieta', 'Geniusz arytmetyczny']],
      wyposazenie: 'lekki pancerz(skórzana kurta i skórzany hełm), ubranie dobrej jakości, koń z siodłem i uprzężą'
    }
  ];
}
function getZlodziej() {
  return [
    {
      title: 'Złodziej',
      opis: 'W Imperium mieszka wielu uczciwych, ciężko pracujących ludzi. Złodzieje, którzy regularnie uszczuplają ich majątek, stawiają sobie za punkt honoru dopilnowanie, by zacni obywatele stale musieli pracować tak ciężko jak zwykle. Złodzieje są wyjątkowo wszechstronni. Podejmują się każdego zlecenia, które może im zapewnić zysk. Wśród złodziejów trafiają się szantażyści, malwersanci, defraudanci, porywacze, kieszonkowcy, skrawkarze, bydło- i koniokrady oraz początkujący włamywacze. W większości miast działają gildie złodziei, które kontrolują działalność przestępczą na swoim terenie. W dużych miastach działa zwykle kilka gildii złodziei, zaciekle rywalizujących o strefy wpływów. Czasem prowadzi to do wybuchu wojny w podziemiu przestępczym i wyeliminowaniu jednej ze stron konfliktu. Najbogatsze i najbardziej wpływowe gildie złodziei zajmują się także prowadzeniem legalnych interesów, które wykorzystują jako przykrywkę dla działalności przestępczej. Z czasem porzucają nielegalne interesy, gdy zgromadzą dostatecznie duży kapitał by wejść w szereg gildii kupieckich.',
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
      umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Ukrywanie się'],
      wyborUmiejetnosciProfesji: [['Czytanie i pisanie', 'Zwinne palce'], ['Hazard', 'Otwieranie zamków'], ['Przekonywanie', 'Wspinaczka'], ['Sekretny język(złodziejski)', 'Sekretne znaki(złodziei)'], ['Wycena', 'Charakteryzacja']],
      wyborZdolnosciProfesji: [['Geniusz arytmetyczny', 'Wykrywanie pułapek'], ['Ulicznik', 'Łotrzyk']],
      wyposazenie: 'lekki pancerz(skórzany kaftan), worek, wytrychy, 10 metrów liny'
    }
  ];
}
function getZak() {
  return [
    {
      title: 'Żak',
      opis: 'W każdym wielkim mieście Imperium znajduje się przynajmniej jeden uniwersytet. Większość z nich, między innymi Imperialna Akademia Inżynierii w Altdorfie, jest finansowana przez władze prowincji. Pierwszy imperialny uniwersytet powstał w Nuln, który do dziś jest głównym ośrodkiem szkolnictwa w Imperium, znany przede wszystkim z Imperialnej Akademii Artylerii. Żacy mogą wybierać spośród wielu kierunków studiów: od anatomii i historii, aż po inżynierię i astronomię. Wielu żaków woli jednak spędzać czas na pijatykach i zabawie w karczmach.  Zazwyczaj kończą naukę już po pierwszym roku, gdy z hukiem wylatują z uczelni. Młode elfy nie uczęszczają na ludzkie uniwersytety, zamiast tego pobierając nauki u własnych mistrzów wiedzy. Niziołki są dopuszczane do nauki na uniwersytetach, zgodnie z zapisem w Prawie Imperium, który wprowadzono pod naciskiem Starszego Krainy Zgromadzenia.',
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
      umiejetnosci: ['Czytanie i pisanie', 'Spostrzegawczość', 'Znajomość języka(klasyczny)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Przeszukiwanie'], ['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)'],
      ['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)', 'Plotkowanie'],
      ['Przekonywanie', 'Mocna głowa']],
      wyborZdolnosciProfesji: [['Błyskotliwość', 'Charyzmatyczny'], ['Etykieta', 'Poliglota'], ['Obieżyświat', 'Geniusz arytmetyczny']],
      wyposazenie: 'dwie księgi związane z wybraną dziedziną nauki, przybory do pisania'
    }
  ];
}
function getZeglarz() {
  return [
    {
      title: 'Żeglarz',
      opis: 'Żeglarze pochodzą głównie z prowincji Imperium zwanej Nordlandem, położonej na wybrzeżu Morza Szponów. Liczne floty, składające się z wielkich galeonów, szkunerów zwanych wilczymi oraz galer wojennych, patrolują wody na północ od Imperium, broniąc je przed atakami piratów z Norski i Bretoni oraz przerażających flotylli Chaosu. Na pokładach imperialnych żaglowców służą wyłącznie najlepsi żeglarze. Pozostali wchodzą w skład załóg statków kupieckich, pirackich łodzi lub niewolniczych galer. Po wodach Morza Szponów pływają też statki elfów, zazwyczaj pod banderą wielkich rodów kupieckich. Największym portem Starego Świata jest Marienburg. Miasto i otaczający je obszar (zwany Jałową Krainą) już od wielu lat cieszy się niezależnością, mimo iż niegdyś stanowiły Westerland, jedną z prowincji Imperium. Morze Szponów jest miejscem bezustannej walki. Na zbryzganych krwią deskach pokładów żeglarze pracują w pocie czoła, by zarobić na żołd i kolejną porcję rumu.Uwagi: Jeśli w trakcie tworzenia BG wybierzesz umiejętność wiedza (Jałowa Kraina), twój Bohater będzie mógł pochodzić z okolic wielkiego portu w Marienburgu.',
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
      umiejetnosci: ['Pływanie', 'Unik', 'Wioślarstwo', 'Wspinaczka', 'Żeglarstwo'],
      wyborUmiejetnosciProfesji: [['Mocna głowa', 'Spostrzegawczość'], ['Wiedza(bretonia)', 'Wiedza(norska)', 'Wiedza(tilea)', 'Wiedza(jałowa kraina)'], ['Znajomość języka(bretoński)', 'Znajomość języka(tileański)', 'Znajomość języka(norski)']],
      zdolnosci: ['Obieżyświat'],
      wyborZdolnosciProfesji: [['Silny cios', 'Brawura'], ['Twardziel', 'Bijatyka']],
      wyposazenie: 'lekki pancerz(skórzany kaftan), butelka gorzałki kiepskiej jakości'
    }
  ];
}
function getZolnierz() {
  return [
    {
      title: 'Żołnierz',
      opis: 'Każda prowincja Imperium wystawia własną armię, wyszkoloną i wyposażoną na koszt miejscowych władców. Połączone wojska wszystkich prowincji tworzą Armię Imperium, którą wspomagają wojska ochotnicze i kompanię najemników. Żołnierze są zawodowymi wojownikami wywodzącymi się zazwyczaj z chłopstwa lub mieszczaństwa. Służą w garnizonach miejskich i fortach na terenie całego Imperium. Oddziały wojskowe patrolują też granice kraju, odpierając ataki najeźdźców. Większość żołnierzy szkoli się w walce halabardą lub w strzelaniu z rusznicy. Stanowiska dowódcze są zdominowane przez szlachtę, mimo iż w Armii Imperium obowiązuje system awansu oparty na zdolnościach żołnierza. Prosty chłop albo mieszczanin może więc dosłużyć się wysokiej rangi, choć taki przebieg kariery utrudnia nieprzychylne nastawienie klasy panującej. Niziołki i krasnoludy służą w odrębnych jednostkach Armii Imperium.',
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
      umiejetnosci: ['Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Hazard', 'Plotkowanie'], ['Opieka nad zwierzętami', 'Leczenie'], ['Powożenie', 'Jeździectwo'], ['Wiedza(imperium)', 'Spostrzegawczość']],
      wyborZdolnosciProfesji: [['Broń specjalna(palna)', 'Broń specjalna(dwuręczna)'], ['Morderczy atak', 'Błyskawiczne przeładowanie'], ['Ogłuszanie', 'Strzał precyzyjny'], ['Rozbrajanie', 'Szybkie wyciągnięcie'], ['Strzał mierzony', 'Silny cios']],
      wyposazenie: 'broń dwuręczna(halabarda), albo rusznica z amunicją na 10 strzałów, lekki pancerz(skórznia) mundur, tarcza'
    }
  ];
}
function getZolnierzOkretowy() {
  return [
    {
      title: 'Żołnierz okrętowy',
      opis: 'Żołnierze okrętowi to wojownicy, którzy służą na okrętach floty Imperium i dużych statkach kupieckich. W odróżnieniu od żeglarzy, których zadaniem jest obsługa żagli i sterowaniem okrętem, jedynym obowiązkiem żołnierzy okrętowych jest obrona przed atakami wrogich jednostek i statków pirackich. Na lądzie często polują na pijanych żeglarzy, których siłą werbują do służby na statku. Niejeden marynarz obudził się na statku z dala od portu, pamiętając jedynie ostatni łyk alkoholu, a potem mocne uderzenie w tył głowy. Żołnierze okrętowi nie są mile widzianymi gośćmi w nadmorskich osadach, głównie ze względu na skłonność do nadużywania rumu i wszczynania burd. Jednak, gdy na horyzoncie pojawiają się żagle piratów, ci sami przyjmują pomoc zahartowanych w boju żołnierzy okrętowych. Uwagi: Jeśli w trakcie tworzenia BG wybierzesz umiejętność wiedza (Jałowa Kraina), Twój Bohater może pochodzić z okoli wielkiego portu w Marienburgu.',
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
      umiejetnosci: ['Mocna głowa', 'Pływanie', 'Unik', 'Wioślarstwo', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Sekretny język(bitewny)'], ['Wiedza(jałowa kraina)', 'Hazard']],
      zdolnosci: ['Ogłuszanie', 'Silny cios'],
      wyborZdolnosciProfesji: [['Rozbrajanie', 'Szybkie wyciągnięcie']],
      wyposazenie: 'łuk i 10 strzał, albo kusza i 10 bełtów, lekki pancerz(skórzana kurta), tarcza, 10 metrów liny z kotwiczką'
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
      opis: 'Wykorzystanie tej umiejętności pozwala BG maskować jego prawdziwy wygląd i udawać kogoś innego. Często potrzebne są dodatkowe rekwizyty, właściwe ubranie lub peruka. Dzięki tej umiejętności Bohater może przebrać się za przedstawiciela innej rasy, osobę płci przeciwnej, a nawet kogoś sławnego i znanego w całym kraju, choć tego rodzaju charakteryzacja jest znacznie trudniejsza. Przeciwko Charakteryzacji często wykorzystuje się test Spostrzegawczości przeciwnika.',
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
      opis: 'Bohater umie czytać i pisać w dowolnym języku, którym umie się posługiwać W większości przypadków czytania i pisania nie trzeba testować. MG może jednak zdecydować, że test umiejętności jest potrzebny przy odcyfrowywaniu rękopisy spisanego w starożytnym języku lub zawierającym niezrozumiałe wyrażenia albo archaiczne słownictwo.',
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
      opis: 'Dzięki tej umiejętności Bohater może zrozumieć rozmowy prowadzone poza zasięgiem jego słuchu lub gdy rozmowa jest zagłuszana przez jakieś odgłosy. Musi widzieć usta obserwowanej osoby, jak również znać język, w którym prowadzona jest rozmowa.',
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
      opis: 'Korzystający z tej umiejętności Bohater cieszy się posłuchem u podwładnych. Po udanym teście umiejętności podwładni dokładnie wypełniają jego polecenia. Nieudany test powoduje, że rozkaz zostaje wypełniony błędnie lub też nie zostaje wykonany w ogóle. Dowodzenie nie ma wpływu na zachowanie osób postronnych, umożliwia posłuszeństwo osób podlegających władzy Bohatera.',
      zdolnoscipokrewne: 'brak'
    }
  ]
}
function getGadanina() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Gadanina',
      cecha: 'Ogłada',
      opis: 'Bohaterowie posiadający tę umiejętność mogą próbować zagadać osobę, zasypując ją potkiem słów. Korzystający z tej umiejętności Bohater zazwyczaj nie próbuje na nikogo wpływać (do tego służy przekonywanie), chce po prostu zyskać na czasie. Po udanym teście umiejętności ofiara ma prawo do testu Siły Woli, który określa, czy zorientowała się w tym, co się naprawdę dzieje. Nieudany test oznacza, że zagadana osoba nic nie robi przez całą rundę, zastanawiając się czy ma do czynienia z osobnikiem pijanym czy zwykłym idiotą, a może jedno i drugie. Gadanina nie przynosi rezultatu, jeśli ofiara bierze udział w walce lub stoi w obliczu ewidentnego zagrożenia życia. Bohater może próbować zagadać kilka osób (jedna osoba za każde 10pkt jego Ogłady), pod warunkiem, że wszystkie te osoby rozumieją język, którym się posługuje.',
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
      opis: 'Umiejętność zwiększa szansę Bohatera na wygraną w grach losowych, takich jak karty lub kości. Każda uczestnicząca w grze postać wpłaca stawkę, a potem wszyscy grający równocześnie wykonują test Hazardu. Najniższy wynik rzutu (oczywiście po udanym teście) oznacza wygranie puli.',
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
      opis: 'Używając hipnozy Bohater może wprowadzić inną osobę w trans. Uwaga hipnotyzowanej osoby musi być przez minutę skupiona na jednej rzeczy. Potem należy wykonać test umiejętności. Osoby próbujące opierać się hipnozie mogą wykonać test Siły Woli. Osoba udziela odpowiedzi szczerze, zgodnie ze swoją wiedzą. Jeśli głęboko w coś wierzy, to udzieli takiej właśnie informacji. Po udzieleniu odpowiedzi na ostatnie pytanie osoba wychodzi z transu.',
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
      opis: 'Bohater potrafi jeździć konno lub na innych wierzchowcach. Zwykle jeżdżenie w normalnych warunkach nie wymaga wykonywania testu umiejętności. Jednakże może on być konieczny w przypadku jazdy galopem, wyścigu, wskakiwania na konia w biegu, itp.',
      zdolnoscipokrewne: 'woltyżerka.'
    }
  ]
}
function getJezykTajemnyMagiczny() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Język Tajemny(magiczny)',
      cecha: 'Inteligencja',
      opis: 'Dzięki tej umiejętności Bohater może rzucać zaklęcia. Znajomość języka tajemnego jest konieczna przy używaniu magicznych formuł. W odróżnieniu od innych języków, język tajemny nie jest używany w codziennych rozmowach, a wyłącznie do manipulowania mocą magiczną. Wszystkie magiczne pergaminy i księgi zapisane są w określonym języku tajemnym. Istnieje wiele takich języków. Najczęściej używane to: demoniczny, magiczny i tajemny elfi.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getKuglarstwoAkrobatyka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(akrobatyka)',
      cecha: 'Ogłada',
      opis: 'Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoAktorstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(aktorstwo)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoBlaznowanie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(błaznowanie)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoGawedziarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(gawędziarstwo)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoKomedianctwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(komedianctwo)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoMimika() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(mimika)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoMuzykalnosc() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(muzykalność)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoPolykanieOgnia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(połykanie ognia)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoSpiew() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(śpiew)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoTaniec() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(taniec)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoWrozenieZDloni() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(wróżenie z dłoni)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
      zdolnoscipokrewne: 'człowiek-guma, naśladowca.'
    }
  ]
}
function getKuglarstwoZonglerka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Kuglarstwo(żonglerka)',
      cecha: 'Ogłada',
      opis: ' Wykorzystywane jest do zabawiania publiczności.',
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
      opis: 'Dzięki tej umiejętności Bohater może zapewnić opiekę medyczną rannej osobie. Udany test leczenia przywraca 1k10 punktów Żywotności w przypadku osoby lekko rannej lub 1 punkt Żywotności w przypadku osoby ciężko rannej. Ranna osoba może być leczona tylko raz podczas sytuacji krytycznej (bitwa, zasadzka, pułapka, upadek, itp.), która spowodowała utratę punktów Żywotności, lub zaraz po niej. Test leczenia można ponowić następnego dnia, jak również każdego kolejnego dnia.',
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
      opis: 'Ta umiejętność zwiększa odporność Bohatera na alkohol. Doświadczeni poszukiwacze przygód potrafią sporo wypić i jednocześnie zachować względną trzeźwość. Test umiejętności wykonuje się po każdej porcji wypitego alkoholu.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaAlchemia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(alchemia)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaAnatomia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(anatomia)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
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
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaDemonologia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(demonologia)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaFilozofia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(filozofia)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaGenealogiaHeraldyka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(genealogia/heraldyka)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
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
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaInzynieria() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(inżynieria)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaMagia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(magia)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaMatematyka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(matematyka)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaNekromancja() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(nekromancja)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaPrawo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(prawo)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaRuny() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(runy)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaStrategiaTaktyka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(strategia/taktyka)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getNaukaSztuka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(sztuka)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
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
      opis: 'Ta umiejętność wykorzystywana jest do zapamiętywania ważniejszych informacji i liczb, jak też (gdy bohater posiada materiały pomocnicze i odpowiednie zasoby) do badań naukowych. Wymaga intensywnych studiów, lecz zapewnia znacznie szerszą i jednocześnie bardziej szczegółową znajomość problemu niż w przypadku wiedzy ogólnej. Nauka nie jest pojedynczą umiejętnością, lecz kategorią obejmującą różne, odrębne traktowanie umiejętności. Każda z nich musi zostać wykupiona oddzielnie. Musisz wydać 100PD za każdą opanowaną Naukę.',
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
      opis: 'Umiejętność ta wykorzystywana jest do orientowania się na lądzie i na wodzie. W zależności od wiedzy i możliwości, Bohater może nawigować według mapy albo gwiazd lub posługując się wrodzonym wyczuciem kierunku. Dzięki tej umiejętności może również ocenić długość podróży, biorąc pod uwagę topografię okolicy, porę roku i pogodę. W normalnych warunkach, utrzymanie stałego kursu wymaga jednego udanego testu dziennie.',
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
      opis: 'Umiejętność ta wykorzystywana jest podczas doglądania zwierząt domowych i hodowlanych (konie, woły, świnie, psy, itd.). Codzienne czynności i karmienie zwierząt nie wymagają testu umiejętności. Może być jednak potrzebny przy próbie wykrycia objawów choroby lub zastosowaniu specjalnych zabiegów (na przykład zaplatanie grzywy, czesanie, przygotowanie konia do parady wojskowej, itp.).',
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
      opis: 'Wyorzystywanie tej umiejętności umożliwia oswajanie zwierząt. Zwierzęta domowe i hodowlane zawsze zachowują się przyjaźnie wobec Bohatera, który posiada tę umiejętność. Zwierzęta dzikie lub tresowane (na przykład psy gończe lub bojowe) mogą dać się oswoić przy udanym teście umiejętności. MG może przydzielić modyfikatory przy próbie oswajania zwierząt wyjątkowo agresywnych lub wiernych innej osobie. Umiejętność ta nie działa na potwory.',
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
      opis: 'Bohater potrafi otwierać wszelakiego rodzaju zamki i kłódki. Zazwyczaj do otwiercia zamka wystarczy jeden udany test umiejętności, ale przy próbach otworzenia szczególnie skomplikowanego mechanizmu Mistrz Gry może zażądać dodatkowych testów umiejętności.',
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
      opis: 'Wykorzystanie tej umiejętności pozwala na zbieranie informacji w czasie zwykłej rozmowy. Obejmuje wymianę najświeższych nowin, plotek o ważnych osobach oraz ogólnych informacji o wydarzeniach w okolicy.',
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
      opis: 'Bohater umie pływać oraz nurkować. Pływanie w spokojnej wodzie nie wymaga testu. Test może być potrzebny przy próbie nurkowania, pływania w wartkim lub zdradliwym nurcie lub podczas próby przepłynięcia dłuższego dystansu. W czasie pływania Szybkość Bohatera spada o połowę.',
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
      opis: 'Bohater potrafi kierować wozem, powozem, a nawet rydwanem. Powożenie w normalnych warunkach nie wymaga testu umiejętności. Test może być potrzebny w przypadku jazdy w trudnym terenie, z dużą prędkością lub przy wykonywaniu niebezpiecznych manewrów.',
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
      opis: 'Ta umiejętność pozwala Bohaterowi wpływać na zachowanie innych osób. Może przekonywująco kłamać, blefować, a nawet skutecznie żebrać. Przekonywanie wykorzystuje się też podczas prób uwodzenia. W przypadku zastosowania tej umiejętności w celu nakłonienia kogoś do zrobienia czegoś niezwykłego lub niebezpiecznego, MG może pozwolić nakłanianej postaci na test Siły Woli. Bohater może próbować przekonać kilka osób (jedna osoba za każde 10pkt jego Ogłady), pod warunkiem że wszystkie te osoby rozumieją język, którym posługuje się bohater.',
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
      opis: 'Ta umiejętność jest wykorzystywana przy przeszukiwaniu obszaru lub pomieszczenia, w nadziei znalezienia wskazówek, ukrytych przejść, skarbów lub pułapek. Dokładne przeszukanie pomieszczenia lub niewielkiego obszaru wymaga jednego udanego testu umiejętności.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getRzemiosloAptekarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(aptekarstwo)',
      cecha: 'Inteligencja',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloBednarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(bednarstwo)',
      cecha: 'Krzepa',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloGarbarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(garbarstwo)',
      cecha: 'Krzepa',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloGotowanie() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(gotowanie)',
      cecha: 'Inteligencja',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloGornictwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(górnictwo)',
      cecha: 'Krzepa',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloGornictwoOdkrywkowe() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(górnictwo odkrywkowe)',
      cecha: 'Krzepa',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloHandel() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(handel)',
      cecha: 'Ogłada',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloJubilerstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(jubilerstwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloKaligrafia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(kaligrafia)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloKamieniarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(kamieniarstwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloKartografia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(kartografia)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloKowalstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(kowalstwo)',
      cecha: 'Krzepa',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloKrawiectwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(krawiectwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloMlynarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(młynarstwo)',
      cecha: 'Krzepa',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloPiwowarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(piwowarstwo)',
      cecha: 'Inteligencja',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloPlatnerstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(płatnerstwo)',
      cecha: 'Krzepa',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloRusznikarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(rusznikarstwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloRymarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(rymarstwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloStolarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(stolarstwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloSzkutnictwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(szkutnictwo)',
      cecha: 'Inteligencja',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloSzewstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(szewstwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloSztuka() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(sztuka)',
      cecha: 'Zręszność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloSwiecarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(świecarstwo)',
      cecha: 'Zręszność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloUprawaZiemi() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(uprawa ziemi)',
      cecha: 'Siła',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloWyrobLukow() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(wyrób łuków)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloZielarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(zielarstwo)',
      cecha: 'Inteligencja',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloZlotnictwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(złotnictwo)',
      cecha: 'Zręczność',
      opis: 'Bohater jest fachowcem w jednej z dziedzin rzemiosła. Ta umiejętność obejmuje także te dziedziny, które formalnie nie są określone jako rzemiosło, ale wymagają posiadania wyuczonej wiedzy i odpowiednich narzędzi.',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getSekretneZnakiLowcow() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretne Znaki(łowców)',
      cecha: 'Inteligencja',
      opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretneZnakiRycerzyZakonnych() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretne Znaki(rycerzy zakonnych)',
      cecha: 'Inteligencja',
      opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretneZnakiZwiadowcow() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretne Znaki(zwiadowców)',
      cecha: 'Inteligencja',
      opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretneZnakiZlodziei() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretne Znaki(złodziei)',
      cecha: 'Inteligencja',
      opis: ' Bohater potrafi odczytywać lub zapisywać zaszyfrowane wiadomości. Na obszarze Imperium stosuje się wiele systemów znaków. Sekretne znaki są zazwyczaj prostymi komunikatami używanymi głównie w celu ostrzeżenia, oznakowania obiektu, wskazania szlaku lub miejsca o szczególnym znaczeniu. Odczytanie lub zapisanie krótkiej, prostej wiadomości nie wymaga testu umiejętności. W przypadku bardziej skomplikowanych zapisów lub gdy fragmenty znaku są podniszczone albo zatarte, MG może nakazać wykonanie testu umiejętności z odpowiednimi modyfikatorami trudności.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretnyJezykBitewny() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretny język(bitewny)',
      cecha: 'Inteligencja',
      opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' +
        'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretnyJezykGildii() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretny język(gildii)',
      cecha: 'Inteligencja',
      opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' +
        'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretnyJezykLowcow() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretny język(łowców)',
      cecha: 'Inteligencja',
      opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' +
        'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getSekretnyJezykZlodziejski() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Sekretny język(złodziejski)',
      cecha: 'Inteligencja',
      opis: 'Znajomość sekretnego język pozwala na potajemne porozumiewanie się z przedstawicielami tej samej profesji lub grupy społecznej. Sekretne języki przypominają raczej uproszczony szyfr, a nie powszechnie używane formy porozumiewania się. Wykorzystując znaki, mowę ciała i słowa kodowe wplatane w zwykłą wypowiedź, Bohater może przekazać dodatkowe znaczenie wypowiadanych słów lub większą ilość informacji w krótkim czasie.' +
        'W normalnych warunkach, gdy wszyscy rozmawiający znają dany sekretny język, test umiejętności nie jest potrzebny, aczkolwiek może być wymagany w niesprzyjających warunkach (na przykład na głośnej ulicy lub w czasie bitwy).',
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
      opis: 'Umiejętność ta umożliwia Bohaterowi ciche poruszanie się w prawie każdym terenie. Skradając się, Bohater może wykonywać najwyżej jedną akcję „ruch” w rundzie. Test skradania się jest często wykonywany w przeciwstawnym teście przeciwko Spostrzegawczości przeciwnika',
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
      opis: 'Wykorzystywanie tej umiejętności ułatwia Bohaterowi kontrolowanie Wiatrów Magii. Każde rzucenie zaklęcia wymaga manipulacji nimi, jednak splatanie magii wykorzystuje się wtedy, gdy wymagana jest większa kontrola nad czarem lub jego precyzyjne przygotowanie.',
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
      opis: 'BG, który posiada tę umiejętność, dokładniej obserwuje otoczenie, często zauważając szczegóły przeoczone przez innych. Dzięki temu ma większe szanse na zauważenie pułapki, zapadni lub ukrytego przejścia. Spostrzegawczość jest używana głównie do ustalania tego co Bohater widzi, choć obejmuje także pozostałe zmysły. Może być więc użyta do określania doznań smakowych, zapachowych, słuchowych i dotykowych. Spostrzegawczość bywa często stosowana w przeciwstawnych testach umiejętnościom takim jak Charakteryzacja, Skradanie się, i Ukrywanie się. Udany test umiejętności pozwala Bohaterowi na określenie liczebności, odległości, wielkości obserwowanego obiektu, itp. Nieudany test może oznaczać uzyskanie niedokładnych informacji.',
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
      opis: 'Umiejętność ta może zapewnić przeżycie w dziczy. Obejmuje znajomość technik łowienia ryb, polowania, oprawiania zwierzyny, rozpalania ognia, znajdowania pożywienia, konstruowania szałasów, itp.',
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
      opis: 'Wykorzystując tę umiejętność, bohater może podążać za kimś, samemu pozostając niezauważonym. Test śledzenia jest często wykorzystywany w przeciwstawnym teście umiejętności przeciwko Spostrzegawczości przeciwnika.',
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
      opis: 'Umiejętność ta umożliwia negocjowanie cen towarów i usług. W przypadku towarów codziennego użytku wystarczy zwykły test umiejętności. Jeśli bohater targuje się o cenny przedmiot, MG może zarządzić przeciwstawny test Targowania (z ewentualnymi modyfikacjami trudności).',
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
      opis: 'Dzięki zastosowaniu rozmaitych działań i środków przymusu Bohater potrafi wydobyć interesujące go informacje od osoby niechętnej do współpracy. Umiejętność obejmuje zarówno psychiczne znęcanie się, jak i fizyczne tortury. Ofiara może opierać się torturom, wykonując test Siły Woli.',
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
      opis: 'Bohater potrafi uczyć zwierzęta wykonywania różnych sztuczek i słuchania prostych poleceń. Zwykle tresurze poddaje się psy, konie i sokoły, choć MG może pozwolić na tresowanie bardziej niezwykłych zwierząt. Wyuczenie zwierzęcia zajmuje sporo czasu. Test umiejętności należy wykonać raz na tydzień tresury. Nauczenie prostej sztuczki wymaga pojedynczego, udanego testu, średnio trudna sztuczka wymaga trzech udanych testów umiejętności, natomiast bardzo trudna – dziesięciu.',
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
      opis: 'Bohater potrafi wyszukiwać ślady zwierząt, a także ludzi i innych stworzeń. Podążanie wyraźnym tropem nie wymaga testu umiejętności i nie spowalnia tempa poruszania się. Test umiejętności może być jednak potrzebny w trudnych warunkach terenu lub pogody. Odpowiedni poziom skuteczności może dostarczyć dodatkowych informacji (o liczebności grupy, odległości od tropionego stworzenia, a nawet jego cechach osobniczych).',
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
      opis: 'Wykorzystanie tej umiejętności umożliwia bohaterowi ukrywanie się w niemal dowolnym terenie, pod warunkiem, że istnieje realna szansa schowania się za jakimś obiektem (mur, drzewo, budynek, itp.). Przy próbie ukrycia się na otwartej, pustej przestrzeni (na przykład na środku ulicy) test umiejętności automatycznie jest nieudany. Ukrywanie się bywa często wykorzystywane przeciwko testowi Spostrzegawczości przeciwnika.',
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
      opis: 'Wykorzystanie tej umiejętności umożliwia bohaterowi uniknięcie ataku podczas walki wręcz. Unik można stosować najwyżej raz na rundę.',
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
      opis: 'Bohater potrafi przyrządzać rozmaite trucizny pochodzenia zwierzęcego lub roślinnego, a także trucizny uzyskiwane alchemicznie.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
function getWiedzaBretonia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(bretonia)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaEstalia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(estalia)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaImperium() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(imperium)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaJalowaKraina() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(jałowa kraina)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaKislev() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(kislev)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaKsiestwaGraniczne() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(księstwa graniczne)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaNorska() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(norska)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaTilea() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(tilea)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaElfy() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(elfy)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaKrasnoludy() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(krasnoludy)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaNiziolki() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(niziołki)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
      zdolnoscipokrewne: 'obieżyświat.'
    }
  ]
}
function getWiedzaOgry() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(ogry)',
      cecha: 'Inteligencja',
      opis: 'Umiejętność ta zapewnia wiedzę o zwyczajach, strukturze władzy, najważniejszych dostojnikach, obyczajach ludowych oraz przesądach mieszkańców danej krainy, członków danej grupy społecznej lub przedstawicieli danej rasy. Widza nie jest równoznaczna ze studiami naukowymi (to oddaje umiejętność Nauka), lecz zapewnia jedynie podstawowe informacje, jakie bohater zdobył w czasie podróży po świecie.',
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
      opis: 'Bohater potrafi sterować tratwami, barkami i innymi łodziami wiosłowymi. Utrzymanie kursu w normalnych warunkach nie wymagają testu umiejętności. MG może uznać za stosowne wykonanie testu w przypadku kiepskiej pogody, wysokiej fali, pokonywania progów rzecznych lub omijania mielizn.',
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
      opis: ' Twój bohater potrafi wspinać się na drzewa, mury, skalne ściany i inne pionowe przeszkody. W normalnych warunkach test umiejętności wykonuje się raz na rundę. Wspinanie się w czasie walki wymaga poświęcenia akcji podwójnej. Udany test oznacza, że bohater wspiął się na wysokość równą połowie jego Szybkości, mierzonej w metrach.',
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
      opis: 'Bohater potrafi szacować wartość rzeczy codziennego użytku, jak również przedmiotów wartościowych, takich jak biżuteria, klejnoty i dzieła sztuki. Udany test umiejętności pozwala określić rynkową wartość przedmiotu. Ponieważ nieudany test umiejętności może spowodować błędne oszacowanie wartości przedmiotu, MG powinien wykonać rzut w tajemnicy i zależnie od wyniku poinformować gracza o ustalonej w ten sposób wartości przedmiotu.',
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
      opis: 'Umiejętność tak umożliwia bohaterowi wykrywanie subtelnych zawirowań, jakie towarzyszą magicznej aurze. Czarodzieje opisują to jako szósty, siódmy i ósmy zmysł człowieka. Wśród chłopstwa to zjawisko jest znane pod nazwą „wiedźmi wzrok”. Udany test umiejętności pozwala określić, czy przedmiot, postać lub obszar pozostaje pod wpływem czaru. Wykorzystując tę umiejętność, czarodziej może ustalić siłę Wiatrów Magii w najbliższej okolicy.',
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
      opis: 'Bohater potrafi konstruować różnego rodzaju pułapki na zwierzęta. W Imperium używa się pułapek unieruchamiających, jak też uśmiercających złapane zwierzę. Za każdą założoną pułapkę wykonuje się jeden test umiejętności na dzień. Udany test oznacza, że w pułapkę złapało się zwierzę.',
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
      opis: 'Dzięki tej umiejętności bohater może zastraszać lub zmuszać do uległości inne osoby. Ofiary, które nie chcą ugiąć się przed groźbami, mogą wykonać test SW. Reakcja postaci zależy całkowicie od decyzji MG, który bierze pod uwagę jej osobowość oraz wynik testu Zastraszania. W niektórych sytuacjach (szantaż, itp.), MG może uznać, że bardziej odpowiednią cechą do testu Zastraszania może być Ogłada.',
      zdolnoscipokrewne: 'groźny.'
    }
  ]
}
function getZnajomoscJezykaBretonski() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(bretoński)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaEltharin() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(eltharin)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaEstalisjki() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(estalijski)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaKhazaldin() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(khazaldin)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaKislevski() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(kislevski)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaNorski() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(norski)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaTileanski() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(tileanski)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscJezykaStaroswiatowy() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(staroświatowy)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
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
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
      zdolnoscipokrewne: 'naśladowca, obieżyświat, poliglota.'
    }
  ]
}
function getZnajomoscjezykaNiziolkow() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(niziołków)',
      cecha: 'Inteligencja',
      opis: 'Ta umiejętność umożliwia bohaterowi porozumiewanie się w obcym języku. Większość języków Starego Świata wywodzi się ze wspólnego starożytnego narzecza, choć w ciągu wielu wieków różnice między poszczególnymi dialektami doprowadziły do powstania odrębnych języków. W normalnych warunkach, gdy wszyscy rozmawiający znają dany język, test umiejętności nie jest potrzebny. Test może być potrzebny w przypadku prób naśladowania regionalnych akcentów lub gdy bohater gracza próbuje przekonać słuchających, że język obcy jest jego ojczystym językiem.',
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
      opis: 'Dzięki tej użytecznej umiejętności bohater potrafi ukryć w dłoni małe przedmioty lub wykonywać sztuczki z kartami i monetami. Zwinne palce przydają się również przy ukradkowym sięganiu do cudzych sakiewek. Test zwinnych palców jest często wykonywany w przeciwstawnym teście umiejętności przeciwko Spostrzegawczości przeciwnika.',
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
      opis: 'Dzięki tej umiejętności bohater potrafi sterować statkami żaglowymi. Dodatkowo bohater dysponuje wiedzą o budowie okrętów, różnych rodzajach żagli, a także umiejętnością przewidywania pogody na morzu. Żeglowanie po spokojnych wodach nie wymaga testu umiejętności. Trudne warunki pogodowe, wysokie fale lub wykonywanie manewrów w czasie bitwy mogą wymagać testu umiejętności o odpowiednim stopniu trudności.',
      zdolnoscipokrewne: 'brak.'
    }
  ]
}
// zdolnosci
function getArtylerzysta() {
  return [
    {
      zdolnosc: 'Artylerzysta',
      opis: 'Bohater zostaje świetnie wyszkolony w obsłudze broni palnej. Dzięki tej zdolności może przeładować broń palną w czasie krótszym o akcję. Jeśli bohater posiada również zdolność błyskawiczne przeładowanie, może korzystać naraz z obu zdolności(skracając czas przeładowania broni palnej o akcję podwójną).',
    }
  ]
}
function getBardzoSilny() {
  return [
    {
      zdolnosc: 'Bardzo silny',
      opis: 'Bohater obdarzony jest wyjątkową siła. Otrzymuje +5 do Krzepy, dodawane do początkowej wartości cechy. Może to zmienić wartość Siły BG.',
    }
  ]
}
function getBardzoSzybki() {
  return [
    {
      zdolnosc: 'Bardzo szybki',
      opis: 'Bohater potrafi poruszać się znacznie szybciej niż inni. Otrzymuje +1 do Szybkości, dodawane do początkowej wartości cechy.',
    }
  ]
}
function getBijatyka() {
  return [
    {
      zdolnosc: 'Bijatyka',
      opis: 'Bohater nauczył się walczyć w karczemnych burdach i miejskich rozróbach. Otrzymuje modyfikator +10 do Walki Wręcz podczas ataku bez broni. Dodatkowo otrzymuje modyfikator +1 do obrażeń zadawanych podczas takiego ataku.',
    }
  ]
}
function getBlyskawicznePrzeladowanie() {
  return [
    {
      zdolnosc: 'Błyskawiczne przeładowanie',
      opis: 'Bohater jest doświadczonym strzelcem. Dzięki tej zdolności może przeładować broń strzelecką w czasie krótszym o akcje. Bohater używający błyskawicznego przeładowania może napiąć kuszę w czasie jednej akcji zwykłej, podczas gdy normalnie wymaga to akcji podwójnej. Jeśli przeładowanie broni normalnie zajmuje akcje. korzystając z tej zdolności można to wykonać w ramach akcji natychmiastowej. Dzięki temu Bohater może przeładować taką broń praktycznie w mgnieniu oka, co pozwała na wykonanie ataku wielokrotnego" z broni strzeleckiej.',
    }
  ]
}
function getBlyskawicznyBlok() {
  return [
    {
      zdolnosc: 'Błyskawiczny Blok',
      opis: 'Bohater, który wykonuje „atak wielokrotny", może poświęcić jeden z ataków, otrzymując w zamian możliwość sparowania ataku przeciwnika. Na przykład Bohater mający 3 Ataki i deklarujący atak wielokrotny, mógłby wykonać dwa ataki i raz sparować atak przeciwnika. Bohater nadal może parować najwyżej jeden atak na rundę. ',
    }
  ]
}
function getBlyskotliwosc() {
  return [
    {
      zdolnosc: 'Błyskotliwość',
      opis: 'Bohater obdarzony jest wyjątkową inteligencją. Otrzymuje +5 do Inteligencji, dodawane do początkowej wartości cechy.',
    }
  ]
}
function getBrawura() {
  return [
    {
      zdolnosc: 'Brawura',
      opis: 'Obdarzony tą zdolnością Bohater wykazuje się wyjątkową śmiałością i ruchliwością w walce. Może wykonać akcję "skok" poświęcając na to akcję zwykłą(zamiast akcji podwójnej). Zdolność zwiększa też maksymalny zasięg wszystkich skoków o 1 metr.',
    }
  ]
}
function getBronNaturalna() {
  return [
    {
      zdolnosc: 'Broń naturalna',
      opis: 'Postać dysponuje ostrymi kłami lub pazurami, których z powodzeniem może używać w walce. W czasie walki bez broni jest traktowana, jak gdyby używała broni jednoręcznej. Broń naturalna nie pozwala na parowanie ciosów. W przypadku broni naturalnej nie można stosować rozbrajania.',
    }
  ]
}
function getBronSpecjalnaDwureczna() {
  return [
    {
      zdolnosc: 'Broń specjalna(dwuręczna)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaKawaleryjska() {
  return [
    {
      zdolnosc: 'Broń specjalna(kawaleryjska)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaMechaniczna() {
  return [
    {
      zdolnosc: 'Broń specjalna(mechaniczna)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaPalna() {
  return [
    {
      zdolnosc: 'Broń specjalna(palna)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaParujaca() {
  return [
    {
      zdolnosc: 'Broń specjalna(parująca)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaRzucana() {
  return [
    {
      zdolnosc: 'Broń specjalna(rzucana)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaSzermiercza() {
  return [
    {
      zdolnosc: 'Broń specjalna(szermiercza)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaUnieruchamiajaca() {
  return [
    {
      zdolnosc: 'Broń specjalna(unieruchamiająca)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaKorbacze() {
  return [
    {
      zdolnosc: 'Broń specjalna(korbacze)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaKusze() {
  return [
    {
      zdolnosc: 'Broń specjalna(kusze)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaLuki() {
  return [
    {
      zdolnosc: 'Broń specjalna(łuk)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBronSpecjalnaProce() {
  return [
    {
      zdolnosc: 'Broń specjalna(proce)',
      opis: 'Bohater potrafi władać bronią, która wymaga specjalistycznego treningu. Każda zdolność broń specjalna jest odrębną zdolnością.',
    }
  ]
}
function getBystryWzrok() {
  return [
    {
      zdolnosc: 'Bystry wzrok',
      opis: 'Bohater obdarzony jest doskonałym wzrokiem. Otrzymuje modyfikator +10 do testów spostrzegawczości podczas rozglądania się oraz do testów czytania z warg.',
    }
  ]
}
function getCharyzmatyczny() {
  return [
    {
      zdolnosc: 'Charyzmatyczny',
      opis: 'Bohater obdarzony jest zniewalającym urokiem osobistym. Otrzymuje +5 do Ogłady, dodawane do początkowej wartości cechy.',
    }
  ]
}
function getChirurgia() {
  return [
    {
      zdolnosc: 'Chirurgia',
      opis: 'Bohater poznał tajniki najnowszej wiedzy medycznej. Otrzymuje modyfikator +10 do testów leczenia. W przypadku leczenia ciężko rannego pacjenta udany test przywraca 2 punkty Żywotności zamiast, jak normalnie, tylko 1. Jeśli w wyniku trafienia krytycznego istnieje ryzyko utraty kończyny, pacjent leczony przez Chirurga otrzymuje modyfikator +20 do Odporności podczas testów związanych z ryzykiem utraty kończyny.',
    }
  ]
}
function getChodu() {
  return [
    {
      zdolnosc: 'Chodu!',
      opis: 'W chwili zagrożenia Bohater odkrywa w sobie zadziwiające możliwości fizyczne. Uciekając z pola walki lub z miejsca zagrożenia, na 1k10 rund otrzymuje +1 do Szybkości.',
    }
  ]
}
function getCzarnoksieswto() {
  return [
    {
      zdolnosc: 'Czarnoksięstwo',
      opis: 'Bohater poznał sekret Czarnej Magii Dhar i potrafi jej używać do wspomożenia siły swoich zaklęć. Korzystanie z czarnoksięstwa umożliwia zdobycie większej mocy, ale jest także bardziej ryzykowne. Za każdym razem, gdy Bohater rzuca czar, może wykorzystać energię Dhar do jego wzmocnienia. Wykonując rzut na poziom mocy czaru, możesz rzucić dodatkową kostką k10 i zignorować najmniejszy z uzyskanych wyników, który jednak liczy się przy sprawdzaniu Przekleństwa Tzeentcha. Na przykład czarodziej z Magią 2, który rzuca zaklęcie z wykorzystaniem czarnoksięstwa, rzuca 3k10 i wybiera dwa najwyższe wyniki. Wszystkie trzy kostki są używane do sprawdzania Przekleństwa Tzeentcha. Gdyby na kostkach wypadło 6, 6 i 6, poziom mocy czaru wyniósłby 12 (6+6), jednak czar wywołałby Poważną Manifestację Chaosu. Znajomość czarnoksięstwa jest wymagana przy rzucaniu czarów z magii czarnoksięskiej.',
    }
  ]
}
function getCzlowiekGuma() {
  return [
    {
      zdolnosc: 'Człowiek-guma',
      opis: 'Bohater potrafi wyginać swoje ciało w sposób nieosiągalny dla zwykłych osób. Otrzymuje modyfikator +10 do testów kuglarstwa(akrobatyka) oraz modyfikator +20 do Zręczności podczas testów wyzwalania się z więzów, przeciskania przez szczeliny, itp.',
    }
  ]
}
function getCzulySluch() {
  return [
    {
      zdolnosc: 'Czuły słuch',
      opis: 'Bohater obdarzony jest wyjątkowo czułym słuchem. Otrzymuje modyfikator +20 do testów spostrzegawczości podczas nasłuchiwania. ',
    }
  ]
}
function getDotykMocy() {
  return [
    {
      zdolnosc: 'Dotyk mocy',
      opis: 'Niektóre czary używane w walce wymagają dotknięcia przeciwnika. Bohater, który posiada zdolność dotyk mocy, otrzymuje modyfikator +20 do Walki Wręcz przy testach związanych z rzucaniem czarów dotykowych. ',
    }
  ]
}
function getEtykieta() {
  return [
    {
      zdolnosc: 'Etykieta',
      opis: 'Bohater potrafi odpowiednio zachowywać się we wszelkich sytuacjach towarzyskich. Otrzymuje modyfikator +10  do testów plotkowania i przekonywania podczas rozmów z przedstawicielami szlachty i arystokracji. Modyfikator stosuje się również w sytuacjach gdy wymagana jest znajomość etykiety (na przykład podszywanie się pod szlachcica z wykorzystaniem charakteryzacji).',
    }
  ]
}
function getGeniuszArytmetyczny() {
  return [
    {
      zdolnosc: 'Geniusz arytmetyczny',
      opis: 'Bohater potrafi błyskawicznie rachować w umyśle oraz, mając do dyspozycji dostatecznie dużo czasu, może rozwiązać niemal dowolny problem matematyczny. Otrzymuje modyfikator +10 do testów hazardu i nawigacji oraz modyfikator +20 do testów spostrzegawczości związanych z oceną odległości, ciężaru, itd. ',
    }
  ]
}
function getGrotolaz() {
  return [
    {
      zdolnosc: 'Grotołaz',
      opis: 'Bohater wychował się w jaskiniach bądź często po nich wędrował. Bez trudu potrafi poruszać się w podziemiach. Otrzymuje modyfikator +10 do testów skradania się i ukrywania się wykonywanych pod powierzchnią ziemi lub w jaskiniach. ',
    }
  ]
}
function getGrozny() {
  return [
    {
      zdolnosc: 'Groźny',
      opis: 'Wygląd, wzrost lub zachowanie Bohatera wzbudzają respekt i instynktowny niepokój wśród obserwatorów. Otrzymuje modyfikator +10 do testów zastraszania i torturowania. ',
    }
  ]
}
function getGusla() {
  return [
    {
      zdolnosc: 'Gusła',
      opis: 'Bohater odkrył w sobie dziki talent magiczny, który udoskonala metodą prób i błędów, nie mając dostępu do magicznych studiów. Bohater potrafi rzucać czary magii prostej (gusła) bez konieczności posiadania umiejętności język tajemny. Do rzucania czarów nadal wymagana jest zdolność magia prosta (gusła). Za każdym razem, gdy Bohater korzysta z zaklęć magii prostej (gusła), musisz rzucić dodatkową kostką k10. Wynik rzutu nie dodaje się do poziomu mocy czaru, lecz jest używany do sprawdzania Przekleństwa Tzeentcha. Jeśli Twój BG nauczy się umiejętności język tajemny, nie będziesz musiał rzucać dodatkową kostką.',
    }
  ]
}
function getIntrygant() {
  return [
    {
      zdolnosc: 'Intrygant',
      opis: 'Bohater jest mistrzem rozgrywek politycznych i intryg. Otrzymuje modyfikator +10 do testów przekonywania związanych z intrygami oraz do Siły Woli podczas testów przeciwko przekonywaniu ze strony innych osób.',
    }
  ]
}
function getKrasnoludzkiFach() {
  return [
    {
      zdolnosc: 'Krasnoludzki fach',
      opis: 'Krasnoludy są urodzonymi rzemieślnikami. Bohater otrzymuje modyfikator +10 do testów rzemiosła: górnictwo, kamieniarstwo, kowalstwo, jubilerstwo, piwowarstwo, płatnerstwo i rusznikarstwo.',
    }
  ]
}
function getKrasomowstwo() {
  return [
    {
      zdolnosc: 'Krasomówstwo',
      opis: 'Bohater potrafi przemawiać tak pięknie i przekonywująco, że może poderwać do działania całe tłumy. Wykorzystując przekonywanie BG może oddziaływać na grupę osób 100 razy liczniejszą niż normalnie. Zdolność krasomówstwo wymaga uprzedniego opanowania zdolności przemawianie.',
    }
  ]
}
function getKrzepki() {
  return [
    {
      zdolnosc: 'Krzepki',
      opis: 'Bohater, który posiada tę zdolność, w czasie wielu przygód nabrał niesamowitej krzepy. Może nosić ciężki pancerz lub zbroję płytową bez zmniejszenia Szybkości. Bohater może zignorować Obciążenie noszonej zbroi, jednak nadal musi uwzględnić modyfikator -10 do Zręczności wynikający z faktu noszenia średniego pancerza.',
    }
  ]
}
function getLatanie() {
  return [
    {
      zdolnosc: 'Latanie',
      opis: 'Postać potrafi latać.',
    }
  ]
}
function getLewitacja() {
  return [
    {
      zdolnosc: 'Lewitacja',
      opis: 'Postać potrafi unosić się nisko nad ziemią.',
    }
  ]
}
function getLotrzyk() {
  return [
    {
      zdolnosc: 'Łotrzyk',
      opis: 'Bohater jest blisko związany ze światem przestępczym. Otrzymuje modyfikator +10 do testów plotkowania i przekonywania w kontaktach z przedstawicielami przestępczego półświatka.',
    }
  ]
}
function getMagiaCzaroksieska() {
  return [
    {
      zdolnosc: 'Magia Czarnoksięska',
      opis: 'Twój Bohater poznał tajniki jednej z zakazanych tradycji magicznych. Podobnie jak w przypadku magii tajnej, zgłębianie sekretów magii czarnoksięskiej wymaga poświęcenia i wyboru jednej z dostępnych mrocznych tradycji. Każda magia czarnoksięska jest oddzielną zdolnością.',
    }
  ]
}
function getMagiaKaplanska() {
  return [
    {
      zdolnosc: 'Magia Kapłańska',
      opis: 'Bohater jest tak żarliwym wyznawcą jakiegoś bóstwa, że dzięki jego modlitwom zdarzają się rzeczy nadprzyrodzone. Zgłębianie tajemnic boga wymaga fanatycznego poświecenia i zaangażowania. Bohater musi wybrać jednego boga, a w konsekwencji także jedną z magii kapłańskich. Każda magia kapłańska jest oddzielną zdolnością magiczną, pozwalającą na rzucanie czarów z dziedziny określonego bóstwa.',
    }
  ]
}
function getMagiaPowrzechna() {
  return [
    {
      zdolnosc: 'Magia powrzechna',
      opis: 'Bohater potrafi rzucać zaklęcia, które są powszechnie używane przez czarodziejów i kapłanów. Magia powszechna obejmuje wybór czarów, z których każdy jest osobną zdolnością.',
    }
  ]
}
function getMagiaProsta() {
  return [
    {
      zdolnosc: 'Magia prosta',
      opis: 'Bohater poznał podstawowe tajniki rzucania czarów. Magia prosta, podobnie jak magia tajemna, obejmuje kilka zdolności. Każdy rodzaj magii prostej jest traktowany jako oddzielna zdolność magiczna.',
    }
  ]
}
function getMagiaProstaTajemna() {
  return [
    {
      zdolnosc: 'Magia prosta(tajemna)',
      opis: 'Bohater poznał podstawowe tajniki rzucania czarów. Magia prosta, podobnie jak magia tajemna, obejmuje kilka zdolności. Każdy rodzaj magii prostej jest traktowany jako oddzielna zdolność magiczna.',
    }
  ]
}
function getMagiaProstaGusla() {
  return [
    {
      zdolnosc: 'Magia prosta(gusła)',
      opis: 'Bohater poznał podstawowe tajniki rzucania czarów. Magia prosta, podobnie jak magia tajemna, obejmuje kilka zdolności. Każdy rodzaj magii prostej jest traktowany jako oddzielna zdolność magiczna.',
    }
  ]
}
function getMagiaTajemna() {
  return [
    {
      zdolnosc: 'Magia tajemna',
      opis: 'Bohater poznał tajniki jednej z kilku tradycji magicznych znanych w Imperium. Magia tajemna wymaga absolutnego poświecenia i długotrwałych studiów. W konsekwencji Bohater musi dokonać wyboru jednej z dostępnych tradycji i nie będzie mógł uczyć się innych. Każdy rodzaj magii tajemnej jest oddzielną zdolnością.',
    }
  ]
}
function getMedytacja() {
  return [
    {
      zdolnosc: 'Medytacja',
      opis: 'Bohater potrafi skupić się na własnym wnętrzu i wejść w głęboki trans, ignorując doznania ze świata zewnętrznego. 	Podczas odprawiania rytuału BG otrzymuje modyfikator do poziomu mocy czarów równy wartości jego cechy Magia.',
    }
  ]
}
function getMorderczyAtak() {
  return [
    {
      zdolnosc: 'Morderczy atak',
      opis: 'Dzięki znajomości podstaw anatomii Bohater potrafi wymierzyć atak w newralgiczną część ciała przeciwnika. Zwiększa to o 1 Wartość Krytyczną wszystkich trafień krytycznych zadanych przez BG.',
    }
  ]
}
function getMorderczyPocisk() {
  return [
    {
      zdolnosc: 'Morderczy pocisk',
      opis: 'Bohater specjalizuje się w czarach typu "magiczny pocisk". Otrzymuje modyfikator +1 do rzutów na obrażenia, gdy atakuje czarami tego typu.',
    }
  ]
}
function getNasladowca() {
  return [
    {
      zdolnosc: 'Naśladowca',
      opis: 'Bohater potrafi bezbłędnie naśladować różne odgłosy. Otrzymuje modyfikator +10 do testów: kuglarstwa (aktorstwo, błaznowanie, gawędziarstwo i komedianctwo), charakteryzacji (jeśli jednym z elementów przebrania jest naśladowanie głosu lub dźwięków) oraz znajomości języka, gdy próbuje udawać, że to jego język ojczysty.',
    }
  ]
}
function getNiepokojacy() {
  return [
    {
      zdolnosc: 'Niepokojący',
      opis: 'Bohater ma w swoim wyglądzie coś takiego, że przeciwnicy stają się niespokojni. Widząc go, wrogowie muszą wykonać test Siły Woli. Nieudany test oznacza, że otrzymują modyfikator -10 do testów Walki Wręcz i Umiejętności Strzeleckich w czasie walki z Bohaterem. Podczas każdej kolejnej rundy mogą próbować przełamać swój lęk (wykonując kolejny test Siły Woli). Efekt mija, gdy jedna ze stron ucieknie z pola walki.',
    }
  ]
}
function getNieustraszony() {
  return [
    {
      zdolnosc: 'Nieustraszony',
      opis: 'Bohater nie odczuwa strachu. Może jest naprawdę odważny, a może po prostu szalony. Bez względu na przyczynę jest odporny na Strach i w mniejszym stopniu ulega Grozie (wykonujesz rzut przeciw Grozie jako rzut przeciw Strachowi). Bohater jest również odporny na działanie umiejętności zastraszanie i zdolności niepokojący.',
    }
  ]
}
function getNiezwykleOdporny() {
  return [
    {
      zdolnosc: 'Niezwykle odporny',
      opis: 'Bohater obdarzony jest wyjątkową odpornością. Otrzymuje +5 do Odporności, dodawane do początkowej wartości cechy. Może to zmienić wartość Wytrzymałości.',
    }
  ]
}
function getObiezyswiat() {
  return [
    {
      zdolnosc: 'Obieżyświat',
      opis: 'Bohater w swoim życiu wiele podróżował, zdobywając rozległą wiedzę. Otrzymuje modyfikator +10 do testów wiedzy i znajomości języka.',
    }
  ]
}
function getOburecznosc() {
  return [
    {
      zdolnosc: 'Oburęczność',
      opis: 'Bohater może używać obu rąk z jednakową sprawnością, nie otrzymując modyfikatora -20 do Walki Wręcz, gdy trzyma broń w słabszej ręce.',
    }
  ]
}
function getOdpornoscNaChaos() {
  return [
    {
      zdolnosc: 'Odporność na chaos',
      opis: 'Bohater obdarzony jest naturalną odpornością na wpływ Chaosu. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko magii i efektom Chaosu. Jest również całkowicie odporny na mutacje Chaosu. Jednak nigdy nie będzie mógł rzucać czarów.',
    }
  ]
}
function getOdpornoscNaChoroby() {
  return [
    {
      zdolnosc: 'Odporność na choroby',
      opis: 'Bohater jest obdarzony końskim zdrowiem. Otrzymuje modyfikator +10 do Odporności podczas testów przeciwko chorobom.',
    }
  ]
}
function getOdpornoscNaMagie() {
  return [
    {
      zdolnosc: 'Odporność na magię',
      opis: 'Bohater w naturalny sposób opiera się działaniu czarów. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko magii.',
    }
  ]
}
function getOdpornoscNaTrucizny() {
  return [
    {
      zdolnosc: 'Odporność na trucizny',
      opis: 'Wyjątkowa odporność organizmu pozwala Bohaterowi osłabiać działania trucizny. Otrzymuje modyfikator +10 do Odporności podczas testów przeciwko truciznom.',
    }
  ]
}
function getOdpornoscPsychiczna() {
  return [
    {
      zdolnosc: 'Odporność psychiczna',
      opis: 'Bohater jest podatny na efekt szokujących i przerażających wydarzeń. Do momentu uzbierania 8 Punktów Obłędu nie musisz testować, czy Bohater nabawił się choroby umysłu.',
    }
  ]
}
function getOdwaga() {
  return [
    {
      zdolnosc: 'Odwaga',
      opis: 'Bohater odznacza się wyjątkową odwagą. Otrzymuje modyfikator +10 do Siły Woli podczas testów przeciwko Strachowi i Grozie oraz zastraszaniu.',
    }
  ]
}
function getOgluszenie() {
  return [
    {
      zdolnosc: 'Ogłuszenie',
      opis: 'Po udanym ataku bronią biała Bohater może zadeklarować próbę ogłuszenia przeciwnika, zamiast zadawać mu obrażenia. W takiej sytuacji należy wykonać przeciwstawny test Krzepy. Jeśli Bohater wygra, jego przeciwnik musi natychmiast wykonać test Odporności, dodając modyfikator +10 za każdy Punkt Zbroi hełmu lub osłony noszonej na głowie. Jeśli ten test będzie nieudany, przeciwnik zostaje ogłuszony na 1k10 rund. W tym czasie nie może podejmować żadnych akcji i nie może stosować umiejętności unik.',
    }
  ]
}
function getOpanowanie() {
  return [
    {
      zdolnosc: 'Opanowanie',
      opis: 'Bohater nigdy nie traci zimnej krwi. Otrzymuje +5 do Siły Woli, dodawane do początkowej wartości cechy.',
    }
  ]
}
function getOzywieniec() {
  return [
    {
      zdolnosc: 'Ożywieniec',
      opis: 'Postać jest nieumarłym stworem, przywróconym do życia za pomocą magii nekromanckiej. Jest odporna na Strach, Grozę, trucizny, choroby oraz wszystkie czary, umiejętności i zdolności, które wpływają na emocje i umysł.',
    }
  ]
}
function getPancerzWiary() {
  return [
    {
      zdolnosc: 'Pancerz wiary',
      opis: 'Dzięki żarliwej modlitwie Bohater potrafi skutecznie rzucać czary, nawet nosząc pancerz. Zdolność umożliwia dodanie +3 do ujemnego modyfikatora do poziomu mocy czaru, który związany jest noszeniem zbroi. Na przykład rzucanie czarów i jednoczesne zasłanianie się ciężką tarczą jest obciążone modyfikatorem -3. Zdolność pancerz wiary redukuje ten modyfikator do 0.',
    }
  ]
}
function getPoliglota() {
  return [
    {
      zdolnosc: 'Poliglota',
      opis: 'Bohater posiada naturalną zdolność uczenia się i zapamiętywania obcych języków. Otrzymuje modyfikator +10 do testów czytania i pisania oraz znajomości języka.',
    }
  ]
}
function getPrzemawianie() {
  return [
    {
      zdolnosc: 'Przemawianie',
      opis: 'Gdy Bohater przemawia, potrafi skupić uwagę większej grupy słuchaczy. Wykorzystując przekonywanie, może oddziaływać na grupę osób 10 razy liczniejszą niż normalnie. ',
    }
  ]
}
function getPrzerazajacy() {
  return [
    {
      zdolnosc: 'Przerażający',
      opis: 'Wygląd postaci wywołuje przerażenie wśród obserwatorów. Swoim zachowaniem wzbudza Grozę.',
    }
  ]
}
function getRozbrajanie() {
  return [
    {
      zdolnosc: 'Rozbrajanie',
      opis: 'Po udanym ataku bronią białą, Bohater może podjąć próbę rozbrojenia przeciwnika, zamiast zadawać mu obrażenia. W takiej sytuacji należy wykonać przeciwstawny test Zręczności. Jeśli Bohater wygra, jego przeciwnik zostaje rozbrojony i upuszcza broń. Broń można podnieść, wykonując akcję "użycie przedmiotu". Jeśli przeciwnik wygra, utrzymuje broń w ręce. Nie można rozbrajać przeciwnika, który walczy bronią naturalną (kły, pazury, itp.).',
    }
  ]
}
function getSilnyCios() {
  return [
    {
      zdolnosc: 'Silny cios',
      opis: 'Dzięki doświadczeniu nabytemu w wielu walkach Bohater potrafi precyzyjnie wymierzyć ciosy w walce wręcz. Otrzymuje modyfikator +1 do obrażeń zadawanych bronią białą.',
    }
  ]
}
function getStraszny() {
  return [
    {
      zdolnosc: 'Straszny',
      opis: 'Wygląd postaci wywołuje przestrach wśród obserwatorów. Swoim zachowaniem wzbudza Strach.',
    }
  ]
}
function getStrzalMierzony() {
  return [
    {
      zdolnosc: 'Strzał mierzony',
      opis: 'Wykonując atak bronią strzelecką, Bohater potrafi skoncentrować się i znacznie lepiej wycelować. Po zadeklarowaniu akcji "wycelowanie" otrzymuje modyfikator +20 do Umiejętności Strzeleckich przy rzucie na trafienie zamiast normalnego modyfikatora +10.',
    }
  ]
}
function getStrzalPrecyzyjny() {
  return [
    {
      zdolnosc: 'Strzał precyzyjny',
      opis: 'Wykonując atak bronią strzelecką, Bohater potrafi precyzyjnie wymierzyć strzał, który zadaje dodatkowe obrażenia. Otrzymuje modyfikator +1 do rzutów na obrażenia podczas ataku z użyciem broni strzeleckiej.',
    }
  ]
}
function getStrzalPrzebijajacy() {
  return [
    {
      zdolnosc: 'Strzał przebijający',
      opis: 'Bohater potrafi znaleźć odsłoniętą szczelinę w pancerzu przeciwnika. Po udanym ataku bronią strzelecką może zignorować 1 Punkt Zbroi przeciwnika. Jeśli przeciwnik nie nosi zbroi, ta zdolność jest nieskuteczna.',
    }
  ]
}
function getStrzelecWyborowy() {
  return [
    {
      zdolnosc: 'Strzelec wyborowy',
      opis: 'Bohater potrafi wyjątkowo celnie strzelać. Otrzymuje +5 do Umiejętności Strzeleckich , dodawane do początkowej wartości cechy.',
    }
  ]
}
function getSzalBojowy() {
  return [
    {
      zdolnosc: 'Szał bojowy',
      opis: 'W trakcie walki Bohater potrafi wpaść w szał bojowy. Przez jedną rundę musi się doprowadzić do wściekłości (wyjąc, gryząc tarczę, bijąc w piersi, itd.). W następnej rundzie jego pierwotna natura bierze górę, modyfikator +10 do testów Siły Woli i Krzepy, (także +1 do Siły, czyli zadawanych obrażeń), przy jednoczesnym modyfikatorze -10 do testów Inteligencji i Walki Wręcz. Podczas walki zawsze atakuje najbliższego przeciwnika, wykonując "atak wielokrotny", "szarżę" lub "szaleńczy atak", nie może uciekać ani wykonywać akcji "odwrót". BG zostaje pod wpływem szału bojowego do końca starcia.',
    }
  ]
}
function getSzczescie() {
  return [
    {
      zdolnosc: 'Szczęście',
      opis: 'Bohater jest nieprawdopodobnym szczęściarzem. Wydaje się wychodzić obronną ręką z najgorszych opresji. Każdego dnia dostaje dodatkowy Punkt Szczęścia.',
    }
  ]
}
function getSzostyZmysl() {
  return [
    {
      zdolnosc: 'Szósty zmysł',
      opis: 'Bohater jest niezwykle czujny i niemal instynktownie wyczuwa zagrożenie. W przypadku zasadzki lub innego zagrożenia Mistrz Gry może wykonać tajny test Siły Woli Bohatera. Jeśli test okaże się udany, Mistrz Gry powinien Cię poinformować, że Twój Bohater ma złe przeczucie albo wrażenie, że jest obserwowany. Dzięki temu BG obdarzony szóstym zmysłem może uniknąć zaskoczenia w początkowej fazie walki.',
    }
  ]
}
function getSzybkiRefleks() {
  return [
    {
      zdolnosc: 'Szybki refleks',
      opis: 'Bohater jest obdarzony wspaniałym refleksem. Otrzymuje +5 do Zręczności, dodawane do początkowej wartości cechy.',
    }
  ]
}
function getSzybkieWyciagniecie() {
  return [
    {
      zdolnosc: 'Szybkie wyciągnięcie',
      opis: 'Dzięki tej zdolności Bohater potrafi szybko zareagować, błyskawicznie dobywając broni lub wyciągając inny przedmiot zza pasa lub z kieszeni. Raz na rundę może użyć akcji "użycie przedmiotu" jako akcji natychmiastowej.',
    }
  ]
}
function getTalentArtystyczny() {
  return [
    {
      zdolnosc: 'Talent artystyczny',
      opis: 'Bohater potrafi tworzyć dzieła sztuki. Otrzymuje modyfikator +20 do testów rzemiosła (sztuka) oraz modyfikator +10 do testów wyceny przy szacowaniu wartości dzieła sztuki.',
    }
  ]
}
function getTwardziel() {
  return [
    {
      zdolnosc: 'Twardziel',
      opis: 'Bohater jest wyjątkowo odporny na ból i zranienia. Otrzymuje +1 do Żywotności, dodawane do początkowej wartości cechy.',
    }
  ]
}
function getUlicznik() {
  return [
    {
      zdolnosc: 'Ulicznik',
      opis: 'Bohater wychował się w mieście i z łatwością orientuje się w terenie zabudowanym. Otrzymuje modyfikator +10 do testów skradania się i ukrywania w mieście.',
    }
  ]
}
function getUrodzonyWojownik() {
  return [
    {
      zdolnosc: 'Urodzony wojownik',
      opis: 'Bohater wyjątkowo sprawnie posługuje się bronią białą. Otrzymuje +5 do Walki Wręcz, dodawane do początkowej wartości cechy.',
    }
  ]
}
function getWedrowiec() {
  return [
    {
      zdolnosc: 'Wędrowiec',
      opis: 'Bohater wychował się na wsi i z łatwością orientuje się w terenie wiejskim. Otrzymuje modyfikator+10 do testów skradania się i ukrywania na terenach poza miastem.',
    }
  ]
}
function getWidzenieWCiemnosci() {
  return [
    {
      zdolnosc: 'Widzenie w ciemności',
      opis: 'Bohater dysponuje zdolnością wyraźnego widzenia przy oświetleniu porównywalnym ze światłem gwiazd. Zasięg wzroku w takich warunkach wynosi 30 metrów. Zdolność jest bezużyteczna w całkowitej ciemności.',
    }
  ]
}
function getWoltyzerka() {
  return [
    {
      zdolnosc: 'Woltyżerka',
      opis: 'Bohater potrafi dokonywać niewiarygodnych czynów podczas jazdy konnej. Potrafi stać na rękach na grzbiecie galopującego wierzchowca, przeskakiwać z jednego konia na drugiego, zeskakiwać w pełnym biegu, itp. Bohater wykonuje testy jeździectwa tylko w najbardziej ekstremalnych sytuacjach, a i wtedy otrzymuje modyfikator +10 do testów tej umiejętności.',
    }
  ]
}
function getWyczucieKierunku() {
  return [
    {
      zdolnosc: 'Wyczucie kierunku',
      opis: 'Bohater instynktownie potrafi określać strony świata i orientować się w przestrzeni. Prawie nigdy się nie gubi i bez wahania potrafi wskazać kierunek północny. Dodatkowo otrzymuje modyfikator +10 do testów nawigacji.',
    }
  ]
}
function getWykrywaniePulapek() {
  return [
    {
      zdolnosc: 'Wykrywanie pułapek',
      opis: 'Bohater jest ekspertem w wykrywaniu i rozbrajaniu pułapek. Otrzymuje modyfikator +10 do testów spostrzegawczości i otwierania zamków związanych z wykrywaniem i unieszkodliwieniem pułapek.',
    }
  ]
}
function getWyostrzonezmysly() {
  return [
    {
      zdolnosc: 'Wyostrzone zmysły',
      opis: 'Bohater posiada wyjątkowo wyczulone zmysły. Otrzymuje modyfikator +20 do wszystkich testów spostrzegawczości.',
    }
  ]
}
function getZapasy() {
  return [
    {
      zdolnosc: 'Zapasy',
      opis: 'Bohater wyjątkowo dobrze walczy bez broni. Wykonując chwyt, otrzymuje modyfikator +10 do Walki Wręcz. Dodatkowo otrzymuje modyfikator +10 do Krzepy, gdy chwyta przeciwnika lub gdy wyzwala się z uścisku.',
    }
  ]
}
function getZapieklaNienawisc() {
  return [
    {
      zdolnosc: 'Zapiekła nienawiść',
      opis: 'Bohater podziela głęboko zakorzenioną wśród jego ludu wrogość wobec wszystkich zielonoskórych. Ta wiekowa już tradycja napełnia go taką nienawiścią, że otrzymuje modyfikator +5 do Walki Wręcz, gdy atakuje gobliny, orki i hobgobliny.',
    }
  ]
}
function getZmyslMagii() {
  return [
    {
      zdolnosc: 'Zmysł magii',
      opis: 'Bohater potrafi umiejętnie manipulować Wiatrami Magii. Otrzymuje modyfikator +10 do testów splatania magii oraz wykrywania magii.',
    }
  ]
}
function getZylkaHandlowa() {
  return [
    {
      zdolnosc: 'Żyłka handlowa',
      opis: 'Bohater potrafi sprzedać niemal wszystko. Otrzymuje modyfikator +10 do testów targowania i wyceny.',
    }
  ]
}
