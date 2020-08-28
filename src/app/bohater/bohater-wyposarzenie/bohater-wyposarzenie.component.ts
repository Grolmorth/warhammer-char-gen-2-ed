import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-bohater-wyposarzenie',
  templateUrl: './bohater-wyposarzenie.component.html',
  styleUrls: ['./bohater-wyposarzenie.component.css']
})
export class BohaterWyposarzenieComponent implements OnInit {

  constructor(public share:SharedService) { }

  ngOnInit(): void {
  }

}
