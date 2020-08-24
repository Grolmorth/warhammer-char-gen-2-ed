import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  constructor(public share: SharedService) { }

  ngOnInit(): void {
  }
  export() {
    this.share.exportPostaci();
  }
}
