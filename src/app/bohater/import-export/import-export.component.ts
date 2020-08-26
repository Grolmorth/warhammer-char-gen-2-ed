import { BohaterOgolne } from './../service/bohaterOgolne';
import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {
  rasa: BohaterOgolne;
  profesja: BohaterOgolne;

  constructor(public share: SharedService, public authService: AuthService) { }



  ngOnInit(): void {
    this.rasa = this.share.poczatkoweStatystykiRasowe;
    this.profesja = this.share.schematRozwojuProfesja;

  }
  export() {
    this.share.exportPostaci();
  }
  refresh(): void {
    location.reload();
  }

}
