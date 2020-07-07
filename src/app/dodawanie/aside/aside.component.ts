import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ScoreService } from 'src/app/services/score.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  score: any;

  constructor(private scoreService: ScoreService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getScoreList();
  }

  getScoreList() {
    this.scoreService.getScoreList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })

        )
      )
    ).subscribe(score => {
      this.score = score;

      return score.sort((a, b) => {
        return (a.czas) - (b.czas);
      });
    });
  }



}
