import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  constructor(public share: SharedService, public authService: AuthService) { }

  ngOnInit(): void {
  }
  export() {
    this.share.exportPostaci();
  }
}
