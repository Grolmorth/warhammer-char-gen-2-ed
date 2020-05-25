import { Component } from '@angular/core';


@Component({
  selector: 'app-dodawanie',
  templateUrl: './dodawanie.component.html',
  styleUrls: ['./dodawanie.component.css']
})
export class DodawanieComponent {

  tab1 = new Array;
  tab = new Array;
  tabOdpowiedzi1 = new Array;
  tabOdpowiedzi2 = new Array;
  submitted = true;
  liczba1: number;
  liczba2: number;
  dobreodpowiedzi: number = 0;

  wynik: number;
  //losowy numer 0-3
  randomNumber0to3() {
    return Math.floor((Math.random() * 4));
  }

  //losowy numer 1-10

  randomNumber1to10() {
    return Math.floor((Math.random() * 10) + 1);
  }

  //losowy numer 2-20

  randomNumber2to20() {
    return Math.floor((Math.random() * 19) + 2);
  }
  //cala funkcja losujaca

  getRandom() {
    this.start();

    //losowanie 5 liczb

    for (let i = 0; i < 5; i++) {
      this.tab[i] = this.randomNumber1to10();
    }

    //przypisywanie dobrego i złego wyniku do zmiennych

    let dobrywynik = this.tab[0] + this.tab[1];
    let zlywynik1 = this.tab[1] + this.tab[2];
    let zlywynik2 = this.tab[2] + this.tab[3];
    let zlywynik3 = this.tab[3] + this.tab[4];

    //sprawdzanie czy odpowiedzi się nie powtarzają

    for (; dobrywynik === zlywynik1 || dobrywynik === zlywynik2 || dobrywynik === zlywynik3 ||
      zlywynik1 === zlywynik2 || zlywynik1 === zlywynik3 || zlywynik2 === zlywynik3;) {
      zlywynik1 = this.randomNumber2to20();
      zlywynik2 = this.randomNumber2to20();
      zlywynik3 = this.randomNumber2to20();
    }

    //zmienne wyswietlane w tresci zadania

    this.liczba1 = this.tab[0];
    this.liczba2 = this.tab[1];

    //przypisywanie wszystkich odpowiedzi do tablicy

    this.tabOdpowiedzi1[0] = dobrywynik;
    this.tabOdpowiedzi1[1] = zlywynik1;
    this.tabOdpowiedzi1[2] = zlywynik2;
    this.tabOdpowiedzi1[3] = zlywynik3;

    //przypisywanie odpowiedzi do losowych miejsc w nowej tablicy tabOdpowiedzi2


    for (let i = 0; i < this.tabOdpowiedzi1.length; i++) {
      this.tab1[i] = this.randomNumber0to3();
      for (let j = i; j !== 0; j--) {
        if (this.tab1[i] === this.tab1[j - 1]) {
          i--;
        }
      }
      this.tabOdpowiedzi2[this.tab1[i]] = this.tabOdpowiedzi1[i];
    }

    //pokazywanie nowego zadania

    this.onSubmit();
  }

  //wyswietlane komunikaty

  wygrales() {

    this.getRandom();
    this.dobreodpowiedzi = this.dobreodpowiedzi + 1;

  }
  przegrales() {
    this.stop();
    this.submitted = true;
  }

  resetPytania() {
    this.dobreodpowiedzi = 0;
    this.seconds = 0;
  }
  //warunek dobrej odpowiedzi

  czyWygrales(a: number) {
    if (a === this.liczba1 + this.liczba2) {
      this.wygrales();
    }
    else { this.przegrales(); }
  }

  onSubmit(): void {
    this.submitted = false;
  }

  //dodanie timera

  intervalId = 0;
  czas = 0;
  seconds = 0;

  clearTimer() { clearInterval(this.intervalId); }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds += 0.01;
      if (this.dobreodpowiedzi === 3) {
        this.czas = this.seconds;
        this.stop();
        this.submitted = true;

      } else {
        this.czas = this.seconds;
      }
    }, 10);
  }
}





