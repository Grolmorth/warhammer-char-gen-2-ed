import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  score: any;

  constructor(private scoreService: ScoreService) { }

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
