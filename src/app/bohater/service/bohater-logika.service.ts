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

}

// rasy
function getMockRasy() {
  return [
    {
      rasatitle: 'Człowiek', WW: 20, US: 20, K: 20, Odp: 20, Zr: 20, Int: 20, SW: 20, Ogd: 20, Sz: 4,
      umiejetnosci: ['Plotkowanie', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)']
    },
    {
      rasatitle: 'Krasnolud', WW: 30, US: 20, K: 20, Odp: 30, Zr: 10, Int: 20, SW: 20, Ogd: 10, Sz: 3,
      umiejetnosci: ['Znajomość języka(khazalid)', 'Wiedza(krasnoludy)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciRasy: [['Rzemiosło(górnictwo)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kowalstwo)']]
    },
    {
      rasatitle: 'Elf', WW: 20, US: 30, K: 20, Odp: 20, Zr: 30, Int: 20, SW: 20, Ogd: 20, Sz: 5,
      umiejetnosci: ['Wiedza(elfy)', 'Znajomość języka(eltharin)', 'Znajomość języka(staroświatowy)']
    },
    {
      rasatitle: 'Niziołek', WW: 10, US: 30, K: 10, Odp: 10, Zr: 30, Int: 20, SW: 20, Ogd: 30, Sz: 4,
      umiejetnosci: ['Plotkowanie', 'Znajomość języka(staroświatowy)', 'Wiedza(niziołki)', 'Znajomość języka(niziołków)', 'Nauka(genealogia/heraldyka)'],
      wyborUmiejetnosciRasy: [['Rzemiosło(gotowanie)', 'Rzemiosło(uprawa ziemi)']]
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
      opis: 'W hierarchii wartości mieszkańców Starego Świata religia spadła na drugie miejsce, ustępując bogactwu, ale wciąż jeszcze wielu młodych ludzi obojga płci znajduje w sobie powołanie do służby bożej. Praca kapłana wymaga poświęcenia i determinacji duchowej. Bycie akolitą to pierwszy krok na drodze ku kapłaństwu. Młodzi duchowni przechodzą surowe ćwiczenia pod opieką starszych kapłanów. Do końca nowicjatu nie mogą nauczać ani wygłaszać kazań.Czas spędzają na studiowaniu świętych ksiąg, czytaniu i przepisywaniu manuskryptów oraz na poznawaniu sztuki wzniosłego przemawiania. Akolici uczą się również walki na wypadek, gdyby trzeba było bronić świątyni.',
      // tslint:disable-next-line: max-line-length
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
      wyborUmiejetnosciProfesji: [['Nauka(astronomia)', 'Nauka(historia)']],

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
      umiejetnosci: ['Skradanie się', 'Spostrzegawczość', 'Ukrywanie się', 'Unik', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Wiedza(imperium)'], ['Plotkowanie', 'Sekretne znaki(złodziei)'], ['Powożenie', 'Jeździectwo'], ['Zastawianie pułapek', 'Pływanie']],
      zdolnosci: [],
      wyposazenie: []
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
      umiejetnosci: ['Kuglarstwo(gawędziarstwo)', 'Mocna głowa', 'Pływanie', 'Wiedza(norska)', 'Zastraszanie', 'Znajomość języka(norski)'],
      wyborUmiejetnosciProfesji: [[]],
      zdolnosci: [],
      wyposazenie: []
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
      zdolnosci: [],
      wyposazenie: []
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
      umiejetnosci: ['Plotkowanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Zwinne palce'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Powożenie'],
      ['Przekonywanie', 'Wycena'],
      ['Rzemiosło(gotowanie)', 'Rzemiosło(handel)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)'],
      ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],
      zdolnosci: [],
      wyposazenie: []
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
      umiejetnosci: ['Przekonywanie', 'Spostrzegawczość', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)'],
      ['Kuglarstwo(akrobatyka)', 'Kuglarstwo(aktorstwo)', 'Kuglarstwo(błaznowanie)', 'Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(komedianctwo)', 'Kuglarstwo(mimika)', 'Kuglarstwo(muzykalność)', 'Kuglarstwo(połykanie ognia)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Kuglarstwo(wróżenie z dłoni)', 'Kuglarstwo(żonglerka)'],
      ['Opieka nad zwierzętami', 'Pływanie'], ['Wycena', 'Plotkowanie'], ['Brzuchomówstwo', 'Gadanina', 'Hipnoza', 'Jeździectwo', 'Oswajanie', 'Tresura', 'Wspinaczka', 'Zwinne palce']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Leczenie', 'Przekonywanie', 'Rzemiosło(aptekarstwo)', 'Spostrzegawczość', 'Targowanie'],
      wyborUmiejetnosciProfesji: [['Powożenie', 'Pływanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)', 'Znajomość języka(tileański)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Nauka(teologia)', 'Przekonywanie', 'Wiedza(imperium)', 'Zastraszanie'
      ],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Nawigacja', 'Pływanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Wioślarstwo', 'Żeglarstwo'
      ],
      wyborUmiejetnosciProfesji: [['Mocna głowa', 'Plotkowanie'], ['Sekretny język(łowców)', 'Znajomość języka(kislevski)'], ['Wiedza(imperium)', 'Wiedza(kislev)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Jeździectwo', 'Opieka nad zwierzętami', 'Tresura', 'Unik'
      ],
      wyborUmiejetnosciProfesji: [['Nauka(genealogia/heraldyka)', 'Wiedza(bretonia)'], ['Przekonywanie', 'Plotkowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Unik', 'Zastraszanie'
      ],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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

      umiejetnosci: ['Nawigacja', 'Pływanie', 'Sekretne znaki(zwiadowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik'
      ],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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

      umiejetnosci: ['Nawigacja', 'Opieka nad zwierzętami', 'Spostrzegawczość', 'Wspinaczka'
      ],
      wyborUmiejetnosciProfesji: [['Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)'], ['Ukrywanie się', 'Powożenie'], ['Wycena', 'Sztuka przetrwania']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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

      umiejetnosci: ['Przeszukiwanie', 'Splatanie magii', 'Spostrzegawczość', 'Wykrywanie magii'
      ],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Hipnoza'], ['Opieka nad zwierzętami', 'Targowanie'], ['Oswajanie', 'Rzemiosło(aptekarstwo)'], ['Przekonywanie', 'Zastraszanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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

      umiejetnosci: ['Czytanie i pisanie', 'Zastraszanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Wspinaczka', 'Wycena'
      ],
      wyborUmiejetnosciProfesji: [['Otwieranie zamków', 'Skradanie się'], ['Ukrywanie się', 'Sztuka przetrwania'], ['Wiedza(imperium)', 'Sekretne znaki(złodziei)'], ['Znajomość języka(eltharin)', 'Znajomość języka(khazalid)', 'Znajomość języka(klasyczny)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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

      umiejetnosci: ['Gadanina', 'Przekonywanie', 'Spostrzegawczość', 'Wycena', 'Znajomość języka(staroświatowy)'
      ],
      wyborUmiejetnosciProfesji: [['Hazard', 'Sekretne znaki(złodziei)'], ['Kuglarstwo(aktorstwo)', 'Kuglarstwo(gawędziarstwo)'], ['Plotkowanie', 'Targowanie'], ['Przeszukiwanie', 'Sekretny język(złodziejski)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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

      umiejetnosci: ['Mocna głowa', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik', 'Wiedza(kislev)', 'Znajomość języka(kislevski)'
      ],
      wyborUmiejetnosciProfesji: [['Hazard', 'Targowanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Sekretne znaki(łowców)', 'Sekretny język(łowców)', 'Skradanie się', 'Spostrzegawczość', 'Ukrywanie się', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Tropienie', 'Zastawianie pułapek']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Sekretne znaki(łowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się'],
      wyborUmiejetnosciProfesji: [['Przeszukiwanie', 'Pływanie'], ['Skradanie się', 'Zastawianie pułapek']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Śledzenie', 'Tropienie', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wycena', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Czytanie i pisanie'], ['Wiedza(imperium)', 'Mocna głowa'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Unik', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Sekretny język(bitewny)', 'Unik'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Hazard'], ['Plotkowanie', 'Targowanie'], ['Powożenie', 'Jeździectwo'], ['Spostrzegawczość', 'Przeszukiwanie'], ['Wiedza(bretonia)', 'Wiedza(kislev)', 'Wiedza(tilea)'], ['Znajomość języka(tileański)', 'Pływanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Opieka nad zwierzętami', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Unik'],
      wyborUmiejetnosciProfesji: [['Hazard', 'Plotkowanie'], ['Powożenie', 'Pływanie'], ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Leczenie', 'Spostrzegawczość', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Hazard', 'Mocna głowa', 'Sekretny język(złodziejski)', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Gadanina', 'Nauka(genealogia/heraldyka)', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Znajomość języka(bretoński)', 'Znajomość języka(staroświatowy)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Przekonywanie', 'Spostrzegawczość', 'Ukrywanie się', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Nauka(historia)', 'Plotkowanie'], ['Nauka(prawo)', 'Wiedza(imperium)'], ['Znajomość języka(bretoński)', 'Znajomość języka(tileański)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
    }
  ];
}
function getPorywaczZwlok() {
  return [
    {
      title: 'Porywacz zwłok',
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
      umiejetnosci: ['Powożenie', 'Przeszukiwanie', 'Sekretne znaki(złodziei)', 'Skradanie się', 'Spostrzegawczość', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Pływanie', 'Sekretne znaki(zwiadowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Wiedza(imperium)', 'Wiedza(jałowa kraina)', 'Plotkowanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Pływanie', 'Powożenie', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Targowanie', 'Wioślarstwo', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Sekretny język(złodziejski)'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Sekretne znaki(złodziei)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Pływanie', 'Przekonywanie', 'Spostrzegawczość', 'Targowanie', 'Wiedza(imperium)', 'Wioślarstwo'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Zastraszanie'], ['Wycena', 'Sekretny język(łowców)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Pływanie', 'Spostrzegawczość', 'Sztuka przetrwania', 'Wioślrastwo', 'Żeglarstwo'],
      wyborUmiejetnosciProfesji: [['Mocna głowa', 'Targowanie'], ['Nawigacja', 'Rzemiosło(handel)'], ['Wiedza(imperium)', 'Wiedza(jałowa kraina)'], ['Znajomość języka(staroświatowy)', 'Znajomość języka(norski)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Plotkowanie', 'Pływanie', 'Przekonywanie', 'Rzemiosło(handel)', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Wiedza(imperium)', 'Wiedza(jałowa kraina)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Powożenie', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Targowanie', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Opieka nad zwierzętami', 'Plotkowanie'],
      ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)'],
      ['Rzemiosło(aptekarstwo)', 'Rzemiosło(bednarstwo)', 'Rzemiosło(garbarstwo)', 'Rzemiosło(gotowanie)', 'Rzemiosło(górnictwo)', 'Rzemiosło(górnictwo odkrywkowe)', 'Rzemiosło(handel)', 'Rzemiosło(jubilerstwo)', 'Rzemiosło(kaligrafia)', 'Rzemiosło(kamieniarstwo)', 'Rzemiosło(kartografia)', 'Rzemiosło(kowalstwo)', 'Rzemiosło(krawiectwo)', 'Rzemiosło(młynarstwo)', 'Rzemiosło(piwowarstwo)', 'Rzemiosło(płatnerstwo)', 'Rzemiosło(rusznikarstwo)', 'Rzemiosło(rymarstwo)', 'Rzemiosło(stolarstwo)', 'Rzemiosło(szkutnictwo)', 'Rzemiosło(szewstwo)', 'Rzemiosło(sztuka)', 'Rzemiosło(świecarstwo)', 'Rzemiosło(uprawa ziemi)', 'Rzemiosło(wyrób łuków)', 'Rzemiosło(zielarstwo)', 'Rzemiosło(złotnictwo)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Jeździectwo', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Targowanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Rzemiosło(kaligrafia)', 'Sekretny język(gildii)', 'Spostrzegawczość', 'Wiedza(imperium)', 'Znajomość języka(klasyczny)'],
      wyborUmiejetnosciProfesji: [['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)'], ['Wiedza(imperium)', 'Plotkowanie'], ['Znajomość języka(staroświatowy)', 'Znajomość języka(tileański)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Gadanina', 'Plotkowanie', 'Spostrzegawczość', 'Unik'],
      wyborUmiejetnosciProfesji: [['Czytanie i pisanie', 'Zwinne palce'], ['Opieka nad zwierzętami', 'Rzemiosło(gotowanie)'], ['Powożenie', 'Przeszukiwanie'], ['Targowanie', 'Wycena']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Nauka(prawo)', 'Plotkowanie', 'Przeszukiwanie', 'Spostrzegawczość', 'Tropienie', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Jeździectwo', 'Nawigacja', 'Opieka nad zwierzętami', 'Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Sztuka przetrwania'],
      wyborUmiejetnosciProfesji: [['Tropienie', 'Sekretne znaki(zwiadowców)'], ['Wiedza(imperium)', 'Plotkowanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się'],
      wyborUmiejetnosciProfesji: [['Nauka(nekromancja)', 'Wiedza(imperium)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Dowodzenie', 'Mocna głowa', 'Przeszukiwanie', 'Spostrzegawczość', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Zwinne palce']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Opieka nad zwierzętami', 'Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Tresura', 'Ukrywanie się', 'Zastawianie pułapek'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Nauka(anatomia)', 'Unik', 'Wiedza(estalia)', 'Znajomość języka(estalijski)'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Jeździectwo', 'Przekonywanie', 'Wiedza(imperium)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Gadanina', 'Dowodzenie'], ['Hazard', 'Plotkowanie'], ['Mocna głowa', 'Kuglarstwo(muzykalność)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Opieka nad zwierzętami', 'Powożenie', 'Przeszukiwanie', 'Spostrzegawczość', 'Targowanie', 'Wiedza(imperium)', 'Wycena'],
      wyborUmiejetnosciProfesji: [['Przekonywanie', 'Plotkowanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Nawigacja', 'Spostrzegawczość', 'Śledzenie', 'Unik', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Język tajemny(magiczny)', 'Nauka(magia)', 'Przeszukiwanie', 'Splatanie magii', 'Spostrzegawczość', 'Wykrywanie magii', 'Znajomość języka(klasyczny)'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Przeszukiwanie', 'Sekretne znaki(łowców)', 'Spostrzegawczość', 'Sztuka przetrwania', 'Targowanie', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Powożenie', 'Plotkowanie'], ['Wiedza(imperium)', 'Ukrywanie się']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Nawigacja', 'Plotkowanie', 'Skradanie się', 'Sztuka przetrwania'],
      wyborUmiejetnosciProfesji: [['Kuglarstwo(gawędziarstwo)', 'Kuglarstwo(śpiew)', 'Kuglarstwo(taniec)', 'Sekretne znaki(łowców)', 'Sekretne znaki(złodziei)'],
      ['Leczenie', 'Spostrzegawczość'], ['Plotkowanie', 'Sekretny język(łowców)', 'Sekretny język(złodziejski)'], ['Targowanie', 'Pływanie'], ['Wiedza(bretonia)', 'Wiedza(estalia)', 'Wiedza(kislev)', 'Wiedza(tilea)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Skradanie się', 'Spostrzegawczość', 'Sztuka przetrwania', 'Tropienie', 'Ukrywanie się', 'Unik', 'Wspinaczka'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Przeszukiwanie']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Nawigacja', 'Opieka nad zwierzętami', 'Powożenie', 'Sekretne znaki(łowców)', 'Spostrzegawczość'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Jeździectwo'], ['Plotkowanie', 'Targowanie'], ['Znajomość języka(bretoński)', 'Znajomość języka(kislevski)', 'Znajomość języka(tileański)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Mocna głowa', 'Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [[]],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Jeździectwo', 'Nauka(prawo)', 'Przekonywanie', 'Spostrzegawczość'],
      wyborUmiejetnosciProfesji: [['Dowodzenie', 'Nawigacja'], ['Opieka nad zwierzętami', 'Plotkowanie'], ['Zastraszanie', 'Wiedza(imperium)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Przeszukiwanie', 'Skradanie się', 'Spostrzegawczość', 'Ukrywanie się'],
      wyborUmiejetnosciProfesji: [['Czytanie i pisanie', 'Zwinne palce'], ['Hazard', 'Otwieranie zamków'], ['Przekonywanie', 'Wspinaczka'], ['Sekretny język(złodziejski)', 'Sekretne znaki(złodziei)'], ['Wycena', 'Charakteryzacja']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Czytanie i pisanie', 'Spostrzegawczość', 'Znajomość języka(klasyczny)', 'Znajomość języka(staroświatowy)'],
      wyborUmiejetnosciProfesji: [['Leczenie', 'Przeszukiwanie'], ['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)'],
      ['Nauka(astronomia)', 'Nauka(anatomia)', 'Nauka(alchemia)', 'Nauka(demonologia)', 'Nauka(filozofia)', 'Nauka(historia)', 'Nauka(inżynieria)', 'Nauka(magia)', 'Nauka(genealogia/heraldyka)', 'Nauka(matematyka)', 'Nauka(nekromancja)', 'Nauka(prawo)', 'Nauka(runy)', 'Nauka(strategia/taktyka)', 'Nauka(sztuka)', 'Nauka(teologia)', 'Plotkowanie'],
      ['Przekonywanie', 'Mocna głowa']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Pływanie', 'Unik', 'Wioślarstwo', 'Wspinaczka', 'Żeglarstwo'],
      wyborUmiejetnosciProfesji: [['Mocna głowa', 'Spostrzegawczość'], ['Wiedza(bretonia)', 'Wiedza(norska)', 'Wiedza(tilea)', 'Wiedza(jałowa kraina)'], ['Znajomość języka(bretoński)', 'Znajomość języka(tileański)', 'Znajomość języka(norski)']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Unik', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Hazard', 'Plotkowanie'], ['Opieka nad zwierzętami', 'Leczenie'], ['Powożenie', 'Jeździectwo'],['Wiedza(imperium)', 'Spostrzegawczość']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
      umiejetnosci: ['Mocna głowa', 'Pływanie', 'Unik', 'Wioślarstwo', 'Zastraszanie'],
      wyborUmiejetnosciProfesji: [['Plotkowanie', 'Sekretny język(bitewny)'], ['Wiedza(jałowa kraina)', 'Hazard']],

      zdolnosci: [

      ],
      wyposazenie: [

      ]
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
function getJezykTajemnyMagiczny() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Język Tajemny(magiczny)',
      cecha: 'Inteligencja',
      opis: 'opis jezyk tajemny',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
      opis: 'opis kuglarstwa',
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
function getNaukaAlchemia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(alchemia)',
      cecha: 'Inteligencja',
      opis: 'opis jezdziectwa',
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
function getNaukaDemonologia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(demonologia)',
      cecha: 'Inteligencja',
      opis: 'opis jezdziectwa',
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
      opis: 'opis jezdziectwa',
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
function getNaukaInzynieria() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Nauka(inżynieria)',
      cecha: 'Inteligencja',
      opis: 'opis jezdziectwa',
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
      opis: 'opis jezdziectwa',
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
      opis: 'opis jezdziectwa',
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
      opis: 'opis jezdziectwa',
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
      opis: 'opis jezdziectwa',
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
      opis: 'opis jezdziectwa',
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
      opis: 'opis jezdziectwa',
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
function getRzemiosloAptekarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(aptekarstwo)',
      cecha: 'Inteligencja',
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloBednarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(bednarstwo)',
      cecha: 'Siła',
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloGarbarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(garbarstwo)',
      cecha: 'Siła',
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloGornictwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(górnictwo)',
      cecha: 'Siła',
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloGornictwoOdkrywkowe() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(górnictwo odkrywkowe)',
      cecha: 'Siła',
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloKowalstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(kowalstwo)',
      cecha: 'Siła',
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloMlynarstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(młynarstwo)',
      cecha: 'Siła',
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
      zdolnoscipokrewne: 'krasnoludzki fach, talent artystyczny.'
    }
  ]
}
function getRzemiosloPlatnerstwo() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Rzemiosło(płatnerstwo)',
      cecha: 'Siła',
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis rzemiosla ',
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
      opis: 'opis sekretnych znakow',
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
      opis: 'opis sekretnych znakow',
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
      opis: 'opis sekretnych znakow',
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
      opis: 'opis sekretnych znakow',
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
      opis: 'opis sekretny jezyk',
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
      opis: 'opis sekretny jezyk',
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
      opis: 'opis sekretny jezyk',
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
function getWiedzaBretonia() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Wiedza(bretonia)',
      cecha: 'Inteligencja',
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
      opis: 'opis wiedzy',
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
function getZnajomoscJezykaBretonski() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(bretoński)',
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
      umiejetnosc: 'Znajomość Języka(eltharin)',
      cecha: 'Inteligencja',
      opis: 'opis znajomosci jezyka',
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
      opis: 'opis znajomosci jezyka',
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
      opis: 'opis znajomosci jezyka',
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
      opis: 'opis znajomosci jezyka',
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
      opis: 'opis znajomosci jezyka',
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
      opis: 'opis znajomosci jezyka',
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
function getZnajomoscjezykaNiziolkow() {
  return [
    {
      typ: 'Zaawansowana',
      umiejetnosc: 'Znajomość Języka(niziołków)',
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
