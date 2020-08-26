import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Score } from './../../services/score';
import { Component, OnInit } from '@angular/core';

import { map, last } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ScoreService } from 'src/app/services/score.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  score: any;
  highest = 0;
  arrayNumber = 0;



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
      if (score.length > 20) {
        for (let n = 0; n < score.length; n++) {
          for (let m = 0; m < score.length; m++) {
            if (score[m].czas >= score[n].czas) {
              if (score[m].czas > this.highest) {
                this.highest = score[m].czas;
                this.arrayNumber = m;
              }
            }
            else {
              if (score[n].czas > this.highest) {
                this.highest = score[n].czas;
                this.arrayNumber = n;
              }
            }
          }
          return this.scoreService.highscoreRef.doc(score[this.arrayNumber].key).delete();

        }
      }


      return score.sort((a, b) => {
        return (a.czas) - (b.czas);
      });

    });

  }



}
