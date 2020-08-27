import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-bohater',
  templateUrl: './footer-bohater.component.html',
  styleUrls: ['./footer-bohater.component.css']
})
export class FooterBohaterComponent implements OnInit {

  constructor() { }
  rollNumber: number;
  rollDisabled = false;

  ngOnInit(): void {
  }
  // funkcja losujaca

  randomNumber(min, max) {
    this.rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.rollDisabled = true;
    setTimeout(() => {
      this.rollDisabled = false;
    }, 3000);

  }

}


